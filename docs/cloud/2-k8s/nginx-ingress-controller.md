---
id: nginx-ingress
title: nginx ingress controller安装指南
sidebar_label: nginx ingress controller安装指南
---

支持多种安装方式：
- 使用Helm，从chart仓库安装
- 使用`kubectl apply`，YAML清单安装
- 从特殊加载项安装（例如：[minikube](#minikube)或者[MicroK8s](#microk8s)）

对于大多数`Kubernetes`集群，ingress controller不需要任何额外的配置即可工作。如果你想尽快开始使用，您可以查看[快速启动](#快速启动)说明。但是，在许多环境中，您可以通过启用额外的特性来提高性能或获得更好的日志。我们推荐您查看[特定环境说明](#特定环境说明)有关为特定环境或云提供商优化入口控制器的详细信息。
## 内容
- 快速启动
- 特定环境说明
  * Docker desktop
  * minikube
  * MicroK8s
  * AWS
  * GCE - GKE
  * Azure
  * Digital Ocean
  * Scaleway
  * Exoscale
  * Oracle cloud infrastructure
  * Bare-metal(裸金属)
- 混合
## 快速启动
**如果您有安装Helm**，可以使用以下命令安装`ingress controller`: 
```bash
helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
  --namespace ingress-nginx --create-namespace
```
这个命令相当于：
如果已经安装控制器，就更新；如果没有安装则安装。
**如果您没有安装Helm**，或者您更喜欢使用YAML清单，您可以运行以下命令安装控制器：
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```
> 上面命令使用的YAML清单是由Helm模板生成的，因此上面两种安装方式得到的k8s资源是相同的。

> 注意：如果您的k8s版本比较老（1.18或更早），请阅读[这段](https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/index.md#running-on-Kubernetes-versions-older-than-1.19)特殊说明。
### 使用前检查
在`nginx-ingress`这个命名空间下，应该有几个pods运行。
```bash
kubectl get pods --namespace=ingress-nginx
```
稍等一会，这几个pods将处于运行中状态。下面的命令将等待入口控制器POD启动、运行并准备就绪：
```bash
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \  --selector=app.kubernetes.io/component=controller \  --timeout=120s
```
### 本地测试
创建一个简单的网络服务，以及相关联的service，
```bash
kubectl create deployment demo --image=httpd --port=80
kubectl expose deployment demo
```
然后创建一个ingress资源
```bash
kubectl create ingress demo-localhost --class=nginx \
  --rule=demo.localdev.me/*=demo:80
```
 然后，映射一个本地端口
 ```bash
 kubectl port-forward --namespace=ingress-nginx service/ingress-nginx-controller 8080:80
 ```
 到这里之后，如果你在浏览器访问[http://demo.localdev.me:8080/](http://demo.localdev.me:8080/)，你将看到一个写着“it works!”的html页面。

### 在线测试
如果您的Kubernetes集群是一个“真正的”集群，它支持`LoadBalenger`类型的服务，它将向入口控制器分配外部IP地址或FQDN。
您可以通过以下命令看到IP地址或FQDN：
```bash
kubectl get service ingress-nginx-controller --namespace=ingress-nginx
```
它将是`EXTERNAL`字段。如果该字段显示`<Pending>`，这意味着您的Kubernetes集群无法提供负载均衡器(通常，这是因为它不支持`LoadBalenger`类型的服务)。
如果有外部IP地址(或者FQDN)，设置一个指向它的DNS记录。然后创建一个ingress资源。下面这个示例，假定设置了一个`www.demo.io`的DNS：
```bash
kubectl create ingress demo --class=nginx \
  --rule="www.demo.io/*=demo:80"
```
或者，上面的命令可以使用`--rule`命令替代：
```bash
kubectl create ingress demo --class=nginx \
  --rule www.demo.io/=demo:80
```
当浏览器访问[http://www.demo.io/](http://www.demo.io/)时，你可以看到一个写着“it works!”的html页面。恭喜您，您正在为一个在Kubernetes集群上托管的公共网站服务！ 🎉

## 特定环境说明
### 本地开发环境集群
#### minikube
入口控制器可以通过Minkube的加载项系统安装：
```bash
minikube addons enable ingress
```
#### MicroK8s
入口控制器可以通过MicroK8s的加载项系统安装：
```bash
microk8s enable ingress
```
详情请查看[MicroK8s文档](https://microk8s.io/docs/addon-ingress)

#### Docker Desktop

以下Docker Desktop版本支持Kubernetes：

- Mac：[version 18.06.0-ce](https://docs.docker.com/docker-for-mac/release-notes/#stable-releases-of-2018)
- Windows：[version 18.06.0-ce](https://docs.docker.com/docker-for-windows/release-notes/#docker-community-edition-18060-ce-win70-2018-07-25)

首先，确认Docker设置中是否启用Kubernetes。命令`kubectl get nodes`需显示一个名为`docker-desktop`的单节点。
在docker desktop可以使用默认快速启动说明，安装ingress控制器。
在大部分系统中，如果没有其他`LoadBalancer`类型的service绑定到80端口，ingress控制器将被指派一个`localhost`的外部IP(`EXTERNAL_IP`)，这意味着它可以在本地通过`localhost:80`访问。如果不起作用，你可能需要回到[本地测试](本地测试)章节的`kubectl port-forward`方法描述。

### 云部署环境

在某些情况下，如果云提供商的负载平衡器对其后端执行主动健康检查(大多数是这样)，你可以更改ingress控制器service的`externalTrafficPolicy`为`Local`(默认值为`Cluster`)来保存一个额外的hop。如果您使用Helm安装，可以在`helm install`或者`helm upgrade`时添加命令`--set controller.service.externalTrafficPolicy=Local`来完成上述操作。

此外，如果云服务提供商的负载均衡器，支持代理协议，你可以启用它，它可以让ingress控制器看到客户端的真实IP地址。否则，通常会看到上行负载均衡器的IP地址。要实现这个效果，必须同时在云提供商的负载均衡器配置，以及ingress控制器设置`--set controller.config.use-proxy-protocol=true`才能生效。

在下面的部分中，我们提供了YAML清单，在可能的情况下使用各种云提供商的特定选项启用这些选项。

#### AWS
在AWS中，我们使用一个网络负载均衡器`Network Load Balancer(NLB)`暴露Service的type类型为`LoadBalancer`的`nginx ingress controller`。
> info

##### Network Load Balancer(NLB)

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/aws/deploy.yaml
```

##### TLS termination in AWS Load Balancer(NLB)

默认情况下，TLS在入口控制器中终止。但在负载均衡器中也有可能终止TLS。本节解释如何使用NLB在AWS上执行此操作。

 1. 下载deploy.yaml模板
```bash
wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/aws/nlb-with-tls-termination/deploy.yaml
```
 2. 修改文件，将PVC CIDR改为对应的k8s集群配置
```bash
proxy-real-ip-cidr: XXX.XXX.XXX/XX
```
3. 还更改AWS证书管理器(ACM)ID：
```bash
arn:aws:acm:us-west-2:XXXXXXXX:certificate/XXXXXX-XXXXXXX-XXXXXXX-XXXXXXXX
```
4. 部署yaml清单
```bash
kubectl apply -f deploy.yaml
```

##### NLB Idle Timeouts
TCP请求的空闲超时时间为350秒，并且无法修改。
由于这个原因，您需要确保`keepalive_timeout`值的配置小于350秒才能按预期工作。
nginx的默认`keepalive_timeout`值为`75s`。
关于超时的更多详细信息，请查看[AWS官方文档](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#connection-idle-timeout)

#### GCE-GKE

首先，你的用户需要在k8s集群中拥有`cluster-admin`权限。可以使用以下命令获取权限：
```bash
kubectl create clusterrolebinding cluster-admin-binding \
  --clusterrole cluster-admin \  --user $(gcloud config get-value account)
```
然后，你可以如下方式，安装ingress控制器：
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```
> warnning 对于私有集群，您还需要添加一条额外的防火墙规则，来允许集群master节点在工作节点上配置使用`8443/tcp`端口，或者修改允许访问端口`80/tcp`、`443/tcp`和`10254/tcp`的现有规则，也允许访问端口`8443/tcp`。

```bash
See the [GKE documentation](https://cloud.google.com/kubernetes-engine/docs/how-to/private-clusters#add_firewall_rules) on adding rules and the [Kubernetes issue](https://github.com/kubernetes/kubernetes/issues/79739) for more detail.
```
> 注意，`KCE-GKE`不支持代理协议！

#### Azure

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```
关于Azure注解的更多信息，请查看[AKS官方文档](https://docs.microsoft.com/en-us/azure/aks/ingress-internal-ip#create-an-ingress-controller)

#### Digital Ocean

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/do/deploy.yaml
```

#### Scaleway

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/scw/deploy.yaml
```

#### Exoscale

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/exoscale/deploy.yaml
```
Exoscale支持的注释的完整列表可在ExoscaleCloudController Manager[文档](https://github.com/exoscale/exoscale-cloud-controller-manager/blob/master/docs/service-loadbalancer.md)中获得。

#### Oracle Cloud Infrastructure

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
```
Oracle云基础设施可用注释的[完整列表](https://github.com/oracle/oci-cloud-controller-manager/blob/master/docs/load-balancer-annotations.md)可以在OCI Cloud Controller Manager[文档](https://github.com/oracle/oci-cloud-controller-manager)中找到。

### Bare Metal Clusters

本节适用于部署在裸机服务器上的Kubernetes群集，以及手动在“raw”虚拟机上安装的K8s集群，使用通用Linux发行版（例如CentOS, Ubuntu...）

为了快速测试，您可以使用`NodePort`。这应该适用于几乎所有集群，但它通常会使用范围为`30000-32767`的端口。

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/baremetal/deploy.yaml
```

关于在裸金属部署的更多信息，请查看[裸金属注意事项](https://github.com/kubernetes/ingress-nginx/blob/main/docs/deploy/baremetal.md)。

## Miscellaneous

### Checking ingress controller version

使用`kubectl exec`在pod容器中执行命令`/nginx-ingress-controller --version`

```bash
POD_NAMESPACE=ingress-nginx
POD_NAME=$(kubectl get pods -n $POD_NAMESPACE -l app.kubernetes.io/name=ingress-nginx --field-selector=status.phase=Running -o name)
kubectl exec $POD_NAME -n $POD_NAMESPACE -- /nginx-ingress-controller --version
```



### Scope

默认情况下，控制器在所有命名空间监控`Ingress`对象。如果你想改变这一行为，可以使用`--watch-namespace`或者检查Helm chart中的`controller.scope`值，来限定控制器监听某一个单独的命名空间。

更多详情请查看[在同一个集群如何轻松安装多个`ingress-nginx-controller`实例](https://kubernetes.github.io/ingress-nginx/#how-to-easily-install-multiple-instances-of-the-ingress-nginx-controller-in-the-same-cluster)。

### Webhook network access

> 警告：控制器使用[admission webhook](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/)来校验Ingress定义。确保没有网络策略或其他防火墙阻止从API服务器到`ingress-nginx-controller-admission`服务的连接。

### Certificate generation

生成证书。

> 注意：ingress控制器启动的第一时间，两个`Job`使用`admission webhook`创建`SSL`证书。

在创建和验证Ingress定义之前，这可能会导致长达两分钟的初始延迟。

您可以运行以下命令，等到它准备好：

```bash
 kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=120s
```



### Running on k8s version older than 1.19

Ingress资源随着时间的推移在不断进化。从开始的`apiVersion: extensions/v1beta1`，到`apiVersion: networking.k8s.io/v1beta1`，再到不久前的`apiVersion: networking.k8s.io/v1`。

Kubernetes支持的Ingress版本信息如下：

- 1.19版本之前，只支持``v1beta1`版本
- 1.19到1.21版本，支持`v1beta1`和`v1`版本
- 1.22版本之后，只支持`v1`版本

在`nginx ingress controller`中对ingress版本的支持：

- 1.0版本之前，只支持`v1beta1`的ingress资源
- 1.0版本之后，只支持`v1`的ingress资源

因此，如果你的k8s版本为1.19或更新版本，你应该能够使用最新版本的`nginx-ingress-controller`；但是如果你使用1.19版本之前的k8s，必须使用`0.X`版本的`nginx-ingress-controller`（例如：0.49版本）。

`nginx-ingress-controller`的Heml chart在版本4中切换到版本1。也就是说，如果你的k8s集群版本为1.19或更早，你可以使用`3.X`版本的chart（可以在`heml install`中使用`--version='<4'`命令）。







