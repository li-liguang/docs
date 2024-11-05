"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9514],{5173:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(4848),t=n(8453);const i={id:"extra_properties",title:"\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6",sidebar_label:"\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6"},a="Springboot\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6",s={id:"backend/springboot\u5f00\u53d1\u6280\u5de7/extra_properties",title:"\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6",description:"\u521b\u5efaEnvironmentPostProcessor.java",source:"@site/docs/backend/2-springboot\u5f00\u53d1\u6280\u5de7/Springboot\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6.md",sourceDirName:"backend/2-springboot\u5f00\u53d1\u6280\u5de7",slug:"/backend/springboot\u5f00\u53d1\u6280\u5de7/extra_properties",permalink:"/docs/docs/backend/springboot\u5f00\u53d1\u6280\u5de7/extra_properties",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backend/2-springboot\u5f00\u53d1\u6280\u5de7/Springboot\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6.md",tags:[],version:"current",frontMatter:{id:"extra_properties",title:"\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6",sidebar_label:"\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6"},sidebar:"backSidebar",next:{title:"\u81ea\u52a8\u6ce8\u5165\u914d\u7f6e",permalink:"/docs/docs/backend/springboot\u5f00\u53d1\u6280\u5de7/add_properties"}},l={},p=[{value:"\u521b\u5efa<code>EnvironmentPostProcessor.java</code>",id:"\u521b\u5efaenvironmentpostprocessorjava",level:2},{value:"\u6dfb\u52a0<code>spring.factories</code>",id:"\u6dfb\u52a0springfactories",level:2}];function c(r){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...r.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"springboot\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6",children:"Springboot\u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6"})}),"\n",(0,o.jsxs)(e.h2,{id:"\u521b\u5efaenvironmentpostprocessorjava",children:["\u521b\u5efa",(0,o.jsx)(e.code,{children:"EnvironmentPostProcessor.java"})]}),"\n",(0,o.jsxs)(e.p,{children:["\u8fd9\u4e2a\u7c7b\u9700\u8981\u5b9e\u73b0",(0,o.jsx)(e.code,{children:"EnvironmentPostProcessor"}),"\u63a5\u53e3"]}),"\n",(0,o.jsxs)(e.p,{children:["\u5e76\u53ef\u4ee5\u4f7f\u7528",(0,o.jsx)(e.code,{children:"@Order"}),"\u8bbe\u7f6e\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u7684\u4f18\u5148\u7ea7\u3002"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-java",children:'import cn.hutool.core.util.StrUtil;\r\nimport java.io.File;\r\nimport java.io.IOException;\r\nimport java.util.ArrayList;\r\nimport java.util.Arrays;\r\nimport java.util.List;\r\nimport java.util.Properties;\r\nimport java.util.stream.Stream;\r\nimport lombok.extern.slf4j.Slf4j;\r\nimport org.springframework.boot.SpringApplication;\r\nimport org.springframework.boot.context.config.ConfigFileApplicationListener;\r\nimport org.springframework.boot.env.EnvironmentPostProcessor;\r\nimport org.springframework.boot.env.YamlPropertySourceLoader;\r\nimport org.springframework.core.Ordered;\r\nimport org.springframework.core.annotation.Order;\r\nimport org.springframework.core.env.ConfigurableEnvironment;\r\nimport org.springframework.core.env.MutablePropertySources;\r\nimport org.springframework.core.env.PropertiesPropertySource;\r\nimport org.springframework.core.env.PropertySource;\r\nimport org.springframework.core.io.FileSystemResource;\r\nimport org.springframework.core.io.support.PropertiesLoaderUtils;\r\n\r\n/**\r\n * \u8bfb\u53d6\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\r\n *\r\n * @author LLG\r\n * @date 2022\u5e7405\u670830\u65e5 17:34:34\r\n */\r\n@Slf4j\r\n@Order(Ordered.HIGHEST_PRECEDENCE)\r\npublic class LocalSettingsEnvironmentPostProcessor implements EnvironmentPostProcessor {\r\n\r\n  /** \u5916\u90e8\u914d\u7f6e\u6587\u4ef6\u8def\u5f84 */\r\n  private static final String LOCATION_CONFIG = "/aplication/config/";\r\n\r\n  /** \u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\u540e\u7f00 */\r\n  private static final String[] SUFFIX_CONFIG_FILE = {"yml", "yaml", "properties"};\r\n\r\n  /**\r\n   * \u4e3b\u914d\u7f6e\u6587\u4ef6\u540d\r\n   */\r\n  private static String mainFileName = "application.yml";\r\n\r\n  /**\r\n   * Post-process the given {@code environment}.\r\n   *\r\n   * @param environment the environment to post-process\r\n   * @param application the application to which the environment belongs\r\n   */\r\n  @Override\r\n  public void postProcessEnvironment(\r\n    ConfigurableEnvironment environment, SpringApplication application) {\r\n    final File file = new File(LOCATION_CONFIG);\r\n    final File[] configFile = file.listFiles();\r\n    if (configFile == null || configFile.length <= 0) {\r\n      return;\r\n    }\r\n    final MutablePropertySources mutablePropertySources = environment.getPropertySources();\r\n    // \u52a0\u8f7d\u4e3b\u914d\u7f6e\u6587\u4ef6application.yml\r\n    loadProperties(configFile, mutablePropertySources);\r\n    // \u52a0\u8f7dActiveProfiles\u4ee5\u53caIncludedProfiles\r\n    loadActiveAndIncludedProfiles(mutablePropertySources, file);\r\n  }\r\n\r\n  /**\r\n   * \u52a0\u8f7d\u4e3b\u914d\u7f6e\u6587\u4ef6\r\n   *\r\n   * @author LLG\r\n   * @date 2022\u5e7405\u670831\u65e5 09:57:19\r\n   * @param configFile\r\n   * @param mutablePropertySources\r\n   * @return void\r\n   */\r\n  private static void loadProperties(\r\n    File[] configFile, MutablePropertySources mutablePropertySources) {\r\n    Stream.of(configFile)\r\n      .filter(\r\n        file -> {\r\n          final String fileName = file.getName();\r\n          return "application.yml".equals(fileName)\r\n            || "application.yaml".equals(fileName)\r\n            || "application.properties".equals(fileName);\r\n        })\r\n      .forEach(\r\n        file -> {\r\n          mainFileName = file.getName();\r\n          loadProp(mutablePropertySources, file);\r\n        });\r\n  }\r\n\r\n  /**\r\n   * \u52a0\u8f7dYAML\u914d\u7f6e\u6587\u4ef6\r\n   *\r\n   * @author LLG\r\n   * @date 2022\u5e7405\u670830\u65e5 18:57:19\r\n   * @param mutablePropertySources\r\n   * @param file\r\n   * @return void\r\n   */\r\n  private static void loadYamlProp(MutablePropertySources mutablePropertySources, File file)\r\n      throws IOException {\r\n    final FileSystemResource fileSystemResource = new FileSystemResource(file);\r\n    final YamlPropertySourceLoader loader = new YamlPropertySourceLoader();\r\n    final String name = "externalConfig: [" + file.getName() + \']\';\r\n    final List<PropertySource<?>> yamlSources = loader.load(name, fileSystemResource);\r\n    yamlSources.forEach(mutablePropertySources::addFirst);\r\n  }\r\n\r\n  /**\r\n   * \u52a0\u8f7dproperties\u914d\u7f6e\u6587\u4ef6\r\n   *\r\n   * @author LLG\r\n   * @date 2022\u5e7405\u670830\u65e5 18:57:31\r\n   * @param mutablePropertySources\r\n   * @param file\r\n   * @return void\r\n   */\r\n  private static void loadPropertiesProp(MutablePropertySources mutablePropertySources, File file)\r\n      throws IOException {\r\n    final FileSystemResource fileSystemResource = new FileSystemResource(file);\r\n    final Properties properties = PropertiesLoaderUtils.loadProperties(fileSystemResource);\r\n    final String name = "externalConfig: [" + file.getName() + \']\';\r\n    final PropertiesPropertySource propertySource = new PropertiesPropertySource(name, properties);\r\n    mutablePropertySources.addFirst(propertySource);\r\n  }\r\n\r\n  /**\r\n   * \u52a0\u8f7dProfiles\r\n   *\r\n   * @param mutablePropertySources\r\n   * @param path\r\n   * @return void\r\n   * @author LLG\r\n   * @date 2022\u5e7405\u670831\u65e5 10:07:41\r\n   */\r\n  private static void loadActiveAndIncludedProfiles(\r\n    MutablePropertySources mutablePropertySources, File path) {\r\n    loadProfiles(\r\n      mutablePropertySources, path, ConfigFileApplicationListener.ACTIVE_PROFILES_PROPERTY);\r\n    loadProfiles(\r\n      mutablePropertySources, path, ConfigFileApplicationListener.INCLUDE_PROFILES_PROPERTY);\r\n  }\r\n\r\n  /**\r\n   * \u52a0\u8f7dProfiles\r\n   *\r\n   * @param mutablePropertySources\r\n   * @param path\r\n   * @param type                   activeProfiles/includesProfiles\r\n   * @return void\r\n   * @author LLG\r\n   * @date 2022\u5e7405\u670831\u65e5 10:07:41\r\n   */\r\n  private static void loadProfiles(\r\n    MutablePropertySources mutablePropertySources, File path, String type) {\r\n    final String sourceName = "externalConfig: [" + mainFileName + \']\';\r\n    if (mutablePropertySources.contains(sourceName)) {\r\n      final PropertySource<?> propertySource = mutablePropertySources.get(sourceName);\r\n      final String activeProfiles = (String) propertySource.getProperty(type);\r\n\r\n      if (StrUtil.isNotBlank(activeProfiles)) {\r\n        final String[] profiles = activeProfiles.split(",");\r\n        final List<File> allFiles = new ArrayList<>();\r\n        Stream.of(profiles)\r\n          .forEach(\r\n            profile -> {\r\n              final File[] profilesFiles =\r\n                path.listFiles(\r\n                  (dir, name) ->\r\n                    name.equals("application-" + profile + ".yml")\r\n                      || name.equals("application-" + profile + ".yaml")\r\n                      || name.equals("application-" + profile + ".properties"));\r\n              if (profilesFiles != null && profilesFiles.length > 0) {\r\n                allFiles.addAll(Arrays.asList(profilesFiles));\r\n              } else {\r\n                log.error("\u672a\u627e\u5230\u6307\u5b9a\u7684" + type + "\u914d\u7f6e\u6587\u4ef6: " + profile);\r\n              }\r\n            });\r\n        allFiles.forEach(file -> loadProp(mutablePropertySources, file));\r\n      }\r\n    }\r\n  }\r\n\r\n  private static void loadProp(MutablePropertySources mutablePropertySources, File file) {\r\n    try {\r\n      final String fileName = file.getName();\r\n      final String suffix = fileName.substring(fileName.lastIndexOf(\'.\') + 1);\r\n      if (suffix.equals(SUFFIX_CONFIG_FILE[0]) || suffix.equals(SUFFIX_CONFIG_FILE[1])) {\r\n        loadYamlProp(mutablePropertySources, file);\r\n      } else if (suffix.equals(SUFFIX_CONFIG_FILE[2])) {\r\n        loadPropertiesProp(mutablePropertySources, file);\r\n      }\r\n    } catch (IOException e) {\r\n      log.error("\u52a0\u8f7d\u5916\u90e8\u914d\u7f6e\u6587\u4ef6\u5931\u8d25 \u8def\u5f84\uff1a" + file.getAbsolutePath());\r\n    }\r\n  }\r\n}\r\n\n'})}),"\n",(0,o.jsxs)(e.h2,{id:"\u6dfb\u52a0springfactories",children:["\u6dfb\u52a0",(0,o.jsx)(e.code,{children:"spring.factories"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yml",children:"org.springframework.boot.env.EnvironmentPostProcessor=com.demo.config.LocalSettingsEnvironmentPostProcessor\n"})})]})}function m(r={}){const{wrapper:e}={...(0,t.R)(),...r.components};return e?(0,o.jsx)(e,{...r,children:(0,o.jsx)(c,{...r})}):c(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>a,x:()=>s});var o=n(6540);const t={},i=o.createContext(t);function a(r){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function s(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:a(r.components),o.createElement(i.Provider,{value:e},r.children)}}}]);