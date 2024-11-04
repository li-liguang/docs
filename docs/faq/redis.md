---
id: redis
title: redis常见问题
---

## 问题 1： 源码安装 redis 时报`expected specifier-qualifier-list before`错误

在源码安装执行`make`命令时，报类似下面的错误：

```bash
server.h:1051:5: 错误：expected specifier-qualifier-list before ‘_Atomic’
     _Atomic unsigned int lruclock; /* Clock for LRU eviction */
     ^
```

说明您正在编译 redis 6.0 以上版本的源码，而 gcc 版本低于 5.0。这种情况下，我们升级 gcc 即可。拿 centos 6.x 为例，说明如何升级到 5.0 以上的 gcc：

```bash
$ sudo yum install centos-release-scl
$ sudo yum install devtoolset-7
$ scl enable devtoolset-7 bash
```

然后执行`gcc --version`，查看 gcc 的版本号：

```bash
$ gcc --version

输出：
gcc (GCC) 7.3.1 20180303 (Red Hat 7.3.1-5)
Copyright (C) 2017 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

确认当前 gcc 是 7.3.1 版本。

如果您使用的 Linux 操作系统（如中标麒麟）没有新版本的 gcc 安装包，可以采用源码编译的方式安装新版本的 gcc。

## 问题 2： 哨兵模式下，从 redis 节点无法连通主 redis 节点

部署哨兵模式，在验证时，发现从 redis 节点没有同步复制主 redis 节点的数据，这种情况下，一般是由 从 redis 节点无法连通主 redis 节点导致。通过以下步骤排查问题：

1. 确认是否开启了防火墙。如果开启了防火墙，确认防火墙是否允许 `6379` 和 `26379` 端口号
2. 从节点配置中的主节点 ip、端口号和密码是否正确

   ```properties
   replicaof [主redis节点的ip] [主redis节点的端口号]
   masterauth [主redis节点的密码]
   ```

   如：

   ```properties
   replicaof 192.168.0.1 6379
   masterauth 123456
   ```

## 问题 3：哨兵模式下，自动故障转移失败

部署哨兵模式，在验证时，发现自动故障转移失败，可以通过以下步骤排查问题：

1. 确认是否开启了防火墙。如果开启了防火墙，确认防火墙是否允许 `6379` 和 `26379` 端口号
2. redis 哨兵节点的配置中的主节点 ip、端口号和密码是否正确

   ```properties
   # 监听主 redis 节点
   sentinel monitor master [主节点ip] [主节点端口号] 2
   # 主 redis 密码
   sentinel auth-pass master [主节点密码]
   ```

   如：

   ```properties
   # 监听主 redis 节点
   sentinel monitor master 192.168.0.1 6379 2
   # 哨兵节点的密码
   requirepass 123456
   # 主 redis 密码
   sentinel auth-pass master 123456
   ```

3. redis 哨兵模式要求至少部署 3 个哨兵节点才可完成 `redis` 自动故障转移。请确认是否至少部署了 3 个哨兵节点。

## 问题 4： 连接 redis 哨兵节点出现 "NOAUTH Authentication required" 错误

在部署 redis 哨兵集群时，通过 `redis-cli` 命令行连接哨兵节点，出现 "NOAUTH Authentication required" 错误，如下所示：

```bash
$ redis-cli -h 192.168.0.1 -p 26379 -a 123456 sentinel master master
(error) NOAUTH Authentication required.
```

这种情况下，一般是因为采用的是 redis 3、4、5 版本，而不是 redis 6 版本，且给 redis 哨兵配置了密码导致的。排查步骤如下：

1. 查看 redis 的版本，确认是否 redis 版本低于 6

   ```bash
   redis-server --version
   ```

2. 去掉哨兵节点配置中的 `requireauth` 配置

   ```diff title="~/redis-sentinel.conf"
     # 监听主 redis 节点
     sentinel monitor master 192.168.0.1 6379 2
   - # 哨兵节点的密码
   - requirepass 123456
     # 主 redis 密码
     sentinel auth-pass master 123456
     sentinel down-after-milliseconds master 60000
     sentinel failover-timeout master 180000
     sentinel parallel-syncs master 1
     # 后台运行
     daemonize yes
     # 关闭保护模式
     protected-mode no
   ```

3. 运行 `redis-cli` 时，去掉 `-a 哨兵节点密码` 选项，如下所示：

   ```bash
   $ redis-cli -h 192.168.0.1 -p 26379 sentinel master master
   ```
