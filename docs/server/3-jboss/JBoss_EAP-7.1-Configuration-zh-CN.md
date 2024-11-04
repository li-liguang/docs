---
id: jboss-config
title: JBoss官方文档[中文翻译版]
sidebar_label: JBoss官方文档[中文翻译版]
---

官方文档：

[JBoss_EAP-7.1-简介-zh-CN.pdf](./pdf/JBoss_EAP-7.1-简介-zh-CN.pdf)

[JBoss_EAP-7.1-起步指南-zh-CN.pdf](./pdf/JBoss_EAP-7.1-起步指南-zh-CN.pdf)

[JBoss_EAP-7.1-发行注记-zh-CN.pdf](./pdf/JBoss_EAP-7.1-发行注记-zh-CN.pdf)

[JBoss_EAP-7.1-Configuration-en-us.pdf](./pdf/JBoss_EAP-7.1-Configuration-en-us.pdf)

# 第一章 概述

本指南的目的是涵盖设置和维护JBoss EAP并在其上运行应用程序和其他服务。使用本指南之前要配置JBoss EAP，假定已下载最新版本的JBoss EAP，并且安装。有关安装说明，请参阅JBoss EAP安装指南。

> 注：
>
> 由于JBoss EAP的安装位置因主机而异，因此本指南将安装位置称为EAP_HOME。JBoss EAP的实际位置执行管理任务时，应使用安装而不是EAP_HOME。

# 第二章 启动和停止`JBOSS EAP`

## 2.1 启动`JBOSS EAP`

JBoss EAP 受 Red Hat Enterprise Linux、Windows Server、Oracle Solaris 和 Hewlett-Packard
HP-UX 支持，以独立服务器或受管域操作模式运行。启动 JBoss EAP 的具体命令取决于底层的平台及所
需操作模式。

服务器最初是在挂起状态下启动的，在所有服务已启动之前不会接受任何请求，当服务器处于正常运行状态，可以启动接受请求

**将 JBoss EAP 作为独立服务器启动**

```shell
$ EAP_HOME/bin/standaloin.sh
```

> 注：对于Windows服务器，使用`EAP_HOME\bin\standalone.bat`脚本启动

启动脚本使用`EAP_HOME/bin/standalone.conf`配置文件（Windows服务启动脚本使用`EAP_HOME/bin/standalone.conf.bat`配置文件），来设置一些默认配置，例如：JVM options。您可以在这个配置文件自定义启动配置。

`JBOSS`默认使用`standalone.xml`这个配置文件，但是您可以在启动时指定另外的配置文件。有关可用的独立配置文件以及如何使用它们的详细信息，请参阅服务器配置文件部分。

关于所有可用的启动脚本参数及其用途的完整列表，请使用 --help 参数查看或者参考 3.6.1 Server Runtime
Arguments （服务器运行时参数）章节。

**将 JBoss EAP 作为受管域启动**

域控制器必须在域中服务器组里的任何服务器之前启动。使用以下脚本会首先启动域控制器，然后是每个
关联的主机控制器。

```shell
$ EAP_HOME/bin/domain.sh
```

> 注：对于 Windows Server，请使用 `EAP_HOME\bin\domain.bat` 脚本

这个启动脚本使用了 `EAP_HOME/bin/domain.conf` 文件（Windows Server 则使用`domain.conf.bat`）来设置某些默认首选项，如 JVM 选项。您可以在这个文件里自定义这些设置。

JBoss EAP 默认使用 `host.xml` 主机配置文件，但也可以使用其他配置启动。关于可用的受管域模式配
置文件的细节及如何使用它们，请参考 3.6.2 Managed Domain Configuration Files 章节。

当设立受管域时，也需要将其他参数传入启动脚本。关于可用启动脚本参数和用途的完整列表，请使用 -
-help 参数或参阅Server Runtime Arguments （服务器运行时参数）章节。

## 2.2 停止`JBOSS EAP`

如何停止`JBoss EAP`取决于他的启动方式。

**停止 JBoss EAP  的交互式实例**

在启动 JBoss EAP 的终端窗口里按 `Ctrl+C`。

**停止 JBoss EAP  的后台实例**

使用管理 `CLI` 来连接运行中的实例并关闭服务器。

```shell
--1.启动管理CLI
$ EAP_HOME/bin/jboss-cli.sh --connect
--2.执行shutdown命令
shutdown
```

> 注：
>
> 当运行在受管域里时，您必须在 shutdown 命令里用 --host 参数指定主机名来关闭服务器。

