# Linux安装MySql详细步骤

> mysql下载地址：https://dev.mysql.com/downloads/mysql/5.7.html#downloads
>
> mysql版本：mysql-5.7.26-linux-glibc2.12-x86_64.tar.gz
>
> mysql安装位置：/software/mysql
>
> 数据库文件数据位置：/data/mysql

## 安装步骤

### 1.创建路径

```shell
#mkdir /software/
#mkdir /data/mysql
```

### 2.上传安装包并解压

将安装文件（mysql-5.7.26-linux-glibc2.12-x86_64.tar.gz）上传到路径`/software/`下，并解压

```shell
#cd /software/
#tar -zxvf mysql-5.7.26-linux-glibc2.12-x86_64.tar.gz
```

修改解压后的文件夹名：

```shell
#mv /software/mysql-5.7.26-linux-glibc2.12-x86_64/ /software/mysql
```

### 3.创建服务器mysql用户及群组

```shell
#groupadd mysql
#useradd -g mysql mysql
##关联mysql用户到mysql用户组中
#chown -R mysql:mysql /software/mysql/
#chown -R mysql:mysql /data/mysql/
#chown -R mysql /software/mysql/
#chown -R mysql /data/mysql/
```

### 4.修改文件夹权限

```shell
#chmod -R 755 /software/mysql/
```

### 5.安装libaio依赖包

```shell
##检查是否已经安装
#yum search libaio
##如果没有安装，使用下面命令安装
#yum install libaio
```

### 6.初始化mysql

```shell
#cd /software/mysql/bin
#./mysqld --user=mysql --basedir=/software/mysql --datadir=/data/mysql --initialize
```

* 在执行初始化命令后，注意一行内容：

  ```shell
  [Note] A temporary password is generated for root@localhost:o*s#ggh)F4Ck
  ```

  root@localhost：后面的字符串（o*s#ggh)F4Ck）是数据库root用户的初始化密码

* 如果初始化报错如下：

  ```shell
  error while loading shared libraries:libnuma.so.1:cannot open shared objec
  ```

  是因为libnuma安装的是32位的，我们这里需要64位的，此时执行以下命令后，重新初始化即可：

  ```shell
  #yum install numactl.x86_64
  ```

### 7.修改mysql配置文件

修改配置文件中的路径

```shell
#vim /software/mysql/support-files/mysql.server
```

修改前：

```shell
if test -z "$basedir"
then
basedir=/usr/local/mysql
bindir=/usr/local/mysql/bin
if test -z "$datadir"
then
datadir=/usr/local/mysql/data
fi
sbindir=/usr/local/mysql/bin
libexecdir=/usr/local/mysql/bin
else
bindir="$basedir/bin"
if test -z "$datadir"
then
datadir="$basedir/data"
fi
sbindir="$basedir/sbin"
libexecdir="$basedir/libexec"
fi
```

修改后：

```shell
if test -z "$basedir"
then
basedir=/software/mysql
bindir=/software/mysql/bin
if test -z "$datadir"
then
datadir=/data/mysql
fi
sbindir=/software/mysql/bin
libexecdir=/software/mysql/bin
else
bindir="$basedir/bin"
if test -z "$datadir"
then
datadir="$basedir/data"
fi
sbindir="$basedir/sbin"
libexecdir="$basedir/libexec"
fi
```

保存并退出

```shell
#cp /software/mysql/support-files/mysql.server  /etc/init.d/mysqld
#chmod 755 /etc/init.d/mysqld
```

### 8.修改系统配置文件

```shell
#vim /etc/my.cnf
```

将一下内容复制替换原本的内容，然后保存退出

