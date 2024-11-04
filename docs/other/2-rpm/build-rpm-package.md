---
id: build-rpm-package
title: 制作 RPM 软件包
sidebar_label: 制作 RPM 软件包
---

本篇文章将引导您使用 `rpmbuild` 构建一个输出 Hello World 的 RPM 软件包。

## 安装

### 安装软件

首先需要安装`rpmbuild`软件，如下所示：

```bash
$ sudo yum install rpm-build
```

### rpmbuild 配置

推荐在家目录（`~`）中创建一个`.rpmmacros`文件，存放`rpmbuild`软件的配置。`%_topdir`配置告诉`rpmbuild`在构建您的 rpm 包时去什么地方找到必要的文件。我们可以在`~/.rpmmacros`中写入以下配置：

```bash
%_topdir    /root/rpmbuild
```

此配置是告知`rpmbuild`软件在`~/rpmbuild`目录中查找制作 rpm 包需要的文件。

### 初始化打包目录

采用`rpmbuild`软件制作 rpm 包，需要在`%_topdir`目录中放入打包需要的配置、源码、依赖包等文件。我们可以通过以下命令行手动初始化此目录：

```bash
$ mkdir -p ~/rpmbuild/{BUILD,BUILDROOT,RPMS,SOURCES,SPECS,SRPMS}
```

---

## 我们的“Hello World”程序

在家目录中创建我们的`Hello World`程序，程序文件结构如下：

```
~/helloworld-1.0
|__ main.c
|__ Makefile
```

代码如下：

```c title="~/helloworld-1.0/main.c"
#include <stdio.h>
int main (int argc, char *argv[]) {
  printf("你好，世界！\n");
  return 0;
}
```

```makefile title="~/helloworld-1.0/Makefile"
DESTDIR ?=
PREFIX ?= /usr/local


helloworld:
	gcc main.c -o helloworld

install: helloworld
	install -m 0755 -d $(DESTDIR)$(PREFIX)/bin
	install -m 0755 helloworld $(DESTDIR)$(PREFIX)/bin
```

### 编译并测试

在将程序制作成 rpm 包之前，需要测试程序是否正常。在测试程序之前需要编译程序源码为可执行文件。

我们需要使用`gcc`编译程序源码，并生成可执行文件，然后将可执行文件安装到`/usr/local/bin`中。我们运行生成的可执行文件，即可验证程序是否正常运行。

首先安装`gcc` 和 `make`：

```bash
$ yum install -y gcc gcc-c++ make
```

然后在`~/helloworld-1.0`目录中执行`make`命令行，编译源码并生成可执行文件`helloworld`：

```bash
$ cd ~/helloworld-1.0
$ make
```

然后执行`make install`，将`helloworld`可执行文件安装到`/usr/local/bin`目录下：

```bash
$ sudo make install
```

最后在命令行中运行`helloworld`：

```bash
$ helloworld
```

它会在控制台输出：

```
你好，世界！
```

测试完成后，应清除构建文件：

```bash
$ sudo rm -rf ~/helloworld-1.0/helloworld
$ sudo rm -rf /usr/local/bin/helloworld
```

---

## 打包我们的程序

现在，我们验证程序一切正常，让我们为其创建一个 RPM 程序包吧。

### 1. 压缩源文件

```bash
$ tar -czvf helloworld-1.0.tar.gz helloworld-1.0/
```

压缩包名称在下一个步骤中会用到。

### 2. 准备源码目录

构建工具`rpmbuild`可以使用从 URL 或者本地文件获取到的源码。本示例中，我们使用本地系统中的压缩包源码文件。

`rpmbuild`会从`~/rpmbuild/SOURCES`目录中检索源码文件。所以，我们将源码压缩包放到`SOURCES`目录下：

```bash
$ cp helloworld-1.0.tar.gz ~/rpmbuild/SOURCES
```

### 3. 创建描述文件

描述（`SPEC`）文件定义了`rpmbuild`如何构建和打包软件。我们的软件是一个 C 程序，必须将其编译并复制到相应的目录中以进行安装。

我们在`~`目录下创建`helloworld.spec`文件，并添加软件打包的描述信息，如下所示：

```makefile title="~/helloworld.spec"
Name: helloworld
Version: 1.0
Release: 1%{?dist}
Summary: 一个世界你好的程序

License: GPLv3+
Packager: 打包人
Vendor: 软件开发者的名字，发行商或打包组织的信息
Source0: helloworld-1.0.tar.gz

Requires(post): info
Requires(preun): info

%description
一个世界你好的小程序，用来演示rpmbuild的用法

%prep
%setup

%build
make PREFIX=/usr %{?_smp_mflags}

%install
make PREFIX=/usr DESTDIR=%{?buildroot} install

%clean
rm -rf %{buildroot}

%files
%{_bindir}/helloworld
```

> 可以打开[RPM 描述文件](./rpm-spec.md)，学习更多 SPEC 文件的语法。

### 4. 使用 rpmbuild 构建 RPM 包

现在你可以使用`rpmbuild`和`helloworld.spec`文件，构建 RPM 包了：

```bash
$ rpmbuild -ba helloworld.spec
```

`-ba` 标志将构建源文件 RPM 包（.src.rpm）和二进制 RPM 包（.rpm）。

您将在控制台看到一堆有用的输出。在控制台的最后，`rpmbuild`会列出它创建的文件：

```
Wrote: /root/rpmbuild/SRPMS/helloworld-1.0-1.el7.src.rpm
Wrote: /root/rpmbuild/RPMS/x86_64/helloworld-1.0-1.el7.x86_64.rpm
```

现在您可以拷贝这些 rpm 文件到其他的 Linux 中使用`rpm`程序安装此应用。

---

## 安装 RPM 软件包

将编译得到的 rpm 包, 拷贝到目标机器（例如拷贝到`~/helloworld-1.0-1.el7.x86_64.rpm`），然后安装：

```bash
$ rpm -ivh ~/helloworld-1.0-1.el7.x86_64.rpm
```

安装完毕后，执行以下命令行以验证软件包正常工作：

```bash
$ /usr/bin/helloworld
```

如果一切顺利，控制台将会输出：

```
你好，世界！
```

恭喜您，学会了制作 RPM 软件包的技能。

---

## 下一步

在日常工作中，经常遇到打包服务器是 x86 架构的，但是内网服务器却不是 x86 CPU 架构的。这种情况下，我们需要[制作多架构的 RPM 软件包](./build-multi-architectural-rpm-packages.md)。
