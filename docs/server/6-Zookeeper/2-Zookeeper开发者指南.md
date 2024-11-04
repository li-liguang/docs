---
id: zookeeper-guide
title: Zookeeper开发者指南
sidebar_label: Zookeeper开发者指南
---

https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html

## 数据模型

`ZooKeeper`有一个分层的名称空间，很像分布式文件系统。唯一的区别是名称空间中的每个节点都可以有与其关联的数据以及子节点。这就像拥有一个文件系统，它允许一个文件同时也是一个目录。节点的路径始终表示为规范、绝对、斜杠分隔的路径；没有相对路径。任何`unicode`字符都可以在受以下约束的路径中使用：

- 空字符（\u0000）不能是路径名的一部分。（这会导致C绑定出现问题。）
- 以下字符不能使用，因为它们显示不好，或呈现方式混乱（\u0001 - \u001F and \u007F）

- \u009F
- 以下字符不允许：\ud800 - uF8FF, \uFFF0 - uFFFF
- 不允许使用“.”或者“..”指示路径上的节点
- “zookeeper”节点被保留，不允许使用。

## 节点

ZooKeeper树中的每个节点都称为znode。Znode维护一个stat结构，其中包括数据更改、acl更改的版本号，以及一个时间戳。版本号和时间戳允许ZooKeeper验证缓存并协调更新。每次znode的数据更改时，版本号都会增加。每当客户端检索数据时，它也会接收数据的版本。当客户端执行更新或删除时，它必须提供它正在更改的znode的数据版本。如果它提供的版本与数据的实际版本不匹配，则更新将失败。（此行为可以被覆盖）

> 在ZooKeeper文档中，znode指数据节点。Servers是指组成ZooKeeper服务的机器；quorum对等点是指组成集群的服务器；客户端是指使用ZooKeeper服务的任何主机或进程。

Znode是程序员访问的主要实体。它们有几个特点值得在此提及。

### Watches监听

