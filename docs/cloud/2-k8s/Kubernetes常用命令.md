# Kubernetes常用命令

## kubectl命令

[官方文档](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)

### version

输出 client 和 server 的版本信息

```bash
[root@master ~]# kubectl version
Client Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.7", GitCommit:"b56e432f2191419647a6a13b9f5867801850f969", GitTreeState:"clean", BuildDate:"2022-02-16T11:50:27Z", GoVersion:"go1.16.14", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.7", GitCommit:"b56e432f2191419647a6a13b9f5867801850f969", GitTreeState:"clean", BuildDate:"2022-02-16T11:43:55Z", GoVersion:"go1.16.14", Compiler:"gc", Platform:"linux/amd64"}
```

### create

从文件或标准输入创建资源。支持`JSON` 和`YAML`两种格式。

用法：

```bash
$ kubectl create -f FILENAME
```

示例：

```bash
# 根据一个json文件创建一个pod：
kubectl create -f ./pod.json
# 根据传入标准输入的 JSON 创建一个 pod
cat pod.json | kubectl create -f -
# 在 JSON 中编辑 docker-registry.yaml 中的数据，然后使用编辑后的数据创建资源
kubectl create -f docker-registry.yaml --edit -o json
```

### get

获取一个或多个资源列表

用法：

```bash
kubectl get 资源名称（简写）
```

示例：

```bash
# 获取所有的命名空间，及默认命名空间下的 pod 及 service 列表
[root@master ~]# kubectl get ns,pods,svc
NAME                                          READY   STATUS        RESTARTS   AGE
pod/nfs-client-provisioner-78ff8fcd4d-l6sq8   0/1     Pending       0          2d3h
pod/nfs-client-provisioner-78ff8fcd4d-rjsvs   0/1     Terminating   0          28d

NAME                    TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
service/kubernetes      ClusterIP   10.96.0.1       <none>        443/TCP    186d
```

常用参数：

- -n：指定命名空间
- -o：指定输出格式（wide,json,xml等）
- -w：监控列表实时变化

### delete

删除资源



### apply

部署资源

```bash
kubectl apply -f FILENAME
```



### describe

显示特定资源或资源组的详细信息。

```bash
kubectl describe pod podname
```

### exec

在容器中执行命令（进入容器内部）

```bash
kubectl exec mypod -it bash
```



### logs

打印指定资源容器的日志。如果pod只有一个容器，则容器名称是可选的。

```bash
kubectl logs -f mypod -c container
```

参数：

- --tail：指定显示最后多少行日志
- --since：指定显示最近多久的日志（例：1s,1m,1h等）

### explain

列出受支持资源的字段。该命令对不了解`yaml`格式的人来说很有用。可以用来查看kubernetes资源支持的属性字段及其含义。

```bash
kubectl explain pod

kubectl explain pod.spec.containers
```

