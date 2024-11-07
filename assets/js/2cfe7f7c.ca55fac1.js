"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4432],{1547:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var t=r(4848),i=r(8453);const o={id:"add_properties",title:"\u81ea\u52a8\u6ce8\u5165\u914d\u7f6e",sidebar_label:"\u81ea\u52a8\u6ce8\u5165\u914d\u7f6e"},a=void 0,c={id:"backend/springboot\u5f00\u53d1\u6280\u5de7/add_properties",title:"\u81ea\u52a8\u6ce8\u5165\u914d\u7f6e",description:"\u5b9e\u73b0\u65b9\u5f0f1",source:"@site/docs/backend/2-springboot\u5f00\u53d1\u6280\u5de7/\u81ea\u52a8\u6ce8\u5165\u914d\u7f6e.md",sourceDirName:"backend/2-springboot\u5f00\u53d1\u6280\u5de7",slug:"/backend/springboot\u5f00\u53d1\u6280\u5de7/add_properties",permalink:"/docs/docs/backend/springboot\u5f00\u53d1\u6280\u5de7/add_properties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"add_properties",title:"\u81ea\u52a8\u6ce8\u5165\u914d\u7f6e",sidebar_label:"\u81ea\u52a8\u6ce8\u5165\u914d\u7f6e"},sidebar:"backSidebar",previous:{title:"\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/docs/backend/springboot\u5f00\u53d1\u6280\u5de7/extra_properties"}},s={},p=[{value:"\u5b9e\u73b0\u65b9\u5f0f1",id:"\u5b9e\u73b0\u65b9\u5f0f1",level:2},{value:"\u521b\u5efa<code>MyContextInitializer</code>",id:"\u521b\u5efamycontextinitializer",level:3},{value:"\u6dfb\u52a0<code>spring.factories</code>",id:"\u6dfb\u52a0springfactories",level:3},{value:"\u5b9e\u73b0\u65b9\u5f0f2",id:"\u5b9e\u73b0\u65b9\u5f0f2",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u5b9e\u73b0\u65b9\u5f0f1",children:"\u5b9e\u73b0\u65b9\u5f0f1"}),"\n",(0,t.jsxs)(n.h3,{id:"\u521b\u5efamycontextinitializer",children:["\u521b\u5efa",(0,t.jsx)(n.code,{children:"MyContextInitializer"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5b9e\u73b0",(0,t.jsx)(n.code,{children:"ApplicationContextInitializer"}),"\u63a5\u53e3"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'import cn.hutool.core.util.StrUtil;\r\nimport com.sinosoft.intellisenseform.utils.models.DbTypes;\r\nimport java.util.HashMap;\r\nimport java.util.Map;\r\nimport lombok.extern.slf4j.Slf4j;\r\nimport org.springframework.context.ApplicationContextInitializer;\r\nimport org.springframework.context.ConfigurableApplicationContext;\r\nimport org.springframework.core.annotation.Order;\r\nimport org.springframework.core.env.ConfigurableEnvironment;\r\nimport org.springframework.core.env.MapPropertySource;\r\n\r\n/**\r\n * @author LLG\r\n * @date 2022\u5e7404\u670826\u65e5 13:30:55\r\n */\r\n@Slf4j\r\n@Order\r\npublic class MyContextInitializer implements ApplicationContextInitializer {\r\n\r\n  /**\r\n   * Initialize the given application context.\r\n   *\r\n   * @param applicationContext the application to configure\r\n   */\r\n  @Override\r\n  public void initialize(ConfigurableApplicationContext applicationContext) {\r\n    final ConfigurableEnvironment environment = applicationContext.getEnvironment();\r\n    final String dataSourceUrl = environment.getProperty("spring.datasource.url");\r\n    log.info("spring.datasource.url:{}", dataSourceUrl);\r\n    \r\n    final Map<String, Object> map = new HashMap<>(1);\r\n    map.put("myconfig.name", "china");\r\n    environment.getPropertySources().addLast(new MapPropertySource("myProperty", map));\r\n  }\r\n\r\n}\r\n\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"\u6dfb\u52a0springfactories",children:["\u6dfb\u52a0",(0,t.jsx)(n.code,{children:"spring.factories"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"org.springframework.context.ApplicationContextInitializer=com.demo.config.MyContextInitializer\r\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9e\u73b0\u65b9\u5f0f2",children:"\u5b9e\u73b0\u65b9\u5f0f2"}),"\n",(0,t.jsxs)(n.p,{children:["\u53c2\u7167",(0,t.jsx)(n.a,{href:"/docs/docs/backend/springboot%E5%BC%80%E5%8F%91%E6%8A%80%E5%B7%A7/extra_properties",children:"\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6"})]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>c});var t=r(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);