客户可以在znodes上设置监听。对该znode的更改会触发监听，然后清除该监听程序（一次性监听）。当监视触发时，ZooKeeper向客户端发送通知。有关监听器的更多信息，请参阅[ZooKeeper watches](https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html#ch_zkWatches)部分。

### 数据访问

存储在命名空间中每个znode的数据都是原子读取和写入的。读操作获取与znode关联的所有数据字节，写操作替换所有数据。每个节点都有一个访问控制列表（ACL），用于限制谁可以做什么。

ZooKeeper并不是为通用数据库或大型对象存储而设计的。相反，它管理协调数据。这些数据可以以配置、状态信息、会合等形式出现。各种形式的协调数据的一个共同特点是它们相对较小：以千字节为单位。ZooKeeper客户端和服务器实现都进行了健全性检查，以确保znode的数据少于1M，但数据应该比平均值少得多。在相对较大的数据大小上操作会导致某些操作比其他操作花费更多的时间，并会影响某些操作的延迟，因为需要额外的时间才能通过网络将更多数据移动到存储介质上。如果需要大数据存储，处理此类数据的通常模式是将其存储在大容量存储系统（如NFS或HDFS）上，并在ZooKeeper中存储指向存储位置的指针。

### 节点类型

zk中的节点有7中类型：

1. **持久性节点**：不主动删除，一直存在的节点
2. **持久性顺序节点**：同持久性节点，但是zk服务会在节点后，自动添加一个数字的后缀
3. **临时节点**：客户端连接关闭或因异常断开，zk服务器将删除该节点
4. **临时顺序节点**：同临时节点，但是zk服务会在节点后，自动添加一个数字的后缀
5. **容器节点**：容器节点和持久性节点一样，他是专为存放子节点的节点。如果容器节点的子节点数为0时，zk服务在未来可能删除该节点（定时，或者zk服务启动时）
6. **持久TTL节点**：TTL是time to live的缩写，指带有存活时间的节点。简单来说就是当该节点下没有子节点的话，超过了TTL的存活时间会被自动删除。TTL节点的启用需要额外的配置，`zookeeper.extendedTypesEnabled`设置为`true`。
7. **持久顺序TTL节点**：略

> 容器节点和持久TTL节点为`3.6.0` 版本新增



## 权限控制

### 概述

​	zookeeper类似于文件系统，client可以创建节点，更新节点，删除节点，那么如何做到节点的权限的控制呢？zookeeper的access control list 访问控制列表可以自耦到这一点。

​	acl权限控制，使用scheme：id：permission来表示，主要涵盖3个方面：

- 权限模式(scheme)：授权的策略

- 授权对象(id)：授权的对象

- 权限(permission)：授予的权限

  **其特性如下：**

- zookeeper的权限控制是基于每个znode节点的，需要对每个节点设置权限

- 每个znode支持设置多种权限控制方案和多个权限

- 子节点不会继承父节点的权限，客户点无权访问某个节点，但可能可以访问他的子节点

```bash
//将节点权限设置为Ip:192.168.60.130的客户端可以对节点进行增、删、该、查、权限管理
setAcl /test2 ip:192.168.60.130:rewda
```

### 权限模式

采用何种方式授权

| 方案   | 描述                                                  |
| :----- | ----------------------------------------------------- |
| world  | 只有一个用户：anyone，代表登录zooleeper所有人（默认） |
| ip     | 对客户端使用ip地址认证                                |
| auth   | 使用已添加认证的用户认证                              |
| digest | 使用“用户名：密码”方式认证                            |

### 授权的对象

给谁授权

授权对象ID是指，权限赋予的实体例如：ip地址或用户。



### 授予的权限

授予什么权限

create、delete、read、writer、admin也就是增、删、改、查、管理权限，这5中权限简写为cdrwa、注意：这5中权限中，delete是指对子节点的删除权限，其他4种权限值对自身节点的权限操作。

| 权限   | ACL简写 | 描述                             |
| ------ | ------- | -------------------------------- |
| create | c       | 可以创建子节点                   |
| delete | d       | 可以删除子节点(仅下一级节点)     |
| read   | r       | 可以读取节点数据及显示子节点列表 |
| write  | w       | 可以设置节点数据                 |
| admin  | a       | 可以设置节点访问控制列表权限     |

### 授权的相关命令

| 命令    | 使用方式            | 描述         |
| ------- | ------------------- | ------------ |
| getAcl  | getAcl path         | 读取ACL权限  |
| setAcl  | setAcl path acl     | 设置ACL权限  |
| addauth | addauth scheme auth | 添加认证用户 |

### 案例

- world授权模式：

  命令

  ```java
  setAcl <path> world:anyone:<acl>
  setAcl /hadoop world:anyone:cdrwa
  ```

  案例

  ```xml
  [zk: localhost:2181(CONNECTED) 2] getAcl /hadoop
  'world,'anyone   #world方式对所有用户进行授权
  : cdrwa          #增、删、改、查、管理
  [zk: localhost:2181(CONNECTED) 3] 
  ```

- IP 授权模式

  命令

  ```java
  #需要两台机器来进行连接 192.168.60.129  192.168.60.130 
  #使用 192.168.60.129  登录zookeeper
  zkCli.sh -server 192.168.60.130
  #使用本机  192.168.60.130 zookeeper
  zkCli.sh -server 192.168.60.130    
  ```

- Auth授权模式

  命令

  ```xml
  addauth digest <user>:<password> #添加认证用户
  setAcl <path>auth:<user>:<acl>
  ```

  案例

```xml
[zk: localhost:2181(CONNECTED) 0] create /hadoop3 "hadoop3"
Created /hadoop3
[zk: localhost:2181(CONNECTED) 1] getAcl /hadoop3
'world,'anyone
: cdrwa
[zk: localhost:2181(CONNECTED) 2] addauth digest tyx:123
[zk: localhost:2181(CONNECTED) 3] setAcl /hadoop3 auth:tyx:cdrwa
cZxid = 0x16
ctime = Thu May 14 20:29:34 CST 2020
mZxid = 0x16
mtime = Thu May 14 20:29:34 CST 2020
pZxid = 0x16
cversion = 0
dataVersion = 0
aclVersion = 1
ephemeralOwner = 0x0
dataLength = 7
numChildren = 0
[zk: localhost:2181(CONNECTED) 7] getAcl /hadoop3
'digest,'tyx:nSk0WYb+XoISHNhIQiQ1BGsZHjE=
: cdrwa
[zk: localhost:2181(CONNECTED) 8]
```

- Digest 授权模式

  命令

  ```xml
  setAcl <path> digest:<user>:<password>:<acl>
  ```

  这里的密码是经过SHA1及BASE64处理的密文，在SHEEL中可以通过命令计算：

  ```xml
  echo -n <user>:<password> | openssl dgst -binary -sha1 | openssl base64
  ```

  先来计算一个密文

  ```xml
  echo -n tyx:123 | openssl dgst -binary -sha1 | openssl base64
  #得到的密文
  [root@centos zookeeper-3.4.14]# echo -n tyx:123 | openssl dgst -binary -sha1 | openssl base64
  nSk0WYb+XoISHNhIQiQ1BGsZHjE=
  ```

  案例：

  ```xml
  [zk: localhost:2181(CONNECTED) 8] create /hadoop4 "hadoop4"
  Created /hadoop4
  [zk: localhost:2181(CONNECTED) 10] getAcl /hadoop4
  'world,'anyone
  : cdrwa
  //使用digest进行授权
  [zk: localhost:2181(CONNECTED) 11] setAcl /hadoop4 digest:tyx:nSk0WYb+XoISHNhIQiQ1BGsZHjE=:cdrwa
  
  //该节点的权限
  [zk: localhost:2181(CONNECTED) 13] getAcl /hadoop4
  'digest,'tyx:nSk0WYb+XoISHNhIQiQ1BGsZHjE=
  : cdrwa
  //没有权限
  [zk: localhost:2181(CONNECTED) 0] get /hadoop4
  Authentication is not valid : /hadoop4
  //添加授权用户
  [zk: localhost:2181(CONNECTED) 1] addauth digest tyx:123
  [zk: localhost:2181(CONNECTED) 2] get /hadoop4
  hadoop4
  cZxid = 0x19
  ctime = Thu May 14 21:12:46 CST 2020
  mZxid = 0x19
  mtime = Thu May 14 21:12:46 CST 2020
  pZxid = 0x19
  cversion = 0
  dataVersion = 0
  aclVersion = 1
  ephemeralOwner = 0x0
  dataLength = 7
  numChildren = 0
  ```

  

- 多种密室授权：

  同一个节点可以同时使用多种模式授权

  ```xml
  [zk: localhost:2181(CONNECTED) 8] create /hadoop4 "hadoop4"
  Created /hadoop4
  //添加认证用户
  [zk: localhost:2181(CONNECTED) 8] addauth digest itcast:123456
  [zk: localhost:2181(CONNECTED) 8] setAcl /hadoop4 ip:192.168.60.129:cdrwa,auth:tyx:123:cdrwa,digest:tyx:nSk0WYb+XoISHNhIQiQ1BGsZHjE=:cdrwa
  ```

  

### acl 超级管理员

zookeeper的权限管理模式有一种叫做super，该模式提供一个超管，可以方阿斌的访问任何权限的节点

假设这个超管是：super：admin，需要先为超管生成密码的密文

```xml
echo -n super:admin | openssl dgst -binary -sha1 | openssl base64
```

那么打开zookeeper目录下的/bin/zkServer.sh 服务器脚本，找到如下一行：

![image-20200514212640310](F:/sinomatrix/%E6%96%87%E6%A1%A3/golang/Zookeeper%E8%AF%A6%E7%BB%86%E6%95%99%E7%A8%8B/images/image-20200514212640310.png)

之后启动zookeeper，输入如下的命令添加权限

```bash
addauth digest super:admin  #添加认证用户
```




## 未完待续






