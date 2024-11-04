---
id: helm
title: Helm教程
sidebar_label: Helm教程
---

官网 [快速开始 指引](https://helm.sh/zh/docs/intro/quickstart/)

## 安装

查看[版本支持策略](https://helm.sh/zh/docs/topics/version_skew/)，根据`Kubernetes`集群版本选择适合自己的`helm`版本。

1. 下载[二进制安装包](https://github.com/helm/helm/releases)
2. 解压（`tar -zxvf helm-v3.0.0-linux-amd64.tar.gz`）
3. 在解压目中找到`helm`程序，移动到需要的目录中(`mv linux-amd64/helm /usr/local/bin/helm`)

然后就可以执行客户端程序并 [添加稳定仓库](https://helm.sh/zh/docs/intro/quickstart/#初始化): `helm help`.

下面列出了部分版本支持情况：

| Helm 版本 | 支持的 Kubernetes 版本 |
| :-------- | :--------------------- |
| 3.8.x     | 1.23.x - 1.20.x        |
| 3.7.x     | 1.22.x - 1.19.x        |
| 3.6.x     | 1.21.x - 1.18.x        |
| 3.5.x     | 1.20.x - 1.17.x        |
| 3.4.x     | 1.19.x - 1.16.x        |
| 3.3.x     | 1.18.x - 1.15.x        |
| 3.2.x     | 1.18.x - 1.15.x        |
| 3.1.x     | 1.17.x - 1.14.x        |
| 3.0.x     | 1.16.x - 1.13.x        |

## 快速使用Helm

### 先决条件

- 一个kubernetes集群
- 确定安装版本的安全配置
- 安装和配置helm

### 初始化

当您已经安装好了Helm之后，您可以添加一个chart 仓库。从 [Artifact Hub](https://artifacthub.io/packages/search?kind=0)中查找有效的Helm chart仓库。

```bash
$ helm repo add bitnami https://charts.bitnami.com/bitnami
```

当添加完成，您将可以看到可以被您安装的charts列表：

```bash
$ helm search repo bitnami
NAME                             	CHART VERSION	APP VERSION  	DESCRIPTION
bitnami/bitnami-common           	0.0.9        	0.0.9        	DEPRECATED Chart with custom templates used in ...
bitnami/airflow                  	8.0.2        	2.0.0        	Apache Airflow is a platform to programmaticall...
bitnami/apache                   	8.2.3        	2.4.46       	Chart for Apache HTTP Server
bitnami/aspnet-core              	1.2.3        	3.1.9        	ASP.NET Core is an open-source framework create...
# ... and many more
```

### 安装Chart示例

您可以通过`helm install` 命令安装chart。 Helm可以通过多种途径查找和安装chart， 但最简单的是安装官方的`bitnami` charts。

```bash
$ helm repo update              # 确定我们可以拿到最新的charts列表
$ helm install bitnami/mysql --generate-name
NAME: mysql-1612624192
LAST DEPLOYED: Sat Feb  6 16:09:56 2021
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES: ...
```

在上面的例子中，`bitnami/mysql`这个chart被发布，名字是 `mysql-1612624192`

您可以通过执行 `helm show chart bitnami/mysql` 命令简单的了解到这个chart的基本信息。 或者您可以执行 `helm show all bitnami/mysql` 获取关于该chart的所有信息。

每当您执行 `helm install` 的时候，都会创建一个新的发布版本。 所以一个chart在同一个集群里面可以被安装多次，每一个都可以被独立的管理和升级。

`helm install` 是一个拥有很多能力的强大的命令，更多信息详见 [使用 Helm](https://helm.sh/zh/docs/intro/using_helm)

### 关于版本发布

通过Helm您可以很容易看到哪些chart被发布了：

```bash
$ helm list
NAME            	NAMESPACE	REVISION	UPDATED                             	STATUS  	CHART      	APP VERSION
mysql-1612624192	default  	1       	2021-02-06 16:09:56.283059 +0100 CET	deployed	mysql-8.3.0	8.0.23
```

`helm list` (或 `helm ls`) 命令会列出所有可被部署的版本。

### 卸载一个版本

您可以使用`helm uninstall` 命令卸载你的版本

```bash
$ helm uninstall mysql-1612624192
release "mysql-1612624192" uninstalled
```

该命令会从Kubernetes卸载 `mysql-1612624192`， 它将删除和该版本相关的所有相关资源（service、deployment、 pod等等）甚至版本历史。

如果您在执行 `helm uninstall` 的时候提供 `--keep-history` 选项， Helm将会保存版本历史。 您可以通过命令查看该版本的信息

```bash
$ helm status mysql-1612624192
Status: UNINSTALLED
...
```

因为 `--keep-history` 选项会让helm跟踪你的版本（即使你卸载了他们）， 所以你可以审计集群历史甚至使用 `helm rollback` 回滚版本。

## Helm详解

### 三大概念

1. **Chart**：代表Helm包。它包含在 Kubernetes 集群内部运行应用程序，工具或服务所需的所有资源定义。你可以把它看作是 Homebrew formula，Apt dpkg，或 Yum RPM 在Kubernetes 中的等价物。
2. **Repository**：（仓库）是用来存放和共享 charts 的地方。它就像 Perl 的 CPAN 档案库网络或是 Fedora 的软件包仓库，只不过它是供 Kubernetes 包所使用的。
3. **Release** ：是运行在 Kubernetes 集群中的 chart 的实例。一个 chart 通常可以在同一个集群中安装多次。每一次安装都会创建一个新的 *release*实例。以 MySQL chart为例，如果你想在你的集群中运行两个数据库，你可以安装该chart两次。每一个数据库都会拥有它自己的 *release* 和 *release name*。

在了解了上述这些概念以后，我们就可以这样来解释 Helm：

**Helm 安装 *charts* 到 Kubernetes 集群中，每次安装都会创建一个新的 *release*。你可以在 Helm 的 chart *repositories* 中寻找新的 chart。**

### 常用命令

#### search

`helm search`：查找 Charts

Helm 自带一个强大的搜索命令，可以用来从两种来源中进行搜索：

- `helm search hub` 从 [Artifact Hub](https://artifacthub.io/) 中查找并列出 helm charts。 Artifact Hub中存放了大量不同的仓库。
- `helm search repo` 从你添加（使用 `helm repo add`）到本地 helm 客户端中的仓库中进行查找。该命令基于本地数据进行搜索，无需连接互联网。

你可以通过运行 `helm search hub` 命令找到公开可用的charts：

```bash
$ helm search hub redis
URL                                                     CHART VERSION   APP VERSION             DESCRIPTION
https://artifacthub.io/packages/helm/bitnami/redis      16.5.2          6.2.6                   Redis(TM) is an open source, advanced key-value...
https://artifacthub.io/packages/helm/pascaliske...      0.0.2           6.2.6                   A Helm chart for Redis
https://artifacthub.io/packages/helm/bitnami-ak...      16.5.2          6.2.6                   Redis(TM) is an open source, advanced key-value...
https://artifacthub.io/packages/helm/choerodon/...      16.4.1          6.2.6                   Redis(TM) is an open source, advanced key-value...
https://artifacthub.io/packages/helm/wener/redis        16.5.2          6.2.6                   Redis(TM) is an open source, advanced key-value...
https://artifacthub.io/packages/helm/wenerme/redis      16.5.2          6.2.6                   Redis(TM) is an open source, advanced key-value...

...
```

上述命令从 Artifact Hub 中搜索所有的 `redis` charts。

如果不进行过滤，`helm search hub` 命令会展示所有可用的 charts。

Helm 搜索使用模糊字符串匹配算法，所以你可以只输入名字的一部分：

```bash
$ helm search repo redi
NAME                    CHART VERSION   APP VERSION     DESCRIPTION
bitnami/redis           16.5.2          6.2.6           Redis(TM) is an open source, advanced key-value...
bitnami/redis-cluster   7.4.0           6.2.6           Redis(TM) is an open source, scalable, distribu...
```

搜索是用来发现可用包的一个好办法。一旦你找到你想安装的 helm 包，你便可以通过使用 `helm install` 命令来安装它。

#### install

`helm install`：安装一个 helm 包

使用 `helm install` 命令来安装一个新的 helm 包。最简单的使用方法只需要传入两个参数：你命名的release名字和你想安装的chart的名称。

```bash
$ helm install myRedis bitnami/redis
```

如果想让Helm自动生成一个名称，删除发布名称并使用`--generate-name`。

```bash
$ helm install bitnami/redis --generate-name
```

在安装过程中，`helm` 客户端会打印一些有用的信息，其中包括：哪些资源已经被创建，release当前的状态，以及你是否还需要执行额外的配置步骤。

Helm按照以下顺序安装资源：

- Namespace	命名空间
- NetworkPolicy  网络策略
- ResourceQuota  资源配额
- LimitRange 
- PodSecurityPolicy  pod安全策略
- PodDisruptionBudget  
- ServiceAccount
- Secret
- SecretList
- ConfigMap
- StorageClass
- PersistentVolume
- PersistentVolumeClaim
- CustomResourceDefinition
- ClusterRole
- ClusterRoleList
- ClusterRoleBinding
- ClusterRoleBindingList
- Role
- RoleList
- RoleBinding
- RoleBindingList
- Service
- DaemonSet
- Pod
- ReplicationController
- ReplicaSet
- Deployment
- HorizontalPodAutoscaler
- StatefulSet
- Job
- CronJob
- Ingress
- APIService

Helm 客户端不会等到所有资源都运行才退出。许多 charts 需要大小超过 600M 的 Docker 镜像，可能需要很长时间才能安装到集群中。

你可以使用 `helm status` 来追踪 release 的状态，或是重新读取配置信息：

```bash
$ helm status myRedis
```

上述信息展示了 release 的当前状态。

##### 安装前自定义 chart

上述安装方式只会使用 chart 的默认配置选项。很多时候，我们需要自定义 chart 来指定我们想要的配置。

使用 `helm show values` 可以查看 chart 中的可配置选项：

```bash
$ helm show values bitnami/wordpress
```

然后，你可以使用 `YAML` 格式的文件覆盖上述任意配置项，并在安装过程中使用该文件。

```fallback
$ echo '{mariadb.auth.database: user0db, mariadb.auth.username: user0}' > values.yaml

$ helm install -f values.yaml bitnami/wordpress --generate-name
```

上述命令将为 MariaDB 创建一个名称为 `user0` 的默认用户，并且授予该用户访问新建的 `user0db` 数据库的权限。chart 中的其他默认配置保持不变。

安装过程中有两种方式传递配置数据：

- `--values` (或 `-f`)：使用 `YAML` 文件覆盖配置。可以指定多次，优先使用最右边的文件。
- `--set`：通过命令行的方式对指定项进行覆盖。

如果同时使用两种方式，则 `--set` 中的值会被合并到 `--values` 中，但是 `--set` 中的值优先级更高。在`--set` 中覆盖的内容会被被保存在 `ConfigMap` 中。可以通过 `helm get values <release-name>` 来查看指定 release 中 `--set` 设置的值。也可以通过运行 `helm upgrade` 并指定 `--reset-values` 字段来清除 `--set` 中设置的值。

##### `--set` 的格式和限制

`--set` 选项使用0或多个 name/value 对。最简单的用法类似于：`--set name=value`，等价于如下 YAML 格式：

```yaml
name: value
```

多个值使用逗号分割，因此 `--set a=b,c=d` 的 YAML 表示是：

```yaml
a: b
c: d
```

支持更复杂的表达式。例如，`--set outer.inner=value` 被转换成了：

```yaml
outer:
  inner: value
```

列表使用花括号（`{}`）来表示。例如，`--set name={a, b, c}` 被转换成了：

```yaml
name:
  - a
  - b
  - c
```

从 2.5.0 版本开始，可以使用数组下标的语法来访问列表中的元素。例如 `--set servers[0].port=80` 就变成了：

```yaml
servers:
  - port: 80
```

多个值也可以通过这种方式来设置。`--set servers[0].port=80,servers[0].host=example` 变成了：

```yaml
servers:
  - port: 80
    host: example
```

如果需要在 `--set` 中使用特殊字符，你可以使用反斜线来进行转义；`--set name=value1\,value2` 就变成了：

```yaml
# 这里的逗号被转义后，"value1,value2"就被任务是一个值
name: "value1,value2"
```

类似的，你也可以转义点序列（英文句号）。这可能会在 chart 使用 `toYaml` 函数来解析 annotations，labels，和 node selectors 时派上用场。`--set nodeSelector."kubernetes\.io/role"=master` 语法就变成了：

```yaml
nodeSelector:
  kubernetes.io/role: master
```

##### 更多安装方法

`helm install` 命令可以从多个来源进行安装：

- chart 的仓库（如上所述）
- 本地 chart 压缩包（`helm install myName foo-0.1.1.tgz`）
- 解压后的 chart 目录（`helm install myName path/to/foo`）
- 完整的 URL（`helm install myName https://example.com/charts/foo-1.2.3.tgz`）

#### upgrade、rollback

`helm upgrade` 和 `helm rollback`：升级 release 和失败时恢复

当你想升级到 chart 的新版本，或是修改 release 的配置，你可以使用 `helm upgrade` 命令。

一次升级操作会使用已有的 release 并根据你提供的信息对其进行升级。由于 Kubernetes 的 chart 可能会很大而且很复杂，Helm 会尝试执行最小侵入式升级。即它只会更新自上次发布以来发生了更改的内容。

```fallback
$ helm upgrade -f panda.yaml happy-panda bitnami/wordpress
```

在上面的例子中，`happy-panda` 这个 release 使用相同的 chart（`bitnami/wordpress`） 进行升级，但是使用了一个新的 `YAML` 文件：

```yaml title=panda.yaml
mariadb.auth.username: user1
```

我们可以使用 `helm get values` 命令来看看配置值是否真的生效了：

```bash
$ helm get values happy-panda
mariadb:
  auth:
    username: user1
```

`helm get` 是一个查看集群中 release 的有用工具。正如我们上面所看到的，`panda.yaml` 中的新值已经被部署到集群中了。

现在，假如在一次发布过程中，发生了不符合预期的事情，也很容易通过 `helm rollback [RELEASE] [REVISION]` 命令回滚到之前的发布版本。

```bash
$ helm rollback happy-panda 1
```

上面这条命令将我们的 `happy-panda` 回滚到了它最初的版本。release 版本其实是一个增量修订（revision）。 每当发生了一次安装、升级或回滚操作，revision 的值就会加1。第一次 revision 的值永远是1。我们可以使用 `helm history [RELEASE]` 命令来查看一个特定 release 的修订版本号。

##### optinos

你还可以指定一些其他有用的选项来自定义 Helm 在安装、升级、回滚期间的行为。请注意这并不是 cli 参数的完整列表。 要查看所有参数的说明，请执行 `helm <command> --help` 命令。

- `--timeout`：一个 [Go duration](https://golang.org/pkg/time/#ParseDuration) 类型的值， 用来表示等待 Kubernetes 命令完成的超时时间，默认值为 `5m0s`。
- `--wait`：表示必须要等到所有的 Pods 都处于 ready 状态，PVC 都被绑定，Deployments 都至少拥有最小 ready 状态 Pods 个数（`Desired`减去 `maxUnavailable`），并且 Services 都具有 IP 地址（如果是`LoadBalancer`， 则为 Ingress），才会标记该 release 为成功。最长等待时间由 `--timeout` 值指定。如果达到超时时间，release 将被标记为 `FAILED`。注意：当 Deployment 的 `replicas` 被设置为1，但其滚动升级策略中的 `maxUnavailable` 没有被设置为0时，`--wait` 将返回就绪，因为已经满足了最小 ready Pod 数。
- `--no-hooks`：不运行当前命令的钩子。
- `--recreate-pods`（仅适用于 `upgrade` 和 `rollback`）：这个参数会导致重建所有的 Pod（deployment中的Pod 除外）。（在 Helm 3 中已被废弃）

#### uninstall

`helm uninstall`：卸载 release

使用 `helm uninstall` 命令从集群中卸载一个 release：

```bash
$ helm uninstall happy-panda
```

该命令将从集群中移除指定 release。你可以通过 `helm list` 命令看到当前部署的所有 release：

```bash
$ helm list
NAME            VERSION UPDATED                         STATUS          CHART
inky-cat        1       Wed Sep 28 12:59:46 2016        DEPLOYED        alpine-0.1.0
```

从上面的输出中，我们可以看到，`happy-panda` 这个 release 已经被卸载。

在上一个 Helm 版本中，当一个 release 被删除，会保留一条删除记录。而在 Helm 3 中，删除也会移除 release 的记录。 如果你想保留删除记录，使用 `helm uninstall --keep-history`。使用 `helm list --uninstalled` 只会展示使用了 `--keep-history` 删除的 release。

`helm list --all` 会展示 Helm 保留的所有 release 记录，包括失败或删除的条目（指定了 `--keep-history`）：

```bash
$  helm list --all
NAME            VERSION UPDATED                         STATUS          CHART
happy-panda     2       Wed Sep 28 12:47:54 2016        UNINSTALLED     wordpress-10.4.5.6.0
inky-cat        1       Wed Sep 28 12:59:46 2016        DEPLOYED        alpine-0.1.0
kindred-angelf  2       Tue Sep 27 16:16:10 2016        UNINSTALLED     alpine-0.1.0
```

> 注意，因为现在默认会删除 release，所以你不再能够回滚一个已经被卸载的资源了。

#### repo

`helm repo`：使用仓库

Helm 3 不再附带一个默认的 chart 仓库。`helm repo` 提供了一组命令用于添加、列出和移除仓库。

- 使用 `helm repo add` 来添加新的仓库：

```bash
$ helm repo add dev https://example.com/dev-charts
```

- 使用 `helm repo list` 来查看已经添加的仓库：

```bash
$ helm repo list
NAME            URL
stable          https://charts.helm.sh/stable
mumoshu         https://mumoshu.github.io/charts
```

- 因为 chart 仓库经常在变化，在任何时候你都可以通过执行 `helm repo update` 命令来确保你的 Helm 客户端是最新的。
- `helm repo remove` 命令来移除仓库。

#### create

可以通过使用 `helm create` 命令来快速创建自己的Chart。[chart 开发指南](https://helm.sh/zh/docs/topics/charts) 介绍了如何开发你自己的chart。

```bash
$ helm create deis-workflow
Creating deis-workflow
```

现在，`./deis-workflow` 目录下已经有一个 chart 了。你可以编辑它并创建你自己的模版。

在编辑 chart 时，可以通过 `helm lint` 验证格式是否正确。

当准备将 chart 打包分发时，你可以运行 `helm package` 命令：

```bash
$ helm package deis-workflow
deis-workflow-0.1.0.tgz
```

然后这个 chart 就可以很轻松的通过 `helm install` 命令安装

```bash
$ helm install deis-workflow ./deis-workflow-0.1.0.tgz
...
```

打包好的 chart 可以上传到 chart 仓库中。查看 [Helm chart 仓库](https://helm.sh/zh/docs/topics/chart_repository)获取更多信息。

#### pull 

如果你想下载和查看一个发布的chart，但不安装它，你可以用这个命令： `helm pull chartrepo/chartname`。

#### lint

在编辑 chart 时，可以通过 `helm lint` 验证格式是否正确。

#### package

当准备将 chart 打包分发时，你可以运行 `helm package` 命令

#### get

#### status

## 开发自己的chart

Helm使用的包格式称为 *chart*。 chart就是一个描述Kubernetes相关资源的文件集合。单个chart可以用来部署一些简单的， 类似于memcache pod，或者某些复杂的HTTP服务器以及web全栈应用、数据库、缓存等等。

Chart是作为特定目录布局的文件被创建的。它们可以打包到要部署的版本存档中。

如果你想下载和查看一个发布的chart，但不安装它，你可以用这个命令： `helm pull chartrepo/chartname`。

该文档解释说明了chart格式，并提供了用Helm构建chart的基本指导。

### Chart 文件结构

chart是一个组织在文件目录中的集合。目录名称就是chart名称（没有版本信息）。因而描述`WordPress`的chart可以存储在`wordpress/`目录中。

在这个目录中，Helm 期望可以匹配以下结构：

```text
wordpress/
  Chart.yaml          # 包含了chart信息的YAML文件
  LICENSE             # 可选: 包含chart许可证的纯文本文件
  README.md           # 可选: 可读的README文件
  values.yaml         # chart 默认的配置值
  values.schema.json  # 可选: 一个使用JSON结构的values.yaml文件
  charts/             # 包含chart依赖的其他chart
  crds/               # 自定义资源的定义
  templates/          # 模板目录， 当和values 结合时，可生成有效的Kubernetes manifest文件
  templates/NOTES.txt # 可选: 包含简要使用说明的纯文本文件
```

Helm保留使用 `charts/`，`crds/`， `templates/`目录，以及列举出的文件名。其他文件保持原样。

### Chart.yaml 文件

`Chart.yaml`文件是chart必需的。包含了以下字段：

```yaml
apiVersion: chart API 版本 （必需）
name: chart名称 （必需）
version: 语义化2 版本（必需）
kubeVersion: 兼容Kubernetes版本的语义化版本（可选）
description: 一句话对这个项目的描述（可选）
type: chart类型 （可选）
keywords:
  - 关于项目的一组关键字（可选）
home: 项目home页面的URL （可选）
sources:
  - 项目源码的URL列表（可选）
dependencies: # chart 必要条件列表 （可选）
  - name: chart名称 (nginx)
    version: chart版本 ("1.2.3")
    repository: （可选）仓库URL ("https://example.com/charts") 或别名 ("@repo-name")
    condition: （可选） 解析为布尔值的yaml路径，用于启用/禁用chart (e.g. subchart1.enabled )
    tags: # （可选）
      - 用于一次启用/禁用 一组chart的tag
    import-values: # （可选）
      - ImportValue 保存源值到导入父键的映射。每项可以是字符串或者一对子/父列表项
    alias: （可选） chart中使用的别名。当你要多次添加相同的chart时会很有用
maintainers: # （可选）
  - name: 维护者名字 （每个维护者都需要）
    email: 维护者邮箱 （每个维护者可选）
    url: 维护者URL （每个维护者可选）
icon: 用做icon的SVG或PNG图片URL （可选）
appVersion: 包含的应用版本（可选）。不需要是语义化，建议使用引号
deprecated: 不被推荐的chart （可选，布尔值）
annotations:
  example: 按名称输入的批注列表 （可选）.
```

从 [v3.3.2](https://github.com/helm/helm/releases/tag/v3.3.2)，不再允许额外的字段。推荐的方法是在 `annotations` 中添加自定义元数据。

#### Chart和版本控制

每个chart都必须有个版本号。版本必须遵循 [语义化版本 2](https://semver.org/spec/v2.0.0.html) 标准。 不像经典Helm， Helm v2以及后续版本会使用版本号作为发布标记。仓库中的包通过名称加版本号标识。

比如 `nginx` chart的版本字段`version: 1.2.3`按照名称被设置为：`nginx-1.2.3.tgz`

更多复杂的语义化版本2 都是支持的，比如 `version: 1.2.3-alpha.1+ef365`。 但系统明确禁止非语义化版本名称。

> 鉴于经典Helm和部署管理器在使用chart时都非常倾向于GitHub，Helm v2 和后续版本不再依赖或需要GitHub甚至是Git。 因此，它完全不使用Git SHA进行版本控制。

`Chart.yaml`文件中的**`version`**字段被很多Helm工具使用，包括CLI。当生成一个包时， `helm package`命令可以用`Chart.yaml`文件中找到的版本号作为包名中的token。系统假设chart包名中的版本号可以与`Chart.yaml`文件中的版本号匹配。如果不满足这一假设会导致错误。

##### `apiVersion` 字段

对于至少需要Helm 3的chart，`apiVersion` 字段应该是 `v2`。Chart支持之前`apiVersion` 设置为 `v1` 的Helm 版本， 并且在Helm 3中仍然可安装。

`v1` 到 `v2`的改变：

- `dependencies`字段定义了chart的依赖，针对于`v1` 版本的chart被放置在分隔开的`requirements.yaml` 文件中 （查看 [Chart 依赖](#Chart dependency))。
- `type`字段, 用于识别应用和库类型的chart（查看 [Chart 类型](#Chart Types))。

##### `appVersion` 字段

注意这个`appVersion`字段与`version`字段并不相关。这是指定应用版本的一种方式。比如，这个`drupal` chart可能有一个 `appVersion: "8.2.1"`，表示包含在chart（默认）的Drupal的版本是`8.2.1`。此字段仅供参考，对chart版本计算没有影响。强烈建议使用引号将版本括起来。它强制YAML解析器将版本号视为字符串。不加引号在某些场景会出现解析问题。

从Helm v3.5.0开始，`helm create`会将默认的`appVersion`用引号括起来。

##### `kubeVersion` 字段

可选的 `kubeVersion` 字段可以在支持的Kubernetes版本上定义语义化版本约束，Helm 在安装chart时会验证这个版本约束， 并在集群运行不支持的Kubernetes版本时显示失败。

版本约束可以包括空格分隔和比较运算符，比如：

```bash
>= 1.13.0 < 1.15.0
```

或者它们可以用或操作符 `||` 连接，比如：

```bash
>= 1.13.0 < 1.14.0 || >= 1.14.1 < 1.15.0
```

这个例子中排除了 `1.14.0` 版本，如果确定某些版本中的错误导致chart无法正常运行，这一点就很有意义。

除了版本约束外，使用运算符 `=` `!=` `>` `<` `>=` `<=` 支持一下速记符号：

- 闭合间隔的连字符范围， `1.1 - 2.3.4` 等价于 `>= 1.1 <= 2.3.4`
- 通配符 `x`， `X` 和 `*`， `1.2.x` 等价于 `>= 1.2.0 < 1.3.0`
- 波浪符号~范围 （允许改变补丁版本）， `~1.2.3` 等价于 `>= 1.2.3 < 1.3.0`
- 插入符号^范围 （允许改变次版本）， `^1.2.3` 等价于 `>= 1.2.3 < 2.0.0`

##### deprecated

在Chart仓库管理chart时，有时需要废弃一个chart。 `Chart.yaml` 中可选的`deprecated`字段可以用来标记已弃用的chart。如果**latest**版本被标记为已弃用，则所有的chart都会被认为是已弃用的。以后可以通过发布未标记为已弃用的新版本来重新使用chart名称。 弃用chart的工作流是：

1. 升级chart的 `Chart.yaml` 文件，将这个chart标记为已弃用， 并更改版本
2. 在chart仓库中发布新版的chart
3. 从源仓库中移除这个chart （比如用 git）

#### Chart Types

`type`字段定义了chart的类型。有两种类型： `application` 和 `library`。应用是默认类型，是可以完全操作的标准chart。 [库类型 chart](http://helm.sh/zh/docs/topics/library_charts) 提供针对chart构建的实用程序和功能。 库类型chart与应用类型chart不同，因为它不能安装，通常不包含任何资源对象。

> 应用类型chart 可以作为库类型chart使用。可以通过将类型设置为 `library`来实现。 然后这个库就被渲染成了一个库类型chart，所有的实用程序和功能都可以使用。所有的资源对象不会被渲染。



### Chart 许可证，自述和注释

Chart也可以包含描述安装，配置和使用文件，以及chart许可证。

许可证（LICENSE）是一个包含了chart [license](https://en.wikipedia.org/wiki/Software_license)的纯文本文件。 chart可以包含一个许可证，因为在模板里不只是配置，还可能有编码逻辑。如果需要，还可以为chart安装的应用程序提供单独的许可证。

chart的自述文件README文件应该使用Markdown格式(README.md)，一般应包含：

- chart提供的应用或服务的描述
- 运行chart的先决条件或要求
- `values.yaml`的可选项和默认值的描述
- 与chart的安装或配置相关的其他任何信息

`README.md` 文件会包含hub和用户接口显示的chart的详细信息。

chart也会包含一个简短的纯文本 `templates/NOTES.txt` 文件，这会在安装后及查看版本状态时打印出来。 这个文件会作为一个 [模板](https://helm.sh/zh/docs/topics/charts/#templates-and-values)来评估，并用来显示使用说明，后续步骤，或者其他chart版本的相关信息。 比如，可以提供连接数据库的说明，web UI的访问。由于此文件是在运行`helm install`或`helm status`时打印到`STDOUT`的， 因此建议保持内容简短，并指向自述文件以获取更多详细信息。

### Chart dependency

Helm 中，chart可能会依赖其他任意个chart。 这些依赖可以使用`Chart.yaml`文件中的`dependencies` 字段动态链接，或者被带入到`charts/` 目录并手动配置。

#### 使用 `dependencies` 字段管理依赖

当前chart依赖的其他chart会在`dependencies`字段定义为一个列表。

```yaml
dependencies:
  - name: apache
    version: 1.2.3
    repository: https://example.com/charts
  - name: mysql
    version: 3.2.1
    repository: https://another.example.com/charts
```

- `name`字段是你需要的chart的名称
- `version`字段是你需要的chart的版本
- `repository`字段是chart仓库的完整URL。注意你必须使用`helm repo add`在本地添加仓库
- 你可以使用仓库的名称代替URL（@repoName）

```bash
$ helm repo add fantastic-charts https://fantastic-charts.storage.googleapis.com
```

```yaml
dependencies:
  - name: awesomeness
    version: 1.0.0
    repository: "@fantastic-charts"
```

一旦你定义好了依赖，运行 `helm dependency update` 就会使用你的依赖文件下载所有你指定的chart到你的`charts/`目录。

```bash
# helm dependency update的简写“helm dep up”
$ helm dep up foochart
Hang tight while we grab the latest from your chart repositories...
...Successfully got an update from the "local" chart repository
...Successfully got an update from the "stable" chart repository
...Successfully got an update from the "example" chart repository
...Successfully got an update from the "another" chart repository
Update Complete. Happy Helming!
Saving 2 charts
Downloading apache from repo https://example.com/charts
Downloading mysql from repo https://another.example.com/charts
```

当 `helm dependency update` 拉取chart时，会在`charts/`目录中形成一个chart包。因此对于上面的示例，会在chart目录中期望看到以下文件：

```text
charts/
  apache-1.2.3.tgz
  mysql-3.2.1.tgz
```

##### 依赖的别名字段

除了上面的其他字段之外，每个需求项可以包含一个可选的字段 `alias`。 为依赖chart添加一个别名，会使用别名作为新依赖chart的名称。 需要使用其他名称访问chart时可以使用`alias`。

```yaml
dependencies:
  - name: subchart
    repository: http://localhost:10191
    version: 0.1.0
    alias: new-subchart-1
  - name: subchart
    repository: http://localhost:10191
    version: 0.1.0
    alias: new-subchart-2
  - name: subchart
    repository: http://localhost:10191
    version: 0.1.0
```

手动完成的方式是将同一个chart用不同的名称复制/粘贴多次到`charts/`目录中。

##### 依赖中的tag和条件字段

除了上面的其他字段外，每个需求项可以包含可选字段 `tags` 和 `condition`。

所有的chart会默认加载。如果存在 `tags` 或者 `condition` 字段，它们将被评估并用于控制它们应用的chart的加载。

Condition - 条件字段field 包含一个或多个`YAML`路径（用逗号分隔）。 如果这个路径在上层values中已存在并解析为布尔值，chart会基于布尔值启用或禁用chart。 只会使用列表中找到的第一个有效路径，如果路径为未找到则条件无效。

Tags - tag字段是与chart关联的`YAML`格式的标签列表。在顶层value中，通过指定tag和布尔值，可以启用或禁用所有的带tag的chart。

```yaml
# parentchart/Chart.yaml

dependencies:
  - name: subchart1
    repository: http://localhost:10191
    version: 0.1.0
    condition: subchart1.enabled, global.subchart1.enabled
    tags:
      - front-end
      - subchart1
  - name: subchart2
    repository: http://localhost:10191
    version: 0.1.0
    condition: subchart2.enabled,global.subchart2.enabled
    tags:
      - back-end
      - subchart2
```

```yaml
# parentchart/values.yaml

subchart1:
  enabled: true
tags:
  front-end: false
  back-end: true
```

在上面的例子中，所有带 `front-end`tag的chart都会被禁用，但只要上层的value中 `subchart1.enabled` 路径被设置为 'true'，该条件会覆盖 `front-end`标签且 `subchart1` 会被启用。

一旦 `subchart2`使用了`back-end`标签并被设置为了 `true`，`subchart2`就会被启用。 也要注意尽管`subchart2` 指定了一个条件字段， 但是上层value没有相应的路径和value，因此这个条件不会生效。

##### 使用带有标签和条件的CLI

`--set` 参数一如既往可以用来设置标签和条件值。

```bash
helm install --set tags.front-end=true --set subchart2.enabled=false
```

##### 标签和条件的解析

- **条件 （当设置在value中时）总是会覆盖标签** 第一个chart条件路径存在时会忽略后面的路径。
- 标签被定义为 '如果任意的chart标签是true，chart就可以启用'。
- 标签和条件值必须被设置在顶层value中。
- value中的`tags:`键必须是顶层键。 全局和嵌套的`tags:`表现在不支持了。

##### 通过依赖导入子Value

在某些情况下，允许子chart的值作为公共默认传递到父chart中是值得的。使用 `exports`格式的额外好处是它可是将来的工具可以自检用户可设置的值。

被导入的包含值的key可以在父chart的 `dependencies` 中的 `import-values` 字段以YAML列表形式指定。 列表中的每一项是从子chart中`exports`字段导入的key。

导入`exports` key中未包含的值，使用 [子-父](https://helm.sh/zh/docs/topics/charts/#using-the-child-parent-format)格式。两种格式的示例如下所述。





#### 通过`charts/`目录手动管理依赖





### Templates and Values

所有模板文件存储在chart的 `templates/` 文件夹。 当Helm渲染chart时，它会通过模板引擎遍历目录中的每个文件。模板的Value通过两种方式提供：

- Chart开发者可以在chart中提供一个命名为 `values.yaml` 的文件。这个文件包含了默认值。
- Chart用户可以提供一个包含了value的YAML文件。可以在命令行使用 `helm install`命令时提供。

当用户提供自定义value时，这些value会覆盖chart的`values.yaml`文件中value。

#### 模板文件

模板文件遵守书写Go模板的标准惯例（查看 [文本/模板 Go 包文档](https://golang.org/pkg/text/template/)了解更多）。 模板文件的例子看起来像这样：

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: deis-database
  namespace: deis
  labels:
    app.kubernetes.io/managed-by: deis
spec:
  replicas: 1
  selector:
    app.kubernetes.io/name: deis-database
  template:
    metadata:
      labels:
        app.kubernetes.io/name: deis-database
    spec:
      serviceAccount: deis-database
      containers:
        - name: deis-database
          image: {{ .Values.imageRegistry }}/postgres:{{ .Values.dockerTag }}
          imagePullPolicy: {{ .Values.pullPolicy }}
          ports:
            - containerPort: 5432
          env:
            - name: DATABASE_STORAGE
              value: {{ default "minio" .Values.storage }}
```

上面的例子，是一个`Kubernetes`副本控制器的模板。

可以使用下面四种模板值（一般被定义在`values.yaml`文件）：

- `imageRegistry`: Docker镜像的源注册表
- `dockerTag`: Docker镜像的tag
- `pullPolicy`: Kubernetes的拉取策略
- `storage`: 后台存储，默认设置为`"minio"`

所有的值都是模板作者定义的。Helm不需要或指定参数。

#### 预定义的Values

Values通过模板中`.Values`对象可访问的`values.yaml`文件（或者通过 `--set` 参数)提供， 但可以模板中访问其他预定义的数据片段。

以下值是预定义的，对每个模板都有效，并且可以被覆盖。和所有值一样，名称 *区分大小写*。

- `Release.Name`: 版本名称(非chart的)
- `Release.Namespace`: 发布的chart版本的命名空间
- `Release.Service`: 组织版本的服务
- `Release.IsUpgrade`: 如果当前操作是升级或回滚，设置为true
- `Release.IsInstall`: 如果当前操作是安装，设置为true
- `Chart`: `Chart.yaml`的内容。因此，chart的版本可以从 `Chart.Version` 获得， 并且维护者在`Chart.Maintainers`里。
- `Files`: chart中的包含了非特殊文件的类图对象。这将不允许您访问模板， 但是可以访问现有的其他文件（除非被`.helmignore`排除在外）。 使用`{{ index .Files "file.name" }}`可以访问文件或者使用`{{.Files.Get name }}`功能。 您也可以使用`{{ .Files.GetBytes }}`作为`[]byte`访问文件内容。
- `Capabilities`: 包含了`Kubernetes`版本信息的类图对象。(`{{ .Capabilities.KubeVersion }}`) 和支持的`Kubernetes API` 版本(`{{ .Capabilities.APIVersions.Has "batch/v1" }}`)

> 任何未知的`Chart.yaml`字段会被抛弃。在`Chart`对象中无法访问。因此， `Chart.yaml`不能用于将任意结构的数据传递到模板中。不过`values`文件可用于此。

#### Values文件

考虑到前面部分的模板，`values.yaml`文件提供的必要值如下：

```yaml
imageRegistry: "quay.io/deis"
dockerTag: "latest"
pullPolicy: "Always"
storage: "s3"
```

values文件被定义为`YAML`格式。chart会包含一个默认的`values.yaml`文件。 Helm安装命令允许用户使用附加的`YAML` values覆盖这个values：

```bash
$ helm install --generate-name --values=myvals.yaml wordpress
```

以这种方式传递值时，它们会合并到默认的values文件中。

> **注意：** chart包含的默认values文件 *必须* 被命名为`values.yaml`。不过在命令行指定的文件可以是其他名称。

> **注意：** 如果`helm install`或`helm upgrade`使用了`--set`参数，这些值在客户端会被简单地转换为`YAML`。

> **注意：** 如果values 文件存在任何必需的条目，它们会在chart模板中使用 ['required' 函数](https://helm.sh/zh/docs/howto/charts_tips_and_tricks) 声明为必需的。

然后使用模板中的`.Values`对象就可以任意访问这些值了：

```yaml
apiVersion: v1
kind: ReplicationController
metadata:
  name: deis-database
  namespace: deis
  labels:
    app.kubernetes.io/managed-by: deis
spec:
  replicas: 1
  selector:
    app.kubernetes.io/name: deis-database
  template:
    metadata:
      labels:
        app.kubernetes.io/name: deis-database
    spec:
      serviceAccount: deis-database
      containers:
        - name: deis-database
          image: {{ .Values.imageRegistry }}/postgres:{{ .Values.dockerTag }}
          imagePullPolicy: {{ .Values.pullPolicy }}
          ports:
            - containerPort: 5432
          env:
            - name: DATABASE_STORAGE
              value: {{ default "minio" .Values.storage }}
```

#### 范围，依赖和值

Values文件可以声明顶级chart的值，以及`charts/`目录中包含的其他任意chart。 或者换个说法，values文件可以为chart及其任何依赖项提供值。比如，上面示范的`WordPress chart`同时有 `mysql` 和 `apache` 作为依赖。values文件可以为以下所有这些组件提供依赖：

```yaml
title: "My WordPress Site" # Sent to the WordPress template

mysql:
  max_connections: 100 # Sent to MySQL
  password: "secret"

apache:
  port: 8080 # Passed to Apache
```

更高阶的chart可以访问下面定义的所有变量。因此`WordPress chart`可以用`.Values.mysql.password`访问`MySQL`密码。 但是低阶的chart不能访问父级chart，所以`MySQL`无法访问`title`属性。同样也无法访问`apache.port`。

Values 被限制在命名空间中，但是命名空间被删减了。因此对于WordPress chart， 它可以用`.Values.mysql.password`访问MySQL的密码字段。但是对于MySQL chart，值的范围被缩减了且命名空间前缀被移除了， 因此它把密码字段简单地看作`.Values.password`。

#### 全局Values

从2.0.0-Alpha.2开始，Helm 支持特殊的"global"值。设想一下前面的示例中的修改版本：

```yaml
title: "My WordPress Site" # Sent to the WordPress template

global:
  app: MyWordPress

mysql:
  max_connections: 100 # Sent to MySQL
  password: "secret"

apache:
  port: 8080 # Passed to Apache
```

上面添加了`global`部分和一个值`app: MyWordPress`。这个值以`.Values.global.app`在 *所有* chart中有效。

比如，`mysql`模板可以以`{{.Values.global.app}}`访问`app`，同样`apache`chart也可以访问。 实际上，上面的values文件会重新生成为这样：

```yaml
title: "My WordPress Site" # Sent to the WordPress template

global:
  app: MyWordPress

mysql:
  global:
    app: MyWordPress
  max_connections: 100 # Sent to MySQL
  password: "secret"

apache:
  global:
    app: MyWordPress
  port: 8080 # Passed to Apache
```

这提供了一种和所有的子chart共享顶级变量的方式，这在类似`label`设置`metadata`属性时会很有用。

如果子chart声明了一个全局变量，那这个变量会 *向下* 传递（到子chart的子chart），但不会 *向上* 传递到父级chart。 子chart无法影响父chart的值。

并且，父chart的全局变量优先于子chart中的全局变量。

#### 架构文件

有时候，chart容器可能想基于它们的values值定义一个结构，这可以在`values.schema.json`文件中定义一个架构实现。 架构使用 [JSON 架构](https://json-schema.org/)表示。看起来像这样：

```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "properties": {
    "image": {
      "description": "Container Image",
      "properties": {
        "repo": {
          "type": "string"
        },
        "tag": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "name": {
      "description": "Service name",
      "type": "string"
    },
    "port": {
      "description": "Port",
      "minimum": 0,
      "type": "integer"
    },
    "protocol": {
      "type": "string"
    }
  },
  "required": [
    "protocol",
    "port"
  ],
  "title": "Values",
  "type": "object"
}
```

这个架构会应用values值并验证它。当执行以下任意命令时会进行验证：

- `helm install`
- `helm upgrade`
- `helm lint`
- `helm template`

一个符合此架构要求的`values.yaml`文件示例如下所示：

```yaml
name: frontend
protocol: https
port: 443
```

注意这个架构被应用到了最终的 `.Values` 对象，而不仅仅是`values.yaml`文件。

这意味着下面的`yaml`文件是有效的，给定的chart是用下面显示的适当的`--set`选项安装的：

```yaml
name: frontend
protocol: https
```

```bash
$ helm install --set port=443
```

此外，最终的`.Values`对象是根据*所有的*子chart架构检查。 这意味着父chart无法规避子chart的限制。 这也是逆向的 - 如果子chart的`values.yaml`文件无法满足需求，父chart*必须* 满足这些限制才能有效。

#### 参考

在编写模板，值和架构文件时，有几个标准的参考可以帮助您。

- [Go templates](https://godoc.org/text/template)
- [Extra template functions](https://godoc.org/github.com/Masterminds/sprig)
- [The YAML format](https://yaml.org/spec/)
- [JSON Schema](https://json-schema.org/)

### 用户自定义资源(CRD)

Kubernetes提供了一种声明Kubernetes新类型对象的机制。使用CustomResourceDefinition（CRD）， Kubernetes开发者可以声明自定义资源类型。



### 使用Helm管理Chart

`helm`工具有一些命令用来处理chart。

它可以为您创建一个新chart：

```bash
$ helm create mychart
Created mychart/
```

编辑了chart之后，`helm`能为您把它打包成一个chart存档：

```bash
$ helm package mychart
Archived mychart-0.1.-.tgz
```

您也可以使用`helm` 帮您找到chart的格式或信息的问题：

```bash
$ helm lint mychart
No issues found
```



### Chart仓库

*chart仓库* 是一个HTTP服务器，包含了一个或多个打包的chart。当`helm`用来管理本地chart目录时， 共享chart时，首选的机制就是使用chart仓库。

任何可以服务于YAML文件和tar文件并可以响应GET请求的HTTP服务器都可以用做仓库服务器。 Helm 团队已经测试了一些服务器，包括激活websit模组的Google Cloud 存储，以及使用website的S3。

仓库的主要特征存在一个名为 `index.yaml` 的特殊文件，文件中包含仓库提供的包的完整列表， 以及允许检索和验证这些包的元数据。

在客户端，仓库使用`helm repo`命令管理。然而，Helm不提供上传chart到远程仓库的工具。 这是因为这样做会给执行服务器增加大量的必要条件，也就增加了设置仓库的障碍。

### Chart Starter 包

`helm create`命令可以附带一个可选的 `--starter` 选项让您指定一个 "starter chart"。

Starter就只是普通chart，但是被放置在`$XDG_DATA_HOME/helm/starters`。作为一个chart开发者， 您可以编写被特别设计用来作为启动的chart。设计此类chart应注意以下考虑因素：

- `Chart.yaml`会被生成器覆盖。
- 用户将希望修改此类chart的内容，所以文档应该说明用户如果做到这一点。
- 所有出现的`<CHARTNAME>`都会被替换为指定为chart名称，以便chart可以作为模板使用。

当前增加一个chart的唯一方式就是拷贝chart到`$XDG_DATA_HOME/helm/starters`。在您的chart文档中，您可能需要解释这个过程。









