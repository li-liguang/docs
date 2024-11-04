---
id: build-redis-rpm
title: 制作Redis RPM软件包
sidebar_label: 制作Redis RPM软件包
---

首先[准备并学习 rpmbuild](./build-rpm-package.md)。

第二步，定义 `redis.spec` 文件：

```spec title="~/redis.spec"
# redis 版本，推荐在三个版本中选择：6.0.6（或者最新的 redis 版本）、5.0.9、3.2.1
%global _version 6.0.6

Name: redis
Version: %{_version}
Release: 1%{?dist}
Summary: A persistent key-value database

Group: Application/Databases
License: BSD
URL: https://redis.io
Source0: http://download.redis.io/releases/redis-%{_version}.tar.gz

%description
Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.

BuildRoot: %(mktemp -ud %{_tmppath}/build/%{name}-%{version}-%{release}-XXXXXX)

%prep
%setup -q

%build
make %{?_smp_mflags}

%install
make install PREFIX=${RPM_BUILD_ROOT}/usr/local

%files
/usr/local/bin/redis-benchmark
/usr/local/bin/redis-check-aof
/usr/local/bin/redis-check-rdb
/usr/local/bin/redis-cli
/usr/local/bin/redis-sentinel
/usr/local/bin/redis-server

%doc

%changelog
```

第三步，在对等的 Linux 服务器上运行 rpmbuild 生成 redis rpm 包：

```bash
$ rpmbuild -ba redis.conf
```

:::note

编译 redis 6.0 以上版本的源码，需要 5.0+ 的 gcc。以 centos 6.x 为例，通过下面的命令行升级到 5.0 以上的 gcc：

```bash
$ sudo yum install centos-release-scl
$ sudo yum install devtoolset-7
$ scl enable devtoolset-7 bash
```

:::

命令执行完之后，会在`~/rpmbuild`中包含以下 redis.rpm 包：

```bash
# 安装包
/root/rpmbuild/RPMS/x86_64/redis-6.0.6-1.el7.centos.x86_64.rpm
# 源码包
/root/rpmbuild/SRPMS/redis-6.0.6-1.el7.centos.src.rpm
```
