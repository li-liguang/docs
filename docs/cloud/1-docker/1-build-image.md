---
id: build-image
title: 制作docker镜像
sidebar_label: 制作docker镜像
---

1. 首先，安装docker-desktop

下载链接[Docker Desktop for Windows by Docker | Docker Hub](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

1.1 windows下安装docker-desktop

`安装步骤：`

(1) 双击Docker Desktop Installer.exe运行安装程序。

(2) 如果尚未下载安装程序（Docker Desktop Installer.exe），则可以从Docker Hub中获取它。
 
(3) 按照安装向导上的说明接受许可证，授权安装程序，然后继续安装。

(4)出现提示时，请在安装过程中使用您的系统密码授权Docker Desktop Installer。 需要特权访问才能安装网络组件，到Docker应用程序的链接以及管理Hyper-V VM。

(5)在安装完成对话框上单击完成，然后启动Docker Desktop应用程序。

`启动Docker Desktop：`

Docker Desktop在安装后不会自动启动。 要启动Docker Desktop，我们可以搜索Docker，然后在搜索结果中选择Docker Desktop。或者桌面有快捷方式，可以从快捷方式启动。

我们可以创建docker账户，然后用docker账户登录docker desktop。如果是本地打包，不上传Docker Hub，可以不登录。

`使用Docker Desktop：`

可以打开一个cmd窗口或者power shell。执行命令 docker --version。
```bash
Docker version 20.10.11, build dea9396
```

2. 制作镜像

(1) 新建一个文件夹，比如D:/docker/sso。

(2) 在一个空目录下，新建一个名为 Dockerfile 文件。Dockerfile 是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。

```bash
#从tomcat构建镜像，tomcat版本是8.0.33
FROM tomcat:8.0.33
#构建者
MAINTAINER lc

#将target下的xx.war拷贝到/usr/local/tomcat/webapps/下
ADD sso.war /usr/local/tomcat/webapps/

#配置端口号
EXPOSE 8080
#设置等待
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait
RUN chmod +x /wait

#时区设置
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

CMD /wait
#设置启动命令
ENTRYPOINT ["/usr/local/tomcat/bin/catalina.sh","run"]
```
(3) 把构建的内容复制到此目录下。比如打sso的镜像，就把sso.war复制到D:/docker/sso下。

(4) 执行docker build命令开始构建镜像。

```bash
docker build -t sso:1.6.39 .
```
说明：1.6.39是版本号。最后的 `.` 代表本次执行的上下文路径。

上下文路径，是指 docker 在构建镜像，有时候想要使用到本机的文件（比如复制），docker build 命令得知这个路径后，会将路径下的所有内容打包。

上下文路径下不要放无用的文件，因为会一起打包发送给 docker 引擎，如果文件过多会造成过程缓慢。

(5) 执行docker images查看镜像。

```bash
docker images
#看到下面的结果，就说明镜像构建成功
sso      1.6.39         4319433e7a2c   5 years ago     408MB
```
(6) 运行镜像。

```bash
docker run  --env redis1.sinomatrix.sinosoft.com=redisIP:port --env zk1.sinomatrix.sinosoft.com=zookeeper://ip:port --name sso -d sso:1.6.39 -p 8081:8081
#启动成功，输出
bf664c054f17ee4802b25a0fbc764e2ba26b3f2cf1f070ec403f60a3f488c5a5
```

(7) 执行命令docker ps，列出窗口列表。

```bash
bf6-6bc5e4a6a101_569
bf664c054f17   sso:1.6.39     "/usr/local/tomcat/b…"   2 minutes ago    Up 2 minutes    8080-8081/tcp       sso
```



