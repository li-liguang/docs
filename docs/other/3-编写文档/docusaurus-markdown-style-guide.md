---
id: docusaurus-markdown-style-guide
title: 文档语法
sidebar_label: 文档语法
---

你可以使用 MarkDown 语法编写文档内容，MarkDown 语法参考 [GitHub-flavored Markdown syntax](https://github.github.com/gfm/)。

一个 MarkDown 文档即一个页面。

## 标题

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

## 段落

段落由一句或多句连续的文本组成，段落之间通过一个或多个空行分隔。如下：

```markdown
这是第一段正文文字的第一句。
这是第一段正文文字的第二句。这是第一段正文文字的第三句。

这是第二段正文文字的第一句。
这是第二段正文文字的第二句。
```

效果如下：

这是第一段正文文字的第一句。
这是第一段正文文字的第二句。这是第一段正文文字的第三句。

这是第二段正文文字的第一句。
这是第二段正文文字的第二句。

---

## 强调

### 斜体

```markdown
_这是第一段文字_
```

或者：

```markdown
_这是第二段文字_
```

效果：

_这是一段文字_

_这是第二段文字_

### 粗体

```markdown
**这是第一段文字**
```

```markdown
**这是第二段文字**
```

**这是第一段文字**

**这是第二段文字**

### 删除线

```markdown
~~删除线~~
```

~~删除线~~

---

## 列表

### 有序号的列表

```markdown
1. 选项 1
2. 选项 2
3. 选项 3
4. 选项 4
```

效果：

1. 选项 1
2. 选项 2
3. 选项 3
4. 选项 4

### 无序号的列表

```markdown
- 足球
- 篮球
- 乒乓球
- 羽毛球
```

效果：

- 足球
- 篮球
- 乒乓球
- 羽毛球

### 多级列表

```markdown
- 兴趣爱好
  - 足球
  - 篮球
  - 乒乓球
  - 羽毛球
- 选项
  1. 选项 1
  2. 选项 2
  3. 选项 3
  4. 选项 4
```

效果如下：

- 兴趣爱好
  - 足球
  - 篮球
  - 乒乓球
  - 羽毛球
- 选项
  1. 选项 1
  1. 选项 2
  1. 选项 3
  1. 选项 4

---

## 链接

```markdown
[百度](https://www.baidu.com)
```

效果如下：

[百度](https://www.baidu.com)

链接会自动识别，如：

```markdown
https://www.baidu.com
```

效果如下：

https://www.baidu.com

---

## 图片

```markdown
![外部图片](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)

![内部图片](../../static/img/logo.svg)
```

效果如下：

![外部图片](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png)

![内部图片](../../../static/img/logo.svg)

---

## 代码

### JavaScript 代码块

    ```javascript
    var s = "JavaScript syntax highlighting";
    alert(s);
    ```

效果如下：

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

### Java 代码块

```java
@SpringBootApplication
public class HelloWorldMainApplication {
  public static void main(String[] args) {
    // Spring应用启动起来
    SpringApplication.run(HelloWorldMainApplication.class,args);
  }
}
```

### 不指定语言的代码块

    ```
    <img src={require('./assets/docusaurus-asset-example-banner.png').default} />
    ```

```
<img src={require('./assets/docusaurus-asset-example-banner.png').default} />
```

### 代码行高亮

    ```js {2}
    function highlightMe() {
      console.log("This line can be highlighted!");
    }
    ```

```js {2}
function highlightMe() {
  console.log("This line can be highlighted!");
}
```

---

## 表格

示例：

```markdown
| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |
```

效果如下：

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

---

## 块引用

```markdown
> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.
>
> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

```

效果如下：

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.
>
> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## 内联HTML

```html
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

效果如下：

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## 警告信息


### note

```markdown
:::note

这是一个note信息

:::
```

效果如下：

:::note

这是一个note信息

:::

### tip

```markdown
:::tip

这是一个提示信息

:::
```

效果如下：

:::tip

这是一个提示信息

:::

### important

```markdown
:::important

This is important

:::
```

效果如下：

:::important

This is important

:::

### caution

```markdown
:::caution

This is a caution

:::
```

效果如下：

:::caution

This is a caution

:::


### warning

```markdown
:::warning

This is a warning

:::
```

效果如下：

:::warning

This is a warning

:::
