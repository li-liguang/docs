---
id: baremetal
title: 裸金属安装
sidebar_label: 裸金属安装
---

> https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/baremetal.md

在传统云环境中，网络负载平衡器可按需提供，一个单独的Kubernetes清单足够提供一个`nginx-ingress-controller`外部客户端单点接触，并且，间接地，对于任何一个在集群中运行的应用。

裸金属环境缺乏这个，需要稍微不同的设置才能提供与外部消费者相同的访问权限。

## 纯软件解决方案：MetalLB

`MetalLB`为k8s集群提供一个网络负载均衡器的实现，有效地允许在任何集群中使用LoadBalancer服务。

本节演示如何在集群中使用`MetalLB` 的`Layer 2`配置模式实现`nginx-ingress-controlelr`具有可公开访问的节点。在这个模式下，一个集群节点中为`ingress-nginx`service服务IP吸引所有的流量。详情请查看[流量策略](https://metallb.universe.tf/usage/#traffic-policies)

![MetalLB in L2 mode](./asserts/metallb.jpg)

`MetalLB`可以用一个单独的K8S清单部署，或者使用Helm安装。本例的其余部分假设`MetalLB`已经按照[安装说明](https://metallb.universe.tf/installation/)部署了。

`MetalLB`需要一个`IP`地址池，为了可以获得`ingress-nginx`服务的所有权。这个地址池可以使用一个命名为`config`的`ConfigMap`定义（与`MetalLB`位于同一个命名空间）。这个地址池中的`IP`地址必须为`MetalLB`专用，不能作为k8s节点IP，以及不能由DHCP服务分发。

示例给出一个三节点的集群（external IP仅作为示例，在大部分裸金属环境中这个值为None）

```console
​```console
$ kubectl get node
NAME     STATUS   ROLES    EXTERNAL-IP
host-1   Ready    master   203.0.113.1
host-2   Ready    node     203.0.113.2
host-3   Ready    node     203.0.113.3
​```

After creating the following ConfigMap, MetalLB takes ownership of one of the IP addresses in the pool and updates
the *loadBalancer* IP field of the `ingress-nginx` Service accordingly.

​```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 203.0.113.10-203.0.113.15
​```

​```console
$ kubectl -n ingress-nginx get svc
NAME                   TYPE          CLUSTER-IP     EXTERNAL-IP  PORT(S)
default-http-backend   ClusterIP     10.0.64.249    <none>       80/TCP
ingress-nginx          LoadBalancer  10.0.220.217   203.0.113.10  80:30100/TCP,443:30101/TCP
​```
```

一旦`MetalLB`为`ingress-nginx`的`LoadBalancer`服务设置了外部IP地址，在`iptables`的`NAT`列表中将创建一条对应的网络规则，并且具有选定IP地址的节点开始在`LoadBalancer`服务中配置的端口上响应HTTP请求：

```bash
$ curl -D- http://203.0.113.10 -H 'Host: myapp.example.com'
HTTP/1.1 200 OK
Server: nginx/1.15.2
```

!!! tip In order to preserve the source IP address in HTTP requests sent to NGINX, it is necessary to use the `Local` traffic policy. Traffic policies are described in more details in [Traffic policies](https://metallb.universe.tf/usage/#traffic-policies) as well as in the next section.

## Over a NodePort Service

由于其简单性，这是用户在遵循所述步骤时默认部署的设置。

> 类型为`NodePort`暴露的Service服务，通过`kube-proxy`组件，在每一个K8S集群节点（包括master节点）同一个没有特权的端口（默认30000 - 32767）。

在这个配置中，`NGINX`容器与主机网络保持隔离。因此，它可以安全的绑定任意端口，包括标准HTTP端口`80`和`443`。然而，由于容器的命名空间隔离，位于集群外的客户端（例如公网）禁止通过Ingress访问`80`和`443`端口。相反，外部客户端必须将分配给`ingress nginx`服务的节点端口附加到HTTP请求中。

![nodeport](./asserts/nodeport.jpg)

以下示例，给出`NodePort`端口30100分配给`ingress-nginx`服务

```bash
​```console
$ kubectl -n ingress-nginx get svc
NAME                   TYPE        CLUSTER-IP     PORT(S)
default-http-backend   ClusterIP   10.0.64.249    80/TCP
ingress-nginx          NodePort    10.0.220.217   80:30100/TCP,443:30101/TCP
​```

and a Kubernetes node with the public IP address `203.0.113.2` (the external IP is added as an example, in most
bare-metal environments this value is <None\>)

​```console
$ kubectl get node
NAME     STATUS   ROLES    EXTERNAL-IP
host-1   Ready    master   203.0.113.1
host-2   Ready    node     203.0.113.2
host-3   Ready    node     203.0.113.3
​```

a client would reach an Ingress with `host: myapp.example.com` at `http://myapp.example.com:30100`, where the
myapp.example.com subdomain resolves to the 203.0.113.2 IP address.
```

危险“对主机系统造成影响”，可通过`--service-node-port-range`重新配置`NodePort`端口范围，包括可以暴露`80`和`443`端口，这样做可能会导致意外问题，包括（但不限于）使用系统守护进程保留的端口和授予kube代理权限的必要性，否则可能不需要。

```
This practice is therefore **discouraged**. See the other approaches proposed in this page for alternatives.
```

这种方法还有一些其他的局限性，我们应该注意：

- Source IP address

默认情况下，NodePort类型的服务执行源地址转换。

- Ingress status



- Redirects



## 通过主机网络

在没有可用的外部负载平衡器的设置中，但不能使用NodePorts， 这个方法的好处就是`nginx ingress controller`可以绑定80和443端口，而不需要`NodePort`服务强加的额外网络翻译。

> 注意：这种方法不利用任何Service对象来暴露`NGINX ingress controller`。如果目标集群中存在`ingress nginx`Service服务，建议将其删除。

这可以通过在Pods规范中启用hostNetwork选项来实现

```yaml
template:
  spec:
    hostNetwork: true
```

> 出于安全考虑，启用这个配置，在任何网络接口上，暴露系统守护进程给ingress控制器，包括主机回环。请仔细评估这可能对系统安全造成的影响。

例如，考虑由2个副本组成的ingress nginx控制器部署，nginx Pod从其主机的IP地址而不是内部Pod IP继承。

```console
$ kubectl -n ingress-nginx get pod -o wide
NAME                                       READY   STATUS    IP            NODE
default-http-backend-7c5bc89cc9-p86md      1/1     Running   172.17.1.1    host-2
ingress-nginx-controller-5b4cf5fc6-7lg6c   1/1     Running   203.0.113.3   host-3
ingress-nginx-controller-5b4cf5fc6-lzrls   1/1     Running   203.0.113.2   host-2
```

这种部署方法的一个主要局限性是，在每一个集群节点上，只有一个ingress控制器`pod`会被调度。因为在同一网络接口上多次绑定同一端口在技术上是不可能的。没有被调度的`Pods`由于这种情况，将导致以下事件失败：

```bash
$ kubectl -n ingress-nginx describe pod <unschedulable-ingress-nginx-controller-pod>
...
Events:
  Type     Reason            From               Message
  ----     ------            ----               -------
  Warning  FailedScheduling  default-scheduler  0/3 nodes are available: 3 node(s) didn't have free ports for the requested pod ports.
```

确保只有可被调用的Pod会被创建的一个方法，就是安装`nginx ingress controller`时，作为一个*`DaemonSet`*替换传统的`Deployment`。

> `DaemonSet`只为每个群集节点（包括master节点）调度一种类型的Pod，除非该节点被配置为`repel those Pods`。更多详情，请查看[DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)。

由于`DaemonSet`对象的大多数属性都与`Deployment`对象相同，因此此文档页面将由用户自行决定相应清单的配置。





