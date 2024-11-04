---
id: build-multi-architectural-rpm-packages
title: 制作多架构 RPM 软件包
sidebar_label: 制作多架构 RPM 软件包
---

经常我们需要为多种 CPU 架构提供 RPM 软件包，而我们不可能找到各种 CPU 架构的服务器，然后挨个制作 RPM 软件包。本篇文章以上一篇文章的 Hello World 程序介绍如何制作多架构 RPM 软件包。

## 静态链接

GCC 编译 C 程序，默认采用动态链接依赖的库，但是 Hello World 程序依赖`glic`，而不同版本、不同厂商的 Linux 操作系统包含的`glic`版本不同，这样就可能导致编译后的 Hello World 程序无法在另一台 Linux 服务器上运行。我们可以采用 GCC 的静态链接，将依赖库直接加入到编译后的文件中，就可以解决问题。

是不是不太懂动态链接、静态链接？不懂也没关系，这不是本章的重点。有兴趣的可以百度补充知识点。

### gcc 静态链接配置

改动 `Makefile` 文件：

```makefile title="~/helloworld-1.0/Makefile" {5}
DESTDIR ?=
PREFIX ?= /usr/local

helloworld:
gcc main.c -static -o helloworld

install: helloworld
install -m 0755 -d $(DESTDIR)$(PREFIX)/bin
install -m 0755 helloworld $(DESTDIR)$(PREFIX)/bin

````

注意，`gcc` 命令多了 `-static` 标志。

### 安装 glic-static

静态编译需要 `glibc-static`。

redhat/centos系列安装：

```bash
yum install -y glibc-static
````

debian/ubuntu 系列安装：

```bash
sudo apt-get install libc6-dev
```

---

## 交叉编译

TODO: 敬请期待