## 2.3 在 ADMIN-ONLY 模式下运行 JBOSS EAP

JBoss EAP支持在admin-only模式启动。该模式允许 JBoss EAP 运行并接受管理请求，但是不启动其他运行时服务或者接受用户请求。Admin-only模式同时支持独立模式（standalone）和域模式（managed domains）。

### 在Admin-only模式下启动独立模式

**在Admin-only模式下启动服务**

在admin-only模式下启动JBoss EAP实例，需要在启动时使用 --start-mode=admin-only运行参数。

```shell
$ EAP_HOME/bin/standalone.sh --start-mode=admin-only
```

**检查服务是否运行在Admin-only模式下**

使用以下命令检查服务运行模式。如果服务是运行在admin-only模式下，则会返回结果为**ADMIN-ONLY**

```shell
:read-attribute(name=running-mode)

{

"outcome" => "success",

"result" => "ADMIN_ONLY"

}
```



> 注：
>
> 另外，您还可以用以下命令检查 JBoss EAP 的初始运行模式。
>
> ```shell
> /core-service=server-environment:read-attribute(name=initial-running-mode)
> ```

**使用管理CLI来重新加载另一种模式**

 除了使用不同的运行时开关停止和启动JBoss EAP实例之外，管理`CLI`还可以用来在另一种模式下重加载JBoss EAP实例。

* 在admin-only模式下重加载服务器：

  ```shell
  reload --start-mode=admin-only
  ```

* 在正常模式下重新加载服务器：

  ```shell
  reload --start-mode=normal
  ```

  注意：如果服务在admin-only模式下启动，并且没有在命令**reload**中使用参数**--start-mode**参数，那么服务将以普通模式启动。

### 在Admin-only模式下启动域模式



## 2.4 优雅的挂起和关闭 JBOSS EAP

### 2.4.1 挂起服务

JBoss EAP 7 引入了挂起模式，它会优雅的挂起服务器操作。该模式允许正常的完成正在活动的请求，但是将不再接受任何新请求。一旦服务暂停，它可以被停止，也可以返回正常运行状态，或者留在挂起状态来执行维护。

> **注**：管理接口在此状态下不受影响。

可以使用管理控制台或者管理`CLI`来，挂起和恢复服务。

#### 检查服务器挂起状态

使用以下管理`CLI`命令查看服务器挂起状态。返回结果将是**RUNNING**,**PRE_SUSPEND**,或者**SUSPENDED**中的一个。

```shell
--独立模式（standalone）下检查挂起状态
:read-attribute(name=suspend-state)
--域模式（domain）模式下检查挂起状态
/host=master/server=server-one:read-attribute(name=suspend-state)
```

#### 挂起服务

使用以下管理`CLI`命令来挂起服务，指定超时时间（秒），用来服务等待正在活动的请求完成。默认超时时间为**0**秒，表示立即挂起。如果设置为**-1**，服务器将**无限期**等待所有活动的请求都完成后再挂起。

示例：

```shell
--独立模式服务挂起
:suspend(timeout=60)
--域模式挂起所有服务器
:suspend-servers(timeout=60)
--域模式挂起单独一个服务器
/host=master/server-config=server-one:suspend(timeout=60)
--挂起一个服务器群组内的所有服务器
/server-group=main-server-group:suspend-servers(timeout=60)
```

#### 恢复服务

使用以下命令可以恢复挂起的服务器，重新接受请求。

```shell
:resume
```

#### 启动一个挂起状态的服务

您可以启动一个挂起状态的服务，启动后直到恢复服务，服务器将不接受任何请求。

* 以挂起状态启动一个**独立模式**服务，启动 JBoss EAP 实例时使用`--start-mode=suspend`启动参数。

  ```shell
  $ EAP_HOME/bin/standalone.sh --start-mode=suspend
  ```

* 以挂起状态启动一个**域模式**服务，在管理`CLI`命令中，通过`start-mode=suspend`参数

  ```shell
  /host=HOST_NAME/server-confit=SERVER_NAME:start(start-mode=suspend)
  ```

  > **注**：
  >
  > 您还可以通过`start-mode`参数来`reload`和`restart`服务器。

* 以挂起状态启动**域模式下所有的**服务器，在管理`CLI`命令中，通过`start-mode=suspend`参数

  ```shell
  /server-group=SERVER_GROUP_NAME:start-servers(start-mode=suspend)
  ```

  > **注**：
  >
  > 您还可以通过`start-mode`参数来`reload-servers`和`restart-servers`服务器群组。

### 2.4.2 优雅的关闭服务器

