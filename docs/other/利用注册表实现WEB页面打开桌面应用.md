---
id: app-reg
title: 利用注册表实现WEB端打开桌面应用
sidebar_label: 利用注册表实现WEB端打开桌面应用
---

# 利用注册表实现WEB端打开桌面应用

## 注册表文件

阿里云盘的注册表示例：

```reg
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\smartdrive]
"URL Protocol"=""
@="URL:smartdrive"

[HKEY_CLASSES_ROOT\smartdrive\shell]

[HKEY_CLASSES_ROOT\smartdrive\shell\open]

[HKEY_CLASSES_ROOT\smartdrive\shell\open\command]
@="\"C:\\Users\\Administrator.SINO-20170417UL\\AppData\\Local\\Programs\\aDrive\\aDrive.exe\" \"%1\""
```

自己创建一个注册表：

```reg
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\myexe]
"URL Protocol"=""
@="URL:myexe"

[HKEY_CLASSES_ROOT\myexe\shell]

[HKEY_CLASSES_ROOT\myexe\shell\open]

[HKEY_CLASSES_ROOT\myexe\shell\open\command]
@="\"D:\\Program Files (x86)\\msgClient\\message.exe\" \"%1\""
```

其中`%1`表示参数。可将以上内容保存为`reg`文件。

## WEB端调用注册表

在浏览器地址栏输入：`myexe://common`，即可打开`myexe.exe`程序，其中`common`即携带的参数，对应注册表中`%1`。

或者随便一个超链接

```html
<a href="myexe://common" >打开桌面版应用</a>
```





## 附录

### 使用Setup Factory构建应用时，写入注册表

```bash
--安装路径写入注册表
Registry.SetValue(HKEY_LOCAL_MACHINE, "SOFTWARE\\JMElectInstallInfo", "JMElectInstallLocation", SessionVar.Expand ("%AppFolder%"), REG_SZ);
```

