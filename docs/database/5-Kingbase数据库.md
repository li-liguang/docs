---
id: kingbase
title: Kingbase数据库
sidebar_label: Kingbase数据库
---

# Kingbase数据库

## 表的操作

### 创建表

#### 新创建一个表

```sql
CREATE TABLE "HBXM_XXGX"."SYS_AFFIX" (
	"ID" VARCHAR(50) NOT NULL,
	"TABLE_NAME" VARCHAR(50) NULL,
	"TABLE_ID" VARCHAR(50) NULL,
	"TITLE" VARCHAR(200) NULL,
	"CRE_TIME" VARCHAR(30) NULL,
	"FILE_NAME" VARCHAR(300) NULL,
	"FILE_TYPE" VARCHAR(10) NULL,
	CONSTRAINT "SYS_AFFIX_PKEY" PRIMARY KEY ("ID")
)
```

#### 从查询结果创建新表

基本语法：

```sql
CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] table_name
    [ (column_name [, ...] ) ]
    [ WITH ( storage_parameter [= value] [, ... ] ) | WITH OIDS | WITHOUT OIDS ]
    [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]
    [ TABLESPACE tablespace_name ]
    AS query
    [ WITH [ NO ] DATA ]
```

复制一个表中的部分数据：

```sql
CREATE TABLE films_recent AS
  SELECT * FROM films WHERE date_prod >= '2002-01-01';
```

要完全地复制一个表，也可以使用`TABLE`命令的   简短形式：

```sql
CREATE TABLE films2 AS TABLE films;
```

### 增加一个字段

```sql
ALTER TABLE tablename ADD COLUMN colname varchar2(30 CHAR);
```

### 删除一个字段

```sql
ALTER TABLE tablename DROP COLUMN colname RESTRICT;
```

* <u>**参数说明**</u>：RESTRICT	如果有任何依赖对象时拒绝删除列或者约束。这是默认行为。
  					CASCADE	自动删除依赖于被删除列或约束的对象（例如引用该列的视图），并且接着删除依赖于那些对象的 所有对象

### 修改字段类型

```sql
ALTER TABLE tablename
			ALTER COLUMN colname1 TYPE varchar2(80 CHAR),
			ALTER COLUMN colname2 TYPE varchar2(100 CHAR),
			······
```

### 注释

```sql
--给表增加注释
COMMENT ON TABLE tablename IS 'This is table comment';
--移除表的注释
COMMENT ON TABLE tablename IS NULL;
--给字段增加注释
COMMENT ON COLUMN tablename.columnname IS 'This is column comment';
--移除字段注释
COMMENT ON COLUMN tablename.columnname IS NULL;
```

### BLOB字段操作

注:只能使用`SYSTEM`用户进行操作

#### 从磁盘的导出与导入

##### 导入

`blob_import(string)` 将指定的文件以blob大对象的形式导入数据库。成功返回1。

示例：

```sql
insert into "HBXM"."SYS_TEMPLATE" (ID,TITLE,CONTENT) values('ae0094a81bae4a3bafe6021a91ff45f9','人大台账模板.xlsx',blob_import('/nginx.xlsx')) ;
```

##### 导出

`blob_export(blob，string) `将blob大对象的内容导出到磁盘文件。成功返回1。

示例：

```sql
select blob_export(CONTENT, '/home/kingbase/test.docx') from "HBXM"."SYS_AFFIX";
select blob_export(CONTENT, '/home/kingbase/'||TITLE) from "HBXM"."SYS_AFFIX";
```

## 约束

### 外键约束

#### 增加外键约束

```sql
语法：
ALTER TABLE 从表 CONSTRAINT 外键约束名 FOREIGN KEY (关联字段) references 主表(主表对应字段);
示例：
ALTER TABLE SYS_RTYPE_SUB ADD CONSTRAINT FK_SYS_RESO_FK2 FOREIGN KEY (RTYPE_ID) references SYS_RTYPE(RTYPE_ID);
```

#### 删除外键约束

```sql
语法：
ALTER TABLE 从表 DROP CONSTRAINT 外键约束名;
示例：
ALTER TABLE SYS_RTYPE_SUB DROP CONSTRAINT FK_SYS_RESO_FK2;
```

## 视图

### 创建视图

`CREATE [OR REPLACE] VIEW`定义一个查询的视图。该视图不会被   物理上物质化。相反，在每一次有查询引用该视图时，视图的查询都会被运行

基本语法：

```sql
CREATE [ OR REPLACE ] [ TEMP | TEMPORARY ] [ RECURSIVE ] [ FORCE ] VIEW name 
	[ ( column_name [, ...] ) ]
    [ WITH ( view_option_name [= view_option_value] [, ... ] ) ]
    AS query
    [ WITH [ CASCADED | LOCAL ] CHECK OPTION ]
```

示例：

```sql
CREATE OR REPLACE VIEW "HBXM".SYS_WAITDO 
AS SELECT F.ID,
    F.USERID AS RECEIVE_USER_ID,
    NULL::CHARACTER VARYING AS RECEIVE_ROLE_NO,
    F.PREUSERNAME AS PRE_USER_NAME,
    F.SYS_ID,
    --这里需要指明字段类型，
    '1'::TEXT AS WAITDO_TYPE,
    F.CREATETIME,
    F.DRAFTUSERNAME,
    F.DRAFTUSER
   FROM EPCLOUD.FLOW_WRITE F
  WHERE F.STATTAG = '1'::BPCHAR
```

## 数据库导出导入

数据库导出导入均需要非root用户（数据库用户）操作

```shell
su - kingbase
```

### 导出

```shell
sys_dump -U HBXM_XXGX -d SINOEPUIAS -n HBXM_XXGX > /home/kingbase/HBXM_XXGX_20190709.dmp
```

#### 参数说明

* -U	要作为哪个用户连接。 
* -d    指定要连接到的数据库名
* -n    只备份匹配schema的模式。多个模式可以通过书写多个-n开关来选择

### 导入

```shell
ksql -h 68.1.5.108 -U HBXM_XXGX -d SINOEPUIAS -f HBXM_XXGX_20190709.dmp > imp_hbxm_xxgx_20190709.log
```

#### 参数说明

* -h	指定运行服务器的机器的主机名，如果是在服务器上执行，可不写此参数
* -U   作为用户HBXM_XXGX而不是默认用户连接到数据库（当然，HBXM_XXGX必须具有这样做的权限）
* -d    指定要连接的数据库的名称
* -f     从文件filename而不是标准输入中读取命令

## 修改数据库最大连接数

### 查看当前最大连接数

```shell
#切换数据库用户
su - kingbase
#连接SYSTEM用户TEST模式
ksql -U SYSTEM -W pwd#kbv8 -p 54321 TEST
#查看最大连接数
show max_connections;
```

### 修改最大连接数

```shell
#找到kingbase配置文件(kingbase.conf)
find / -name kingbase.conf
#打开文件，修改属性 max_connections,保存退出
vim /Kingbase/ES/V8/data/kingbase.conf
#执行命令使修改生效(root用户)
service kingbase8d restart
#按上一步操作，查看连接数，是否已经改变
```