```shell
[client]
no-beep
socket =/software/mysql/mysql.sock
# pipe
# socket=0.0
port=3306
[mysql]
default-character-set=utf8
[mysqld]
basedir=/software/mysql
datadir=/data/mysql
port=3306
pid-file=/software/mysql/mysqld.pid
#skip-grant-tables
skip-name-resolve
socket = /software/mysql/mysql.sock
character-set-server=utf8
default-storage-engine=INNODB
explicit_defaults_for_timestamp = true
# Server Id.
server-id=1
max_connections=2000
query_cache_size=0
table_open_cache=2000
tmp_table_size=246M
thread_cache_size=300
#限定用于每个数据库线程的栈大小。默认设置足以满足大多数应用
thread_stack = 192k
key_buffer_size=512M
read_buffer_size=4M
read_rnd_buffer_size=32M
innodb_data_home_dir = /data/mysql
innodb_flush_log_at_trx_commit=0
innodb_log_buffer_size=16M
innodb_buffer_pool_size=256M
innodb_log_file_size=128M
innodb_thread_concurrency=128
innodb_autoextend_increment=1000
innodb_buffer_pool_instances=8
innodb_concurrency_tickets=5000
innodb_old_blocks_time=1000
innodb_open_files=300
innodb_stats_on_metadata=0
innodb_file_per_table=1
innodb_checksum_algorithm=0
back_log=80
flush_time=0
join_buffer_size=128M
max_allowed_packet=1024M
max_connect_errors=2000
open_files_limit=4161
query_cache_type=0
sort_buffer_size=32M
table_definition_cache=1400
binlog_row_event_max_size=8K
sync_master_info=10000
sync_relay_log=10000
sync_relay_log_info=10000
#批量插入数据缓存大小，可以有效提高插入效率，默认为8M
bulk_insert_buffer_size = 64M
interactive_timeout = 120
wait_timeout = 120
log-bin-trust-function-creators=1
sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES

#
# include all files from the config directory
#
!includedir /etc/my.cnf.d
```

### 9.启动mysql

```shell
#/etc/init.d/mysqld start
```

新版本的安装包会报错，报错内容如下：

```shell
Starting MySQL.Logging to '/data/mysql/SZY.err'.
2018-07-02T10:09:03.779928Z mysqld_safe The file /usr/local/mysql/bin/mysqld
does not exist or is not executable. Please cd to the mysql installation
directory and restart this script from there as follows:
./bin/mysqld_safe&
See http://dev.mysql.com/doc/mysql/en/mysqld-safe.html for more information
ERROR! The server quit without updating PID file (/software/mysql/mysqld.pid).
```

因为新版本的mysql安全启动安装包只认`/usr/local/mysql`这个路径。

解决方法：

* 1.建立软连接

  * ```shell
    #cd /usr/local/mysql
    #ln -s /sofware/mysql/bin/myslqd mysqld
    ```

* 2.修改`mysqld_safe`文件

  ```shell
  # vim /software/mysql/bin/mysqld_safe
  ```

  将文件中所有的`/usr/local/mysql`改为`/software/mysql`，保存后退出。

### 10.登录mysql

```shell
#/software/mysql/bin/mysql -u root –p
```

输入临时密码（第6步初始化时生成的密码）

### 11.修改root初始化密码

```sql
set password=password('root');

grant all privileges on *.* to root@'%' identified by 'root';

flush privileges;
```

修改完成之后，`root`用户的新密码是`root`

### 12.创建mysql用户

```sql
create user 'tjxmim'@'%' identified by 'password';
```

删除用户

```sql
DROP USER 'tjxmim'@'%';

-- 创建数据库
CREATE DATABASE IF NOT EXISTS tjxmimdb
-- 设置字符集
DEFAULT CHARACTER SET utf8
-- 设置校对规则
DEFAULT COLLATE utf8_general_ci;


--授予用户test通过外网IP对数据库“testdb”的全部权限
grant all privileges on tjxmimdb.* to 'tjxmim'@'%' identified by 'password';  
--刷新权限
flush privileges;

--授予用户“test”通过外网IP对于该数据库“testdb”中表的创建、修改、删除权限,以及表数据的增删查改权限
grant create,alter,drop,select,insert,update,delete on tjxmimdb.* to tjxmim@'%';	
```