如果在停止服务器是，指定一个超时时间，服务器将优雅的停止。执行了停止命令后，服务器将挂起，并在关闭之前等待指定的超时时间，用来处理正在活动的请求。

使用以下管理`CLI`命令来优雅的停止服务器。指定超时时间（秒），用来服务等待正在活动的请求完成。默认时间为**0**秒，表示立即停止服务器。如果超时时间设置为**-1**，服务器将在停止之前**无限期**等待正在活动的请求完成。

示例：

```shell
--优雅的停止独立模式服务
:shutdown(timeout=60)
--优雅的停止域模式下所有的服务器
:stop-servers(timeout=60)
--优雅的停止域模式下的某一个服务器
/host=master/server-config=server-one:stop(timeout=60)
--优雅的停止域群组中的所有的服务器
/server-group=main-server-group:stop-servers(timeout=60)
```

## 2.5 启动和停止 JBOSS EAP(RPM安装)

对于**RPM**安装，启动和停止**JBoss EAP**与 ZIP或 安装程序安装 不同。

### 2.5.1 启动 JBoss EAP（RPM安装）

### 2.5.2 停止 JBoss EAP（RPM安装）

## 2.6  POWERSHELL脚本（WINDOWS服务器） 

# 第三章 JBOSS EAP 管理

Jboss EAP 使用简单的配置，每一个独立服务器或受管域使用一个配置文件。独立模式服务器默认配置文件为`EAP_HOME/standalone/configuration/standalone.xml`；域模式使用配置文件`EAP_HOME/domain/configuration/domain.xml`。另外，主机控制器的默认配置储存在配置文件`EAP_HOME/domain/configuration/host.xml`中。

JBoss EAP可以使用命令行管理CLI、基于web的管理控制台、Java API或httpapi进行配置。使用这些管理接口所做的更改将自动保存，并且XML配置文件将被管理API覆盖。管理CLI和管理控制台是首选方法，不建议手动编辑XML配置文件。

## 3.1 关于 subsystems，extensions，和profiles

