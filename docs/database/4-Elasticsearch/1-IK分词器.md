---
id: elasticsearch-ik
title: IK分词器
sidebar_label: IK分词器
---


本文摘自：[Elasticsearch搜索中文分词优化](https://www.jianshu.com/p/914f102bc174)

> 1.当搜索关键词如：“人民币”时，如果分词将“人民币”分成“人”，“民”，“币”三个单字，那么搜索该关键词会匹配到很多包含该单字的无关内容,但是如果将该词分词成一个整词“人民币”，搜索单字如“人”字又不会匹配到包含“人民币”关键词的内容,怎么解决这个问题,既保证覆盖度又保证准确度?
>
> 2.搜索“RMB”时只会匹配到包含“RMB”关键词的内容，实际上，“RMB”和“人民币”是同义词，我们希望用户搜索“RMB”和“人民币”可以相互匹配，ES同义词怎么配置？
>
> 3.用户搜索拼音: 如"baidu",或者拼音首字母"bd",怎么匹配到"百度"这个关键词,又如用户输入"摆渡"这个词也能匹配到"百度"关键词,中文拼音匹配怎么做到?
>
> 4.怎么保证搜索关键词被正确分词,通常我们会采用自定义词典来做,那么怎么获取自定义词典?



接下来从以下几点讲一下怎么ES中文分词

1. 中文分词器
2. ES 分词流程之 analysis,analyzer,filter,tokenizer
3. ES内置分词器
4. 自定义analyzer
5. ES同义词功能实现
6. ES拼写纠错
7. ES自定义词典获取
8. 停用词

## IK分词器

### 分词模式

Elasticsearch中文分词我们采用Ik分词，ik有两种分词模式，`ik_max_word`,和`ik_smart`模式

两种模式的区别：

> **ik_max_word**: 会将文本做最细粒度的拆分，比如会将“中华人民共和国国歌”拆分为“中华人民共和国,中华人民,中华,华人,人民共和国,人民,人,民,共和国,共和,和,国国,国歌”，会穷尽各种可能的组合；
> **ik_smart**: 会做最粗粒度的拆分，比如会将“中华人民共和国国歌”拆分为“中华人民共和国,国歌”。

索引时，为了提供索引的覆盖范围，通常会采用`ik_max_word`分析器，会以最细粒度分词索引，搜索时为了提高搜索准确度，会采用`ik_smart`分析器，会以粗粒度分词字段mapping设置如下：

```java
builder.startObject("fileContent");
{
    builder.field("type", "text");
    builder.field("analyzer", "ik_max_word");
    builder.field("search_analyzer", "ik_smart");
}
builder.endObject();
```

以上代码示例为构建字段`fileContent`类型为text，索引时和查询时，分别采用`ik_max_word`和`ik_smark`分析器；

### Elasticsearch之分析（analysis）和分析器（analyzer）

analysis索引分析模块充当analyzer分析器的可配置注册表,通过analyzer对文档索引阶段的字段和搜索String进行处理,自定义analyzer时,通常需要`character
filter`， `tokenizer`， `token filters`来完成

#### character filter字符过滤器

首先字符串经过过滤器（character filter），他们的工作是在分词前处理字符串。字符过滤器能够去除HTML标记，例如：将“&lta&gt”变为“a”;

#### tokenizer分词器

英文分词可以根据空格将单词分开，中文分词比较复杂，可以采用机器学习算法来分词。

#### token filters表征过滤器

最后，每个词都通过所有表征过滤（token filters），他可以修改词（例如将“Quick”转为小写），去掉词（例如停用词像“a”、“and”、“the”等等），或者增加词（例如同义词像“a”、“and”、“the”等等）或者增加词（例如同义词像“jump”和“leap”）。

#### ES分词流程

`character filter` -->> `tokenizer` -->> `token filters`

### 自定义analyzer

