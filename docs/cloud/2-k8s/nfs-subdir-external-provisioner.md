---
id: nfs-subdir-external-provisioner
title: 创建外部NFS存储类
sidebar_label: 创建外部NFS存储类
---

# 创建外部NFS存储类

:::info 前置条件
 1. 已经有准备好的NFS服务器
 2. Kubernetes集群可连接到NFS服务器
 3. 集群所有节点均需要安装NFS客户端程序
:::

`StorageClass`官方文档：https://kubernetes.io/zh/docs/concepts/storage/storage-classes/#provisioner

`Kubernetes`内部制备器（`Provisioner`）中不包括`NFS`，因此要使用`NFS`做存储类，需要引入外部制备器。

NFS制备器git仓库地址：https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner.git

## 创建制备器

若使用`Helm`安装，则参见仓库文档。或者参考[这个文档](https://ye3cx8n2gv.feishu.cn/docs/doccn2mKgwksWJz8nEoghnPKLYP#ljoQg5)。

将代码拉下来后，需要用到的文件，都在**deploy**文件夹下。

```folder
deploy
   |-- rbac.yaml
   |-- deployment.yaml
   |-- class.yaml
   |-- test-claim.yaml
   |-- test-pod.yaml
```

### 1. 修改配置

- 修改命名空间（namespace）【可选】

若想要修改命名空间为自己创建的命名空间，则需要修改文件`rbac.yaml`和`deployment.yaml`，找到文件中的`namespace`配置，改为自己想要的值即可。

```bash
sed -i'' "s/namespace:.*/namespace: $NAMESPACE/g" ./deploy/rbac.yaml ./deploy/deployment.yaml
```

- 修改NFS连接信息

需要修改制备器连接的NFS服务器的信息，信息记录在`deployment.yaml`文件中。

```yaml
.....
          env:
            - name: PROVISIONER_NAME
              value: k8s-sigs.io/nfs-subdir-external-provisioner
            - name: NFS_SERVER
              value: <YOUR NFS SERVER HOSTNAME>
            - name: NFS_PATH
              value: ${YOUR NFS SERVER PATH}
      volumes:
        - name: nfs-client-root
          nfs:
            server: <YOUR NFS SERVER HOSTNAME>
            path: <YOUR NFS SERVER PATH>
```

将NFS服务地址，以及NFS目录配置到文件中相应位置（2处）。

:::info
如果您想将上面的`PROVISIONER_NAME `名称`k8s-sigs.io/nfs-subdir-external-provisioner`改为其他名称，比如`myorg/nfs-storage`，请记住还要在下面的存储类定义中更改`provisioner`名称。
:::

- 修改镜像地址

制备器需要拉取`k8s.gcr.io/sig-storage/nfs-subdir-external-provisioner:v4.0.2`镜像。由于网络原因可能导致拉取失败，可将镜像地址修改为`dyrnq/nfs-subdir-external-provisioner:v4.0.2`。

### 2. 创建

```bash
kubectl apply -f rbac.yaml -f deployment.yaml
```

### 3. 测试

创建完成之后，可以执行以下命令，测试制备器是否可用

```bash
kubectl apply -f class.yaml -f test-claim.yaml -f test-pod.yaml
```

查看NFS服务器目录下，是否有新建的文件夹，及一个`SUCCESS`文件。如果有，则表示制备器已经连接到NFS服务器，并且可用。

## 创建自己的`StorageClass`

创建文件`storageClass.yaml`

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name:  nfs-retain-storage
  namespace: sinomatrix
  annotations:
    storageclass.kubernetes.io/is-default-class: "false"  ## 是否设置为默认的存储类
# 外部NFS存储制备器
provisioner: k8s-sigs.io/nfs-subdir-external-provisioner
# provisioner的参数
parameters: 
  # 保留创建的nfs目录（删除:delete）
  onDelete: retain
  # 自动创建的目录名称模板
  pathPattern: "${.PVC.namespace}-${.PVC.name}"
# 创建PV的默认回收策略
reclaimPolicy: Retain
# 是否允许卷扩展
allowVolumeExpansion: true
```

:::warning
 provisioner：为制备器的名称，对应制备器`deployment.yaml`文件中`PROVISIONER_NAME`的值。
:::

执行以下命令创建

```bash
kubectl apply -f storageClass.yaml
```

## 查看已经创建的存储类

```bash
kubectl get storageclass -n sinomatrix
```

出现以下结果，即为成功

```bash
[root@master nfs]# kubectl get storageclass -n sinomatrix
NAME                 PROVISIONER                                   RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE
nfs-retain-storage   k8s-sigs.io/nfs-subdir-external-provisioner   Retain          Immediate           true                   39m
```

## 使用存储类

在存储卷申领（PVC）中，指定如下属性

```yaml
spec:
	# 指定存储类NFS
	storageClassName: nfs-retain-storage
```

:::info
 - `storageClassName`对应自己创建的`storageClass`的名称
 - 如果在创建`StorageClass`时，指定为**默认存储类**，则不需要再PVC中使用`storageClassName`指定
:::