JBoss EAP中不同功能的切面配置在不同的*subsystems*子系统中。例如：应用和服务日志配置在**logging**子系统subsystem中。

 *extension*扩展是扩展服务器核心功能的模块 。扩展模块根据需要加载，并且在他们不被需要时自动被卸载。如何**[添加](https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.1/html-single/management_cli_guide/index#how_to_add_extension)**和**[移除](https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.1/html-single/management_cli_guide/index#how_to_remove_extension)**扩展模块，请查看 JBoss EAP 管理CLI Guide。

子系统为特定扩展提供配置选项。 有关可用子系统的更多信息，请参阅 JBoss EAP子系统概述。 

子系统配置集合构成*profile*，用来满足服务的需要。一个独立模式的服务有一个简单的，未命名的*profile*。一个域模式中的托管域可以定义多个*profile* 供服务使用。

### 使用管理控制台或者管理CLI

 管理控制台和管理CLI都是更新 JBoss EAP实例配置的有效且受支持的方法。 那些喜欢使用图形化的、基于web的界面的人，可以使用管理控制台；那些喜欢使用命令行方式的人，可以使用管理CLI。

## 3.2 管理用户

 默认的 JBoss EAP配置提供本地身份验证，这样用户就可以访问本地主机上的管理CLI，而不需要身份验证 。

然而，如果您想远程访问*管理CLI*或者*管理控制台*，您必须添加一个管理员用户， 即使流量源于本地主机，也将其视为远程访问。 如果在添加管理员用户之前尝试访问管理控制台，将收到错误消息。

如果您使用 JBoss EAP图形安装界面进行安装，那么在安装过程中将会创建一个管理员用户。

本指南介绍了使用`add-user`脚本对 JBoss EAP进行简单的用户管理， 它是一个实用程序，用于将新用户添加到属性文件中以进行开箱即用的身份验证。

 有关更高级的身份验证和授权选项，如`LDAP`或基于角色的访问控制（RBAC），请参阅 [JBoss EAP安全体系结构的核心管理身份验证](https://access.redhat.com/documentation/en-us/red_hat_jboss_enterprise_application_platform/7.1/html-single/security_architecture/index#core_management_auth)部分。

### 3.2.1 添加管理用户

1. 运行`add-user`实用脚本，并根据提示操作。

   ```shell
   $ EAP_HOME/bin/add-user.sh
   ```

   > 注：Windows服务，使用`EAP_HOME/bin/add-user.bak`脚本。

2. 点击*回车* 选择默认选项**a**用来添加管理用户，该用户会被添加到*ManagementRealm*，并且将被授可以使用管理控制台或管理CLI执行管理操作。

   另一个选项**b**，则用户会被添加到*ApplicationRealm*，该用户将用于应用程序，不提供特定权限。

3. 输入用户名和密码。系统会提示您确认密码。

   >**注**：
   >
   >用户名只能包含以下任意数量、任意位置的字符：
   >
   >* 字母和数字（a-z，A-Z，0-9）
   >* 破折号（-），句号（.），逗号（,），以及@符号
   >* 反斜线（\）
   >* 等于号（=）

   默认的， JBoss EAP允许弱密码，但是会有警告信息。

   您还可以查看 [3.2.3 设置添加用户程序的密码限制](#3.2.3设置添加用户程序的密码限制)来改变这一默认行为。

4. 输入用户所属的群组（多个群组以逗号分隔）。如果您不想设置用户所属群组，可直接点击*回车键*，进行下一步操作。

5. 查看信息，并输入`yes`确定。

6. 确定此用户是否表示远程JBoss EAP服务器实例。如果是一个基础的管理用户，则输入**no**。

   *以下内容省略*

   

## 3.6 配置数据

### 3.6.1 独立模式配置文件

独立配置文件位于`EAP_HOME/standalone/configuration/`目录下。目录下有五个独立的预定义的配置文件（default，ha，full，full-ha，load-balancer）。

表 3.1 独立配置文件

| Configuratino File           | Purpose                                                      |
| :--------------------------- | :----------------------------------------------------------- |
| standalone.xml               | 此独立配置文件是独立模式启动服务器时的默认配置文件。它包含关于服务器的所有信息，包括：subsystems子系统，networking网络，deployments部署，socket bindings套接字绑定，以及其他详细配置。它不提供消息传递或高可用性所必需的子系统 |
| standalone-ha.xml            | 这个独立配置文件包括所有的默认子系统并添加了用于高可用性的modcluster和 jgroups 子系统。它没有提供消息所必需的子系统。 |
| standalone-full.xml          | 这个独立配置文件包括所有的默认子系统并添加了 messaging-activemq 和 iiop-openjdk子系统。它没有提供高可用性所必需的子系统。 |
| standalone-full-ha.xml       | 这个独立配置文件包含对每种可能的子系统的支持，包括用于消息和高可用性的子系统。 |
| standalone-load-balancer.xml | 这个独立配置文件包含使用内建 mod_cluster 前端负载均衡器对其他 JBoss EAP实例进行负载均衡所需的最少子系统。 |

在默认情况下，以独立服务器方式启动 JBoss EAP 将使用 standalone.xml 文件。要用不同的配置集
启动 JBoss EAP，请使用**--server-config** 选项。例如：

```shell
$ EAP_HOME/bin/standalone.sh --server-config=standalone-full.xml
```

### 3.6.2 受管域配置文件

受管域配置文件位于`EAP_HOME/domain/configuration/`目录下。

表 3.2 受管域配置文件

| Configuration File | Purpose                                                      |
| ------------------ | ------------------------------------------------------------ |
| domain.xml         | 这是用于受管域的主要配置文件。只有域主控制器会读取这个文件。它包含所有配置集的配置（default、ha、full、full-ha、load-balancer）。 |
| host.xml           | 这个文件包含了受管域里的物理主机专有的配置细节，如网络接口、套接字绑定、主机名称和其他主机专有的细节。 host.xml 文件包含了  host-master.xml 和  host-slave.xml 的全部功能，正如下面所描述的。 |
| host-master.xml    | 这个文件只包含将服务器作为主域控制器运行所需的配置细节。     |
| host-slave.xml     | 这个文件只包含将服务器作为受管域主机控制器运行所需的配置细节。 |

在默认情况下，以受管域方式启动 JBoss EAP 将使用 host.xml 文件。要用不同的配置集启动 JBoss
EAP，请使用 **--host-config** 选项。例如：

```shell
$ EAP_HOME/bin/domain.sh --host-config=host-master.xml
```

### 3.6.3 备份配置数据

为了以后能恢复 JBoss EAP 服务器配置，下列位置里的内容应该进行备份：

* **EAP_HOME/standalone/configuration/**
  * 备份整个目录以保存用户数据、服务器配置和独立服务器的日志设置。
* **EAP_HOME/domain/configuration/**
  * 备份整个目录以保存用户和配置集数据、域和主机配置、受管域的日志设置。
* **EAP_HOME/modules/**
  * 备份自定义的模块。
* **EAP_HOME/welcome-content/**
  * 备份任何自定义的欢迎内容。
* **EAP_HOME/bin/**
  * 备份任何自定义脚本或启动配置文件。

### 3.6.4 配置文件快照

为了协助维护和管理服务器实例，JBoss EAP 在启动时创建了一个原始配置文件的带时间戳的版本。管理
操作导致的任何其他的配置修改都会让原始文件自动备份，而实例的一个工作备份会保留以供引用或回
滚。此外，您可以获取服务器配置当前时间点的配置快照。而管理员可以保存和加载这些快照。

下面的例子使用了 **standalone.xml** 配置文件，但相同的过程适用于 **domain.xml** 和 **host.xml** 配置
文件。

#### 创建快照

请用管理 CLI 来获取当前配置的快照。

```shell
:take-snapshot
{
	"outcome" => "success",
	"result" =>
		"EAP_HOME/standalone/configuration/standalone_xml_history/snapshot/20151022-				133109702standalone.xml"
}
```

#### 列出快照

使用管理 CLI 来列出所有已创建的快照。

```shell
:list-snapshots
{
	"outcome" => "success",
	"result" => {
		"directory" =>
			"EAP_HOME/standalone/configuration/standalone_xml_history/snapshot",
		"names" => [
            "20151022-133109702standalone.xml",
            "20151022-132715958standalone.xml"
		]
	}
}
```

#### 删除快照

使用管理 CLI 来删除快照。

```shell
:delete-snapshot(name=20151022-132715958standalone.xml)
```

#### 使用快照启动服务器

您可以使用快照或者自动备份的历史版本配置文件来启动服务器。

1. 进入 `EAP_HOME/standalone/configuration/standalone_xml_history`目录并确认要加载的快照或保存的配置文件。
2. 启动服务器并指向所选的配置文件。传入相对于配置目录（`EAP_HOME/standalone/configuration/`）的文件路径。

```shell
$ EAP_HOME/bin/standalone.sh --server-config=standalone_xml_history/snapshot/2015-1333122standalone.xml
```

> **注**：如果服务器运行在受管域中，请使用`--host-config`参数来指定配置文件。

### 3.6.5 查看配置更改

JBoss EAP 提供了跟踪对正在运行的系统所做的配置更改的能力。这允许管理员用户查看，其他授权用户所做的配置文件修改历史记录。

> **重要提示**：
>
>  更改存储在内存中，不会在服务器重新启动之间持久化。此功能不能替代[管理审核日志记录](#)。 

您可以使用管理CLI或者管理控制台启用跟踪和查看配置更改。

#### 使用管理CLI启用跟踪和查看配置更改



#### 使用管理控制台启用跟踪和查看配置更改



### 3.6.6 属性替换

JBoss EAP 允许您使用表达式来定义代替配置中字面值的可替换属性。表达式使用`${PARAMETER:DEFAULT_VALUE}` 格式。如果已设置指定的参数，那么将使用参数值，否则将使用提供
的默认值。

解析表达式所支持的来源是系统属性、环境变量和库。仅对于部署，来源可疑是部署归档中`META-INF/jboss.properties`文件里列出的属性。对于支持子部署的部署类型，如果属性文件位于外部部署（如：EAR），解析的作用域是全部子部署。如果属性文件位于某个子部署里，那么解析的作用域只是该子部署。

下面的`standalone.xml`配置文件里的示例设置`public`接口的`inet-address`为`127.0.0.1`，除非`jboss.bind.address`参数已被设置。

```xml
<interface name="public">
	<inet-address value="${jboss.bind.address:127.0.0.1}" />
</interface>
```

当用下列命令以独立服务器方式启动 JBoss EAP 时可以设置 `jboss.bind.address` 参数：

```shell
$ EAP_HOME/bin/standalone.sh -Djboss.bind.address=IP_ADDRESS
```

#### 嵌套表达式

表达式可以嵌套，这允许使用高级表达式来替代固定值。嵌套表达式的格式和普通表达式类似，但表达式是内嵌的，例如：

```shell
${SYSTEM_VALUE_1${SYSTEM_VALUE_1}}
```

嵌套表达式是递归评估的，所以首先会评估*inner*表达式，然后是*outer*表达式。表达式也可以是递归的，表达式解析另外一个表达式，从而完成整个解析。允许表达式的地址就允许嵌套表达式，例外是管理CLI命令。

使用嵌套表达式的一个例子是，如果数据源定义里使用的密码是掩盖的，我们可以使用嵌套表达式。数据源配置可能有下列的内容：

```xml
<password>${VAULT::ds_ExampleDS::password::1}</password>
```

`ds_ExampleDS`的值可用使用嵌套表达式的系统属性（`datasource_name`）替换。数据源的配置可以有下列内容：

```xml
<password>${VAULT::${datasource_name}::password::1}</password>
```

JBoss EAP 首先将评估表达式`${datasource_name}`，然后将它放入更大的表达式并评估结果表达式。这种配置的优势是数据源的名称会从固定配置抽象出来。

#### 基于描述符的属性替换

应用程序配置（如数据源连接参数）在部署、测试和产品环境里通常是不一样的。这种变化有时是通过构建系统脚本来处理，因为 Java EE 规格没有包含外部化这些配置的方法。在 JBoss EAP 里，您可以使用基于描述符的属性替换以在外部管理配置。

基于描述符的属性替换（Descriptor-based property replacement）基于描述符替换属性，允许您从应用程序和构建链里删除关于环境的假设。您可以在部署描述符而不是应用程序或构建系统脚本里指定环境专有的配置。您可以在文件里或作为命令行参数提供配置。

ee 子系统里有几个标记（flag）用来控制是否应用属性替换。
JBoss 专有描述符替换是由 jboss-descriptor-property-replacement 标记控制的，它的默认值是 enabled。启用后可以替换下列属性描述符文件里的属性：

* jboss-ejb3.xml
* jboss-app.xml
* jboss-web.xml
* *-jms.xml*
* -ds.xml

下列管理 CLI 命令可用来启用或禁用 JBoss 专有描述符文件里的属性替换：

```shell
/subsystem=ee:write-attribute(name="jboss-descriptor-property-replacement",value=VALUE)
```

Java EE 描述符替换是由 `spec-descriptor-property-replacement` 标记控制的，它的默认值是`disabled`。启用后可以替换下列属性描述符文件里的属性：

* ejb-jar.xml
* persistence.xml
* application.xml
* web.xml

下列管理 CLI 命令可用来启用或禁用 Java EE 描述符文件里的属性替换：

```shell
/subsystem=ee:write-attribute(name="spec-descriptor-property-replacement",value=VALUE)
```

## 3.7 文件系统路径

JBoss EAP 对文件系统路径使用逻辑名称。 然后，配置的其他区域可以使用它们的逻辑名称引用路径，从而避免对每个实例使用绝对路径，并允许特定的主机配置解析为通用逻辑名称 。

例如，默认的日志子系统配置声明`jboss.server.log.dir`作为服务器日志目录的逻辑名称。

示例： 服务器日志目录的相对路径示例：

```xml
<file relative-to="jboss.server.log.dir" path="server.log" />
```

 JBoss EAP默认提供了许多标准路径，用户无需在配置文件中配置它们。

**表 3.3 标准路径**

| Property                    | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| java.home                   | Java安装目录                                                 |
| jboss.controller.temp.dir   | 独立服务器和托管域的公用别名。用于临时文件存储的目录。<br/>在独立服务器中等价于`jboss.server.temp.dir`，<br/>在托管域中等价于`jboss.domain.temp.dir` |
| jboss.domain.base.dir       | 域内容的基础目录                                             |
| jboss.domain.config.dir     | 域配置文件的目录                                             |
| jboss.domain.data.dir       | 域将用于永久数据文件存储的目录                               |
| jboss.domain.log.dir        | 域将用于永久日志文件存储的目录                               |
| jboss.domain.temp.dir       | 域将用于临时文件存储的目录                                   |
| jboss.domain.deployment.dir | 域将用于存储已部署内容的目录                                 |
| jboss.domain.servers.dir    | 域将用于存储托管域实例的输出的目录                           |
| jboss.home.dir              | JBOSS EAP的根目录                                            |
| jboss.server.base.dir       | 独立服务器内容的基本目录                                     |
| jboss.server.config.dir     | 独立服务器配置文件的基本目录                                 |
| jboss.server.data.dir       | 独立服务器将用于永久数据文件存储的目录                       |
| jboss.server.log.dir        | 独立服务器将用于日志文件存储的目录                           |
| jboss.server.temp.dir       | 独立服务器将用于临时文件存储的目录                           |
| jboss.server.deploy.dir     | 独立服务器将用于存储已部署内容的目录                         |
| user.dir                    | 用户的当前工作目录                                           |
| user.home                   | 用户的根目录                                                 |

您也可以替[代标准路径](3.7.2)或[添加自定义路径](3.7.3)。

### 3.7.1 查看文件系统路径

### 3.7.2替换标准路径

### 3.7.3 添加自定义路径

## 3.8 目录分组

### 按服务器目录分组

### 按类别目录分组

## 3.9 系统属性

### 在启动脚本中使用系统属性

### 使用管理CLI设置系统属性

### 使用管理控制台设置系统属性

### 使用 JAVA_OPTS 设置系统属性

## 3.10 管理审计日志

### 独立服务器审计日志

### 托管域服务器审计日志

### 3.10.1 启用管理审计日志

#### 启用独立服务器审计日志

#### 启用托管域服务器审计日志

### 3.10.2 将管理审计日志发送到系统日志服务器

### 3.10.3 读取审计日志

## 3.11 服务器生命周期事件通知

### 3.11.1 使用核心管理子系统监视服务器生命周期事件

### 3.11.2  使用JMX通知监视服务器生命周期事件 

# 第四章 网络和端口配置

# 第五章 JBOSS EAP安全

# 第六章 JBOSS EAP类加载器

# 第七章 部署应用

 JBoss EAP提供了一系列应用程序部署和配置选项，以满足管理员和开发人员的需要。对于管理员， 管理控制台和管理CLI提供理想的图形和命令行界面，用于管理产品环境中的应用程序部署。对于开发人员， 应用程序部署测试选项的范围包括一个可配置的文件系统部署扫描器、HTTP API、一个IDE（如Red Hat JBoss Developer Studio）和Maven。

当部署应用程序时， 您可能希望通过将`org.jboss.metadata.parser.validate system`属性设置为`true`来启用部署描述符的验证，这可以通过以下方法之一完成：

* 在启动服务器时

  ```shell
  $ EAP_HOME/bin/standalone.sh -Dorg.jboss.metadata.parser.validate=true
  ```

* 使用以下管理CLI命令添加到服务配置中

  ```shell
  /system-property=org.jboss.metadata.parser.validate:add(value=true)
  ```

## 7.1 使用管理CLI部署应用

 使用管理CLI部署应用程序使您能够使用单个命令行界面创建和运行部署脚本。您可以使用此脚本功能配置特定的应用程序部署和管理方案。 当作为独立服务器运行时，可以管理单个服务器的部署；当在托管域中运行时，可以管理整个服务器网络。

### 7.1.1  使用管理CLI将应用程序部署到独立服务器

#### 部署应用

通过管理CLI，使用`deploy`命令，指定应用路径部署应用。

```shell
deploy /path/to/test-app.war
```

 成功的部署不会向管理CLI生成任何输出，但服务器日志会显示部署消息。

```shell
WFLYSRV0027: Starting deployment of "test-application.war" (runtime-name:"test-application.war")
WFLYUT0021: Registered web context: /test-application
WFLYSRV0010: Deployed "test-application.war" (runtime-name : "test-application.war")
```

您还可以使用通配符（*）重部署所有的已禁用的应用程序。

```shell
deploy --name=*
```

#### 解部署应用

通过管理CLI，使用`undeploy`命令，指定部署应用名称来解部署。这将删除部署内容。如何在解部署后保留部署内容请看查看[禁用应用](#)。

```shell
undeploy test-app.war
```

成功的解部署不会向管理CLI生成任何输出，但服务器日志会显示解部署消息。

```shell
WFLYUT0022: Unregistered web context: /test-application
WFLYSRV0028: Stopped deployment test-application.war (runtime-name: test-
application.war) in 62ms
WFLYSRV0009: Undeployed "test-application.war" (runtime-name: "test-application.war")
```

您还可以使用通配符（*）解部署所有的应用。

```shell
undeploy *
```

#### 禁用应用

 在不从存储库中删除部署内容的情况下取消部署应用程序。这可使用管理控制台禁用部署一样。

```shell
undeploy test-app.war --keep-content
```

您还可以使用通配符（*）禁用所有的应用。

```shell
undeploy * --keep-content
```

#### 查看部署列表

使用管理CLI命令`deployment-info`查看所有部署信息。

```shell
deployment-info
```

这会输出部署的详细信息，例如：运行名称、部署状态，以及是否禁用。

```shell
NAME					RUNTIME-NAME			PERSISTENT	ENABLED	STATUS
helloworld.war			helloworld.war			true		true	OK
test-application.war 	test-application.war 	true 		true	OK
```

您还可以通过部署名过滤，添加`--name`参数：

```shell
deployment-info --name=test-app.war
```

### 7.1.2  使用管理CLI在托管域中部署应用程序部署应用程序 

#### 部署应用

#### 解部署应用

#### 禁用应用

#### 查看部署列表

## 7.2 使用管理控制台部署应用

## 7.3 使用部署扫描程序部署应用

## 7.4 使用MAVEN部署应用

## 7.5 使用HTTP API部署应用

## 7.6 自定义部署行为

## 7.7 管理文件夹部署

 在JBoss EAP 7.1之前，您只能通过操作文件系统上的文件来管理文件夹部署。在JBoss EAP 7.1版本，您可以通过管理接口管理文件夹部署。这允许您不用部署新应用而修改部署内容。

> **注**：更新静态资源，例如：JavaScript和CSS文件，会立即生效。修改其他文件，例如class文件，需要冲部署应用才能生效。

您可以先从空部署开始，或者解压现有存档部署，然后添加或删除内容。 

请[参阅查看部署内容](#)以浏览部署中的文件或读取文件的内容。

### 创建一个空部署

您可以创建一个空文件夹部署，然后添加必要的内容进去。使用以下管理CLI命令创建空部署。

```shell
/deployment=DEPLOYMENT_NAME.war:add(content=[{empty=true}])
```

选项`empty=true`是用来确认您想创建一个空部署。

### 解压现有存档部署

您可以解压一个已有的部署用来修改里面的内容。在解压之前需要注意这个应用必须是被禁用的。使用以下管理CLI命令解压部署。

```shell
/deployment=ARCHIVE_DEPLOYMENT_NAME.ear:explode
```

现在您可以添加或移除部署内容了。

> **注**：您可以从管理控制台解压一个已经存在的部署。 从“展开”选项卡中，选择展开并选择“分解”下拉选项 

### 向文件夹部署中添加内容

 要向部署添加内容，请使用`add-content` 管理CLI操作。提供部署中应添加内容的位置的路径，以及要添加的内容。 上载的内容可以作为本地文件流、URL、已经存在于JBOSS EAP内容库中的内容的散列或内容的字节数组来提供。使用以下管理CLI命令，及`input-stream-index`选项来上传本地文件内容。

```shell
/deployment=DEPLOYMENT_NAME.war:add-content(content=[{target-path=/path/to/FILE_IN_DEPLOYMENT, input-stream-index=/path/to/LOCAL_FILE_TO_UPLOAD}]
```

> **注**：当使用`add-content`选项添加内容时，默认会覆盖原有内容。您可以使用`overwrite=false`来改变这一默认行为。

### 从文件夹部署中移除内容

 要从部署中删除内容，请使用`remove-content`管理CLI操作并提供要在部署中删除的内容的路径。

```shell
/deployment=DEPLOYMENT_NAME.war:remove-content(paths=[/path/to/FILE_1,/path/to/FILE_2])
```

## 7.8 查看部署内容

 您可以使用JBoss EAP管理接口浏览有关托管部署中文件的信息并读取文件的内容。

### 7.8.1 浏览文件夹中的文件



# 第八章 域管理

# 第九章 配置JVM设置

## 9.1为独立服务器配置JVM设置

可以在运行时声明独立JBoss EAP服务器实例的JVM设置，方法是在启动服务器之前设置JAVA_OPTS环境变量。

 在Linux上设置JAVA_OPTS环境变量的示例如下所示。 

> $ export JAVA_OPTS="-Xmx1024M"

 在Microsoft Windows环境中也可以使用相同的设置： 

> set JAVA_OPTS="Xmx1024M"

或者，可以将JVM设置添加到`standalone.conf`文件或`standalone.conf.bat`(

Windows服务器)，位于`EAP_HOME/bin`文件夹中，其中包含传递给JVM的选项示例。

> 警告：
>
>  设置JAVA_OPTS环境变量将覆盖standalone.conf中的默认值，这可能会导致JBoss EAP启动问题。 

# 第十章 邮件子系统

# 第十一章 JBOSS EAP日志

# 第十二章 数据源配置

# 第十三章 事务配置

# 第十四章 OBJECT REQUEST BROKER(ORB)配置

# 第十五章 JAVA CONNECTOR ARCHITECTURE (JCA)配置

# 第十六章  配置WEB服务器（下载） 

# 第十七章 配置远程处理

# 第十八章 配置IO子系统

# 第十九章 配置WebServices

# 第二十章 配置JAVASERVER FACES (JSF) 

# 第二十一章 配置批处理程序

# 第二十二章 配置命名子系统

# 第二十三章 配置高可用性

# 附录A 参考材料



