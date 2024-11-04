---
id: zookeeper
title: Zookeeper安装
sidebar_label: Zookeeper安装
---

下载地址：https://zookeeper.apache.org/releases.html

当前最新版本：3.8.0

当前最新稳定版：3.7.1

> zookeeper依赖JDK，请提前自行安装JDK。
>
> 推荐一款开源zookeeper客户端可视化工具：PrettyZoo
>
> 下载地址：https://github.com/vran-dev/PrettyZoo/releases

## 单机

下载：https://dlcdn.apache.org/zookeeper/zookeeper-3.7.1/apache-zookeeper-3.7.1-bin.tar.gz

验证文件完整性：略过，可自行查看[官网说明](https://www.apache.org/dyn/closer.lua/zookeeper/zookeeper-3.7.1/apache-zookeeper-3.7.1-bin.tar.gz)。

下载后解压：

```bash
tar zxvf apache-zookeeper-3.7.1-bin.tar.gz
# 解压后进入根目录
cd apache-zookeeper-3.7.1-bin/
```

### 配置文件

zk服务需要一个启动配置文件，创建一个**conf/zoo.cfg**文件（文件名可自定义）：

```cfg
tickTime=2000
dataDir=/var/lib/zookeeper
dataLogDir=/var/lib/zookeeper/zookeeper/logs
clientPort=2181
```

- tickTime：ZooKeeper使用的基本时间单位（毫秒）。它用于进行心跳，最小会话超时将是tickTime的两倍。
- dataDir：存储内存中数据库快照的位置，以及数据库更新的事务日志。（需要提前创建好一个空的文件夹）
- dataLogDir：存储数据库更新的事务日志。不过不配置，将使用`dataDir`路径
- clientPort：侦听客户端连接的端口

>  更多配置参数请查阅官方[配置说明](https://zookeeper.apache.org/doc/current/zookeeperAdmin.html#id_multi_address)

### 启动

```bash
bin/zkServer.sh start [conf/zoo.cfg]
```

客户端连接

```bash
bin/zkCli.sh -server 127.0.0.1:2181
```

客户端连接成功后，将看到如下信息：

```bash
Connecting to localhost:2181
...
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

`help`命令可查看客户端操作命令：

```bash
[zkshell: 0] help
ZooKeeper -server host:port cmd args
addauth scheme auth
close
config [-c] [-w] [-s]
connect host:port
create [-s] [-e] [-c] [-t ttl] path [data] [acl]
delete [-v version] path
deleteall path
...
```



## 集群

> 集群节点均需要进行以下操作。

### 配置文件

集群模式需要修改zk的配置文件**conf/zoo.cfg**

```cfg
tickTime=2000
dataDir=/var/lib/zookeeper/node1/data
dataLogDir=/var/lib/zookeeper/node1/logs
clientPort=2181

initLimit=5
syncLimit=2
server.1=zoo1:2888:3888
server.2=zoo2:2888:3888
server.3=zoo3:2888:3888
```

- initLimit：连接到zk集群`leader`几点的超时时间
- syncLimit：集群节点从`leader`节点同步数据的时间

以上两个配置的值不是真正的时间，真正的时间应该是 `initLimit * tickTime` 得出的时间。即：`initLimit`应该是`10s`，`syncLimit`应该是`4s`。

- server.x：集群中的各个节点，由IP地址和两个端口号组成，后面的两个端口为集群节点之间通讯的端口号。具体的：
  - 第一个端口号（2888）：集群`flower`节点连接到`leader`节点的端口号
  - 第二个端口号（3888）：当`leader`节点挂掉，需要重新选举`leader`节点时，使用的端口号

> 这里需要注意，如果是单机伪集群的话，每一个端口号都不能重复。例如：
>
> ```cfg
> zoo1 : 3888,2888
> zoo2 : 3788,2788
> zoo3 : 3688,2688
> ```
>
> 就是说需要占用 6 个端口，加上`client`端口，至少需要占用 9 个端口号

> 更多配置参数请查阅官方[配置说明](https://zookeeper.apache.org/doc/current/zookeeperAdmin.html#id_multi_address)

### 创建`myid`文件

在`dataDir`目录中，创建一个`myid`文件，记录节点的`id`

```bash
# 创建目录
mkdir /var/lib/zookeeper/node1/data
# 创建myid文件
touch /var/lib/zookeeper/node1/data/myid
# 将节点id写入myid（节点id即为zoo.cfg文件中`server.x`中的x）
echo 1 > /var/lib/zookeeper/node1/data/myid
```

### 启动

依次启动集群节点中的每个服务

```bash
bin/zkServer.sh start
```

启动后，使用以下命令查看节点角色：

```bash
[root@master zookeeper]# ./bin/zkServer.sh status
/usr/bin/java
ZooKeeper JMX enabled by default
Using config: /root/zookeeper/node3/bin/../conf/zoo.cfg
Client port found: 2183. Client address: localhost. Client SSL: false.
Mode: follower
```

其中`Mode：follower`表示该节点为从节点，如果是`leader`为主节点。





























