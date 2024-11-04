# k8s中部署Gitea

> 因官网提供的k8s安装方式只有Helm，因此本文也同样采用Helm安装。
>
> 官方文档地址：https://docs.gitea.io/zh-cn/install-on-kubernetes/

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

### 确定K8S集群版本

因不同版本的Helm对K8S的支持不同，因此需要先确定K8S集群的版本，来安装对应版本的Helm。

使用以下命令查看集群版本：

```bash
$ kubectl version
Client Version: version.Info{Major:"1", Minor:"24", GitVersion:"v1.24.4", GitCommit:"95ee5ab382d64cfe6c28967f36b53970b8374491", GitTreeState:"clean", BuildDate:"2022-08-17T18:54:23Z", GoVersion:"go1.18.5", Compiler:"gc", Platform:"linux/amd64"}
Kustomize Version: v4.5.4
Server Version: version.Info{Major:"1", Minor:"24", GitVersion:"v1.24.4", GitCommit:"95ee5ab382d64cfe6c28967f36b53970b8374491", GitTreeState:"clean", BuildDate:"2022-08-17T18:47:37Z", GoVersion:"go1.18.5", Compiler:"gc", Platform:"linux/amd64"}
```

以上集群版本为：**`v1.24.4`**

### 安装Helm

查看[版本支持策略](https://helm.sh/zh/docs/topics/version_skew/)，根据`Kubernetes`集群版本选择适合自己的`helm`版本。本次下载的为`v3.9.4`版本的Helm。

1. 下载[二进制安装包](https://github.com/helm/helm/releases)
2. 解压（`tar -zxvf helm-v3.9.4-linux-amd64.tar.gz`）
3. 在解压目中找到`helm`程序，移动到需要的目录中(`mv linux-amd64/helm /usr/local/bin/helm`)

下面列出了部分版本支持情况：

| Helm 版本 | 支持的 Kubernetes 版本 |
| --------- | ---------------------- |
| 3.9.x     | 1.24.x - 1.21.x        |
| 3.8.x     | 1.23.x - 1.20.x        |
| 3.7.x     | 1.22.x - 1.19.x        |
| 3.6.x     | 1.21.x - 1.18.x        |

## 安装Gitea

### 准备镜像

安装Gitea过程中需要用到以下镜像：

- gitea/gitea:1.17.3
- bitnami/postgresql:11.11.0-debian-10-r62
- bitnami/memcached:1.6.9-debian-10-r114

**由于网络原因，可能无法下载镜像，因此本次安装需要的镜像是其他环境pull下来后导入进来的**。

1. pull镜像

```bash
$ docker pull gitea/gitea:1.17.3
$ docker pull bitnami/postgresql:11.11.0-debian-10-r62
$ docker pull bitnami/memcached:1.6.9-debian-10-r114
```

2. 导出镜像

```bash
$ docker save -o gitea-images.tar gitea/gitea:1.17.3 bitnami/postgresql:11.11.0-debian-10-r62 bitnami/memcached:1.6.9-debian-10-r114
```

3. 将镜像文件分发到服务器

```bash
$ scp gitea-images.tar root@192.168.90.120:/root/gitea/
```

4. 导入镜像

```bash
$ nerdctl load -namespace k8s.io < gitea-images.tar
```

> 导入时，必须指定`--namespace k8s.io`，否则在安装过程中，k8s将找不到本地镜像，默认还会去尝试pull镜像，而导致安装失败。
>

### 手动创建本地存储卷

Gitea需要用到两个存储卷：

- Gitea使用的存储卷：用来存储上传的代码等内容的存储卷（默认配置size：10G）
- postgresql数据库使用的存储卷：用来存储外部数据（Gitea元数据等）（配置size：5G）

```yaml title=gitea-local-storage.yaml
# 创建 本地存储卷
kind: StorageClass
apiVersion: storage.k8s.io/v1
metadata:
  name: gitea-local-storage
provisioner: kubernetes.io/no-provisioner
volumeBindingMode: WaitForFirstConsumer
---
# 创建 10G 的pv，并绑定到 gitea-local-storage 中
apiVersion: v1
kind: PersistentVolume
metadata:
  name: gitea-pv-10
spec:
  capacity:
    storage: 10Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: gitea-local-storage
  local:
    path: /var/lib/gitea
                
---
# 创建 5G 的pv，并绑定到 gitea-local-storage 中
apiVersion: v1
kind: PersistentVolume
metadata:
  name: gitea-postgresql-pv-5
spec:
  capacity:
    storage: 5Gi
  volumeMode: Filesystem
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: gitea-local-storage
  local:
    path: /var/lib/postgresql
```

将以上配置保存到`gitea-local-storage.yaml`，执行下面命令创建：

```bash
# 创建所需的两个目录（根据实际环境，可以修改，同时修改yaml文件）
$ mkdir /var/lib/gitea
$ mkdir /var/lib/postgresql
# 执行创建PV
$ kubectl apply -f gitea-local-storage.yaml
```



### 获取Helm Chart包

#### 外网环境安装

添加Helm仓库：

```bash
$ helm repo add gitea https://dl.gitea.io/charts
$ helm repo update
```

添加仓库后，可以使用以下命令查看Gitea版本：

```bash
$ helm search repo gitea
NAME            CHART VERSION   APP VERSION     DESCRIPTION
gitea/gitea     6.0.3           1.17.3          Gitea Helm chart for Kubernetes
```

> 注意这里的`APP SERVION`，如果配置文件中不指定，默认即为本次安装的`Gitea`版本。



#### 内网环境安装

需要先在外网环境准备好Chart包安装包，步骤如下：

- 下载Heml Chart源码包：https://gitea.com/gitea/helm-chart/releases/

这里下载的是`v6.0.3`，对应的Gitea版本为`1.17.3`。

- 解压得到一个`helm-chart`文件夹。

```bash
$ tar -zxvf helm-chart-v6.0.3.tar.gz
```

- 然后执行以下命令，更新`Gitea`所需依赖的Chart包：

> 更新完成后，Gtiea所需依赖的Chart包会存放在`helm-chart`目录下的`charts/`文件夹中。

```bash
$ helm dep update ./helm-chart
Getting updates for unmanaged Helm repositories...
...Successfully got an update from the "https://raw.githubusercontent.com/bitnami/charts/pre-2022/bitnami" chart repository
...Successfully got an update from the "https://raw.githubusercontent.com/bitnami/charts/pre-2022/bitnami" chart repository
...Successfully got an update from the "https://raw.githubusercontent.com/bitnami/charts/pre-2022/bitnami" chart repository
...Successfully got an update from the "https://raw.githubusercontent.com/bitnami/charts/pre-2022/bitnami" chart repository
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "gitea" chart repository
Update Complete. ⎈Happy Helming!⎈
Saving 4 charts
Downloading memcached from repo https://raw.githubusercontent.com/bitnami/charts/pre-2022/bitnami
Downloading mysql from repo https://raw.githubusercontent.com/bitnami/charts/pre-2022/bitnami
Downloading postgresql from repo https://raw.githubusercontent.com/bitnami/charts/pre-2022/bitnami
Downloading mariadb from repo https://raw.githubusercontent.com/bitnami/charts/pre-2022/bitnami
Deleting outdated charts
```



### 定制Helm Chart

> 如果是通过离线下载Chart源码安装，需要将创建好的`gitea.yaml`文件以及`gitea-helm/`文件夹，一同上传到K8S集群服务器上。

这里根据最终访问`Gitea`应用的协议不同，提供两个版本的配置文件。如果采用`HTTP`版本的部署安装后，需要升级为`HTTPS`，可按照[设置HTTPS访问](#设置https访问)小节说明进行配置，或者整体替换为HTTPS版本的`yaml`文件后，更新应用。

#### HTTP版

创建配置文件`gitea.yaml`，并且写入以下内容：

```yaml
#指定持久化存储类
global:
  storageClass: "gitea-local-storage"

# 指定镜像版本及拉取策略
# 版本可不指定，默认为Helm Chart的AppVersion
# 拉取策略必须指定，因为默认的是Always，这里使用本地镜像，因此不需指定
image:
  tag: "1.17.3"
  pullPolicy: IfNotPresent

## 配置service端口映射
service:
  http:
    type: NodePort
    port: 3000
    nodePort: 3000
  # 由于22端口的特殊性，这里的22端口，不能映射到宿主机的22端口
  ssh:
    type: NodePort
    port: 1022
    nodePort: 1022

## Gitea相关配置
gitea:
  # gitea管理员账号设置，
  # 注意：username不能为admin；password长度不能少于6位
  # 建议：直接使用安装包默认的配置，可在安装完成后，登录账号进行修改操作
  #admin:
  #  username: *********
  #  password: *********
  config:
    # Gitea应用名称，最终会显示在网站首页
    APP_NAME: "MY Gitea"
    # 配置gitea访问地址，否则页面会有黄字警告
    # 这个IP地址必须与亲和性设置中，保持一致
    server:
      ROOT_URL: http://192.168.90.124:3000
      DOMAIN: 192.168.90.124
      SSH_DOMAIN: 192.168.90.124
      # 修改SSH默认端口号
      SSH_PORT: 1022
    # 头像配置
    picture:
      # 禁用gravatar头像，只使用内部头像。(允许上传自定义头像)
      DISABLE_GRAVATAR: true
    # 仓库迁移配置
    migrations:
      # 域名白名单
      ALLOWED_DOMAINS: gitee.com
      # 允许符合RFC 1918规范的私有地址（Allow private addresses defined by RFC 1918）
      ALLOW_LOCALNETWORKS: true


## 配置postgresql数据库存储卷大小
postgresql:
  persistence:
    size: 5Gi
```

#### HTTPS版

创建配置文件`gitea.yaml`，并且写入以下内容：

```yaml
#指定持久化存储类
global:
  storageClass: "gitea-local-storage"

# 指定镜像版本及拉取策略
# 版本可不指定，默认为Helm Chart的AppVersion
# 拉取策略必须指定，因为默认的是Always，这里使用本地镜像，因此不需指定
image:
  tag: "1.17.3"
  pullPolicy: IfNotPresent

## 配置service端口映射
service:
  http:
    type: NodePort
    port: 3000
    nodePort: 3000
  # 由于22端口的特殊性，这里的22端口，不能映射到宿主机的22端口
  ssh:
    type: NodePort
    port: 1022
    nodePort: 1022

# 初始化脚本，用来生成 SSL/TLS 证书
initPreScript: |
   cd /data/gitea
   gitea cert --host 192.168.90.121
   chmod 644 cert.pem
   chmod 644 key.pem
   
## Gitea相关配置
gitea:
  # gitea管理员账号设置，
  # 注意：username不能为admin；password长度不能少于6位
  # 建议：直接使用安装包默认的配置，可在安装完成后，登录账号进行修改操作
  #admin:
  #  username: *********
  #  password: *********
  config:
    # Gitea应用名称，最终会显示在网站首页
    APP_NAME: "MY Gitea"
    # 配置gitea访问地址，否则页面会有黄字警告
    # 这个IP地址必须与亲和性设置中，保持一致
    server:
      ROOT_URL: https://192.168.90.124:3000 # 注意这里的协议为https
      DOMAIN: 192.168.90.124
      SSH_DOMAIN: 192.168.90.124
      # 修改SSH默认端口号
      SSH_PORT: 1022
      # 指定访问协议类型，以及证书文件
      PROTOCOL: https
      CERT_FILE: cert.pem
      KEY_FILE: key.pem
    # 头像配置
    picture:
      # 禁用gravatar头像，只使用内部头像。(允许上传自定义头像)
      DISABLE_GRAVATAR: true
    # 仓库迁移配置
    migrations:
      # 域名白名单
      ALLOWED_DOMAINS: gitee.com
      # 允许符合RFC 1918规范的私有地址（Allow private addresses defined by RFC 1918）
      ALLOW_LOCALNETWORKS: true


## 配置postgresql数据库存储卷大小
postgresql:
  persistence:
    size: 5Gi
```



### 安装Chart

先创建一个 namespace：

```bash
$ kubectl create ns gitea
```

执行 helm install 命令，安装 Gitea：

```bash
# 在线安装
$ helm install gitea --namespace gitea -f gitea.yaml gitea/gitea
# 离线源码安装
$ helm install gitea --namespace gitea -f gitea.yaml ./helm-chart
```

在 gitea namespace 下面会有 3 个 pod 生成：

```bash
$ kubectl get pods -n gitea
NAME                               READY   STATUS    RESTARTS   AGE
gitea-memcached-77fc54d6fb-sft9q   1/1     Running   0          3m20s
gitea-postgresql-0                 1/1     Running   0          3m20s
gitea-0                            1/1     Running   0          3m20s
```



## 访问Gitea

稍等片刻，等待以上三个pod均启动后，即可访问Gitea：http://192.168.90.124:3000

点击右上角“注册”按钮，可注册新用户进行登录。

> Gitea默认的管理员用户及密码，可查看`Chart`包中的`values.yaml`文件中的`gitea.admin.username`及`gitea.admin.password`配置。



## 设置HTTPS访问

### 生成证书

> 这里使用内部服务器生成 SSL/TLS 证书，改证书仅用于测试使用，对于浏览器来说为无效证书。访问时，请忽略浏览器警告信息，继续访问。

进入`gitea-0`容器，执行以下命令：

```bash
# 进入POD容器
$ kubectl exec gitea-0 -it bash -n gitea
# 在指定目录下生成PEM证书
$ cd /data/gitea
$ gitea cert --host 192.168.90.124
```

上述命令会在`/data/gitea`目录下生成两个文件`cert.pem`和`key.pem`。

### 修改`gitea.yaml`配置文件

```yaml
gitea:
  config:
    # 配置gitea访问地址，否则页面会有黄字警告
    # 这个IP地址必须与亲和性设置中，保持一致
    server:
      PROTOCOL: https
      ROOT_URL: https://192.168.90.124:3000

      CERT_FILE: cert.pem
      KEY_FILE: key.pem
```

> 增加以下配置：
>
> - PROTOCOL: https
> - CERT_FILE: cert.pem
> - KEY_FILE: key.pem
>
> 修改`ROOT_URL`，`http`改为`https`

### 更新应用

执行以下命令，更新应用配置：

```bash
# 在线安装
$ helm upgrade gitea --namespace gitea -f gitea.yaml gitea/gitea
# 离线源码安装
$ helm upgrade gitea --namespace gitea -f gitea.yaml ./helm-chart
```

稍等片刻，等待pod重启完成后，即可使用`HTTPS`访问Gitea应用。