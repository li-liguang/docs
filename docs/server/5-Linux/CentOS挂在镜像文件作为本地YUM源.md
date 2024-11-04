# CentOS挂在镜像文件作为本地YUM源

> + 以下步骤中的目录仅为示例，可自定义需要的目录

### 上传镜像文件CentOS-7-x86_64-DVD-1708.iso到服务器路径`soft`下

```shell
#示例
mkdir /soft
```

### 创建镜像文件要挂载的目录

```shell
#示例
mkdir /mnt/iso
```

### 将iso文件挂载到创建好的目录下

```shell
#挂载,第一个目录为iso文件，第二个目录为要挂载到的目录
mount -t iso9660 /soft/CentOS-7-x86_64-DVD-1708.iso /mnt/iso
```

如果显示以下信息表示挂载成功

```shell
mount: /dev/loop0 is write-protected,mounting read-only
```

### 备份默认YUM源

```shell
cd /etc/yum.repos.d/
#创建备份文件夹
mkdir ./bak
#将默认YUM源文件移入备份文件夹
mv *.repo bak/
```

### 编写repo文件并指向镜像的挂载目录

```shell
cd /etc/yum.repos.d/bak
#拷贝一份原来的CentOS-Media.repo文件
cp CentOS-Media.repo ../CentOS-Media.repo
#打开文件，修改文件文件内容
vim ../CentOS-Media.repo
#将enabled=0改为enabled=1
#将baseurl改为挂载路径：baseurl=file:///mnt/iso/
#修改完成后保存退出
```

### 清理YUM缓存

```shell
yum clean all
```

至此挂载镜像文件作为本地YUM源完成。

