---
id: otherconfig
title: SQL注入
---

### SQL注入
如何解决手动拼接SQL，防止SQL注入？
解决方案：
```bash
String sql = MessageFormat.formatSql(
						"select * from table  where STATTAG=''1'' and SYS_ID=''{0}'' ",);

public class MessageFormat {
    public static String formatSql(String pattern, Object... arguments) {
        List<String> s = new ArrayList<String>();
        for (Object object : arguments) {
            if (object == null || object instanceof Integer || object instanceof Long || object instanceof Float
                    || object instanceof Double) {
                s.add(String.valueOf(object));
            } else {
                s.add(StringEscapeUtils.escapeSql(object.toString()));
            }
        }
        return java.text.MessageFormat.format(pattern, s.toArray());

    }
}
##其中：StringEscapeUtils.escapeSql()方法提供sql转移功能，防止sql注入攻击
##例如：
##sql = MessageFormat.formatSql("select * from table where id=''{0}''", "-1' OR 3*2*1=6 AND 000111=000111 or 'kXtbq3hL'=''+(select*from(select(sleep(5)))a)+'");
##最终的形成的sql为：
##select * from table where id='-1'' OR 3*2*1=6 AND 000111=000111 or ''kXtbq3hL''=''''+(select*from(select(sleep(5)))a)+'''
```