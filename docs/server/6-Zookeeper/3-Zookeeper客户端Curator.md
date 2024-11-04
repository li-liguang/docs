---
id: curator
title: Curator
sidebar_label: Zookeeper客户端Curator
---

curator是Netflix公司开源的一个zookeeper客户端，后捐赠给apache，curator框架在走哦科普日原生API接口上进行了包装，解决了很多zookeeper客户端非底层的细节开发。提供了zookeeper各种应用场景(比如：分布式锁服务，集群领导选举，共享计数器，缓存机制，分布式队列等)的抽象封装，实现了Fluent风格的API接口，是最好用，最流行的zookeeper的客户端。

​	原生zookeeperAPI的不足：

- 连接对象异步创建，需要开发人员自行编码等待。

- 连接没有自动重连超时机制

- watcher一次注册生效一次

- 不支持递归创建树形节点

  curator特点：

- 解决session会话超时重连

- watche反复注册

- 简化开发api

- 遵循Fluent风格的API

- 提供了分布式锁服务，共享计数器，缓存机制等机制

> 代码仓库：https://gitee.com/li-liguang/zk-client-curator

> 添加依赖：
>
> ```xml
> <dependency>
>     <groupId>org.apache.curator</groupId>
>     <artifactId>curator-framework</artifactId>
>     <version>5.3.0</version>
> </dependency>
> ```

## 连接Zookeeper

```java
@Bean
public CuratorFramework curatorFramework() throws Exception {
    CuratorFramework curatorFramework =
        CuratorFrameworkFactory.builder()
        .connectString("192.168.90.127:2188")
        // session超时
        .sessionTimeoutMs(5000)
        // 连接超时
        .connectionTimeoutMs(20000)
        // 重试策略
        .retryPolicy(new ExponentialBackoffRetry(3000, 5))
        .build();
    // 开启连接
    curatorFramework.start();
    // 阻塞，等待连接成功
    curatorFramework.blockUntilConnected();
    return curatorFramework;
}
```

## 创建节点

```java
String node =
    client
    .create()
    // 自动创建父节点
    .creatingParentsIfNeeded()
    // 持久性节点（断开链接，不会自动删除节点）
    .withMode(CreateMode.PERSISTENT)
    .forPath("/test/node1/node2", "data".getBytes());
```

## 删除节点

```java
client.delete().guaranteed().forPath("/test/node1/node2");
```

> guaranteed：解决了在服务器上操作可能成功，但在响应成功返回到客户端之前发生连接失败的边缘情况。

## 获取节点数据

```java
Stat stat = new Stat();
byte[] bytes = client.getData().storingStatIn(stat).forPath("/test/node1/node2");
System.out.println("获取的数据：" + new String(bytes));
System.out.println("节点版本号：" + stat.getVersion());
```

## 更新节点数据

```java
Stat stat = client.setData().forPath("/test/node1/node2", "testData".getBytes());
System.out.println("节点版本号：" + stat.getVersion());
```

## 获取子节点

```java
List<String> pathList = client.getChildren().forPath("/test");
for (String node: pathList) {
	System.out.println(node);   
}
```



## ACL权限

- 获取节点权限

```java
@Test
public void getAcl() throws Exception {
    List<ACL> acls = client.getACL().forPath(NODE);
    System.out.println(new Gson().toJson(acls));
}
```

- 设置节点权限

```java
  /**
   * 授权模式和授权对象 <br>
   * world 只有一个用户：anyone，代表登录zokeeper所有人（默认） <br>
   * ip 对客户端使用IP地址认证 <br>
   * auth 使用已添加认证的用户认证 <br>
   * digest 使用“用户名:密码”方式认证
   */
  @Test
  public void setAcl() throws Exception {
    List<ACL> aclList = new ArrayList<>();
    // 五种权限类型(Perms)：create(c)、delete(d)、read(r)、writer(w)、admin(a)
    // 授权模式和授权对象
    // Id id = new Id("world", "anyone:cdrwa");
    // Id id = new Id("ip", "192.168.12.100:cdrwa");
    // Id id = new Id("auth", "username");
    // digest密码是经过SHA1及BASE64处理的密文
    // Id id = new Id("digest", "username:qlzQzCLKhBROghkooLvb+Mlwv4A=");
    ACL acl = new ACL(ZooDefs.Perms.ALL, ZooDefs.Ids.ANYONE_ID_UNSAFE);
    aclList.add(acl);
    client.setACL().withACL(aclList).forPath(NODE);
  }
```





## 监听器

使用监听器需要更换Curator依赖：

```xml
<dependency>
    <groupId>org.apache.curator</groupId>
    <artifactId>curator-recipes</artifactId>
    <version>5.3.0</version>
</dependency>
```



### CuratorCacheListener

Curator通过CuratorCache缓存添加监听程序，监听指定node（/rootNode）及子孙节点的变化。

```java
@Bean
public CuratorCache curatorCache(CuratorFramework client) {
    CuratorCache cache = CuratorCache.build(client, "/rootNode");
    // 启动CuratorCache
    cache.start();
    return cache;
}
```

添加监听程序：

```java
// CuratorCache cache = CuratorCache.build(client, "/rootNode");
// 创建一系列CuratorCache监听器，都是通过lambda表达式指定
CuratorCacheListener listener =
    CuratorCacheListener.builder()
    // 初始化完成时调用
    .forInitialized(() -> System.out.println("[forInitialized] : Cache initialized"))
    // 添加或更改缓存中的数据时调用
    .forCreatesAndChanges((oldNode, node) -> System.out.print("[forCreatesAndChanges]"))
    // 添加缓存中的数据时调用
    .forCreates(childData -> System.out.printf("[forCreates]"))
    // 更改缓存中的数据时调用
    .forChanges((oldNode, node) -> System.out.printf("[forChanges]"))
    // 删除缓存中的数据时调用
    .forDeletes(childData -> System.out.printf("[forDeletes]"))
    // 添加、更改或删除缓存中的数据时调用
    .forAll((type, oldData, data) -> System.out.printf("[forAll]"))
    .build();

// 将监听器注册或添加到cache中
cache.listenable().addListener(listener);
// 启动CuratorCache
// cache.start();
```

### 通过getData一次性监听

```java
public void setListenerOne(String node) throws Exception {
    // 注册观察者，当节点变动时触发
    byte[] data =
        client
            .getData()
        	// 注册观察者
            .usingWatcher((Watcher) event -> System.out.println("监听器 : " + event))
            .forPath(node);
    System.out.println("节点数据: " + new String(data));
  }
```



