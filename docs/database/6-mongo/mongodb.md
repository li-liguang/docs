---
id: mongo
title: mongodb
sidebar_label: mongodb
---

# mongodb

## 启动

### 方式一

命令行参数方式启动服务

```sh
./bin/mongod --dbpath=../data/ --port 17072
```

--dbpath指定数据文件存放目录；

--port指定端口号（默认27017）

### 方式二

命令行配置文件方式

```sh
./bin/mongod -f mongod.conf
./bin/mongod --config congod.conf
```

