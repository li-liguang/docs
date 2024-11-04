# 安装nginx-ingress-controller

## 准备镜像

需要两个镜像：

```text
k8s.gcr.io/ingress-nginx/controller:v1.2.0
k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1
```

如果镜像无法下载，则需要更换到阿里云镜像库下载：

```bash
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.2.0
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1
# 重新打标签
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.2.0 k8s.gcr.io/ingress-nginx/controller:v1.2.0
docker tag registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1 k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1
# 删除阿里云镜像
docker image rm registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.2.0
docker image rm registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1
```

## 下载yaml文件

```bash
wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/baremetal/deploy.yaml
```

## 修改yaml文件

下载下来的deploy.yaml文件中，指定的镜像有hash校验，由于我们是从阿里云下载的，hash值与原镜像不同，所以需要将yaml中的hash256值去掉。例如：

```text
image: k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1@sha256:64d8c73dca984af206adf9d6d7e46aa550362b1d7a01f3a0a91b20cc67868660

改为：
image: k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1
```

## 安装

```bash
kubectl apply -f deploy.yaml
```



```bash
[root@master ~]# kubectl get pod -n ingress-nginx
NAME                                        READY   STATUS      RESTARTS       AGE
ingress-nginx-admission-create--1-qzd6q     0/1     Completed   0              16h
ingress-nginx-admission-patch--1-bjshf      0/1     Completed   0              16h
ingress-nginx-controller-7dd76d4cf7-9l2bz   1/1     Running     1 (107s ago)   16h

[root@master ~]# kubectl get svc -n ingress-nginx
NAME                                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)                      AGE
ingress-nginx-controller             NodePort    10.98.134.213   <none>        80:32400/TCP,443:31962/TCP   16h
ingress-nginx-controller-admission   ClusterIP   10.102.7.116    <none>        443/TCP                      16h
```

