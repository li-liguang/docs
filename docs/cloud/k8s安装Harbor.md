# k8s安装Harbor

> 官方安装文档：https://goharbor.io/docs/2.6.0/install-config/harbor-ha-helm/
>
> Github仓库：https://github.com/goharbor
>
> Helm Chart github仓库：https://github.com/goharbor/harbor-helm/releases

集群节点信息：

| 服务器IP       | hostname | roles         |
| -------------- | -------- | ------------- |
| 192.168.90.120 | node1    | control-plane |
| 192.168.90.121 | node2    | control-plane |
| 192.168.90.122 | node3    | worker        |
| 192.168.90.123 | node4    | control-plane |

集群虚拟IP：vip：192.168.90.124

集群运行时`containerd`，客户端工具`nerdctl`。

## 安装Helm

详情请查看[这里](helm/helm#安装)

## 安装Harbor

### 存储卷

本次安装使用的是nfs外部制备器提供的动态存储卷，`storageClass: "nfs-retain-storage"`。

> 请确保集群中是否存在nfs外部制备器，以及对应的`storageClass`。

### 添加Harbor 官方Helm Chart仓库

```bash
$ helm repo add harbor https://helm.goharbor.io
$ helm update
```

将chart包下载到本地，并解压：

```bash
$ helm fetch harbor/harbor --untar
```

若因网络等原因无法添加官方Chart仓库，也可以从github仓库直接下载所需版本的Chart发布包：https://github.com/goharbor/harbor/releases

### 定制Helm Chart

> 这里安装的harbor版本为`v2.6.2`，若要修改版本号，可在参照values.yaml中的配置，修改以下配置文件中各组件的版本号。

创建配置文件`harbor.yaml`，并且写入以下内容：

```yaml
expose:
  type: nodePort
  tls:
    # 关闭tls安全加密认证（如果开启需要配置证书）
    enabled: false
    # 如果enable设置为true，需要配置commonName，则harbor自动生成证书，对外访问改为https
    auto:
    	commonName: "harbor"

externalURL: http://192.168.90.124:30002

# 持久化存储配置部分（storageClass为空，使用k8s默认存储类）
persistence:
  enabled: true
  resourcePolicy: "keep"
  # 定义Harbor各个组件的PVC持久卷部分
  persistentVolumeClaim:
    # registry组件（持久卷）配置部分
    registry:
      storageClass: "nfs-retain-storage"
      accessMode: ReadWriteMany
    # chartmuseum组件（持久卷）配置部分
    chartmuseum:
      storageClass: "nfs-retain-storage"
      accessMode: ReadWriteMany
    # 异步任务组件（持久卷）配置部分
    jobservice:
      jobLog:
        storageClass: "nfs-retain-storage"
        accessMode: ReadWriteMany
      scanDataExports:
        storageClass: "nfs-retain-storage"
        accessMode: ReadWriteMany
    # PostgreSQl数据库组件（持久卷）配置部分。如果使用外部数据库存储，将忽略以下配置
    database:
      storageClass: "nfs-retain-storage"
      accessMode: ReadWriteMany
    # Redis缓存组件（持久卷）配置部分
    redis:
      storageClass: "nfs-retain-storage"
      accessMode: ReadWriteMany
    # Trity漏洞扫描插件（持久卷）配置部分
    trivy:
      storageClass: "nfs-retain-storage"
      accessMode: ReadWriteMany

# admin初始密码
harborAdminPassword: "Harbor123456"

# 是否启用监控组件（可以使用Prometheus监控Harbor指标），非必须操作
metrics:
  enabled: true

# redis缓存配置。有助于提高高并发拉取清单的性能。
cache:
  enabled: true

```

### 准备镜像

Harbor需要13个镜像，若要离线安装，并且加速安装过程，提前准备好需要的镜像。

- goharbor/harbor-exporter:v2.6.2 

- goharbor/harbor-core:v2.6.2 

- goharbor/harbor-portal:v2.6.2

- goharbor/harbor-registryctl:v2.6.2 

- goharbor/harbor-jobservice:v2.6.2 

- goharbor/harbor-db:v2.6.2

- goharbor/chartmuseum-photon:v2.6.2 

- goharbor/redis-photon:v2.6.2 

- goharbor/trivy-adapter-photon:v2.6.2 

- goharbor/nginx-photon:v2.6.2 

- goharbor/notary-server-photon:v2.6.2 

- goharbor/notary-signer-photon:v2.6.2 

- goharbor/registry-photon:v2.6.2 

1. pull镜像

```bash
$ docker pull goharbor/harbor-exporter:v2.6.2 
$ docker pull goharbor/harbor-core:v2.6.2 
$ docker pull goharbor/harbor-portal:v2.6.2
$ docker pull goharbor/harbor-registryctl:v2.6.2 
$ docker pull goharbor/harbor-jobservice:v2.6.2 
$ docker pull goharbor/harbor-db:v2.6.2
$ docker pull goharbor/chartmuseum-photon:v2.6.2 
$ docker pull goharbor/redis-photon:v2.6.2 
$ docker pull goharbor/trivy-adapter-photon:v2.6.2 
$ docker pull goharbor/nginx-photon:v2.6.2 
$ docker pull goharbor/notary-server-photon:v2.6.2 
$ docker pull goharbor/notary-signer-photon:v2.6.2 
$ docker pull goharbor/registry-photon:v2.6.2 
```

2. 导出镜像

```bash
$ docker save -o harbor-images.tar goharbor/harbor-exporter:v2.6.2 \
goharbor/notary-server-photon:v2.6.2 \
goharbor/notary-signer-photon:v2.6.2 \
goharbor/harbor-registryctl:v2.6.2 \
goharbor/registry-photon:v2.6.2 \
goharbor/harbor-jobservice:v2.6.2 \
goharbor/harbor-db:v2.6.2 \
goharbor/chartmuseum-photon:v2.6.2 \
goharbor/redis-photon:v2.6.2 \
goharbor/trivy-adapter-photon:v2.6.2 \
goharbor/nginx-photon:v2.6.2 \
goharbor/harbor-core:v2.6.2 \
goharbor/harbor-portal:v2.6.2
```

3. 将镜像文件分发到服务器上

```Bash
$ scp harbor-images.tar root@192.168.90.120:/root/workspaces/harbor/
```

4. 导入镜像

```bash
$ nerdctl load --namespace k8s.io < harbor-images.tar
```

> 导入时，必须指定`--namespace k8s.io`，否则在安装过程中，k8s将找不到本地镜像，默认还会去尝试pull镜像，而导致安装失败。
>

### 安装Chart

先创建一个 namespace：

```Bash
$ kubectl create ns harbor
```

执行 helm install 命令，安装 harbor：

```Bash
$ helm install harbor --namespace harbor -f harbor.yaml harbor/
```

稍等几分钟，查看pod状态，待所有pod均为`Running`后，表示安装成功

```Bash
root@groundhog:~/workspaces/harbor# kubectl get pod -n harbor -w -o wide
NAME                                    READY   STATUS    RESTARTS        AGE     IP            NODE    NOMINATED NODE   READINESS GATES
harbor-chartmuseum-8654f554d4-g6qtz     1/1     Running   0               24m     10.244.1.72   node2   <none>           <none>
harbor-core-5d6c8677b-knxgf             1/1     Running   3 (8m27s ago)   24m     10.244.1.71   node2   <none>           <none>
harbor-database-0                       1/1     Running   0               24m     10.244.2.89   node1   <none>           <none>
harbor-exporter-7d948cf97d-crp2c        1/1     Running   5 (16m ago)     24m     10.244.2.85   node1   <none>           <none>
harbor-jobservice-785dd5fc49-wftt4      1/1     Running   0               3m20s   10.244.2.90   node1   <none>           <none>
harbor-nginx-5bd5767478-bbxh6           1/1     Running   0               24m     10.244.1.69   node2   <none>           <none>
harbor-notary-server-7dc7d6b6dd-2mzbc   1/1     Running   6 (14m ago)     24m     10.244.2.86   node1   <none>           <none>
harbor-notary-signer-764964776d-nv27w   1/1     Running   5 (15m ago)     24m     10.244.2.87   node1   <none>           <none>
harbor-portal-5fc6bb48c9-66s6n          1/1     Running   0               24m     10.244.1.68   node2   <none>           <none>
harbor-redis-0                          1/1     Running   0               24m     10.244.1.73   node2   <none>           <none>
harbor-registry-6fb8cfc6bb-nmbnt        2/2     Running   0               24m     10.244.2.88   node1   <none>           <none>
harbor-trivy-0                          1/1     Running   0               24m     10.244.1.74   node2   <none>           <none>
```

## 访问Harbor

以上pod均成功运行后，即可访问Gitea：[http://192.168.90.124:30002](http://192.168.90.128:30002)

默认的管理员用户及密码

- username：admin

- password：sino123456（定制配置文件中的：harborAdminPassword）

## containerd配置从Harbor拉取镜像

这里以私有仓库地址为`http://192.168.90.124:30002`为例。

配置私有镜像仓库注册表：

在`/etc/containerd/certs.d/`目录下创建目录`192.168.90.124:30002`，在创建的注册表目录下，添加注册表配置文件`hosts.toml`，内容如下：

```TOML
server = "http://192.168.90.124:30002"
    skip_verify = true
[host."http://192.168.90.124:30002"]
    capabilities = ["pull", "resolve", "push"]
```

配置说明：

- skip_verify：是否跳过证书认证。由于这里私有镜像仓库未配置证书，这里直接跳过。如果仓库配置的是自签名证书，也需要跳过认证环节。

添加注册表配置后，无需重启containerd，即可从私有仓库拉取镜像。

> k8s集群所有节点均需要配置