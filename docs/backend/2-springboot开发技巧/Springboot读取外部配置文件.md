---
id: extra_properties
title: 读取外部配置文件
sidebar_label: 读取外部配置文件
---

# Springboot读取外部配置文件

## 创建`EnvironmentPostProcessor.java`

这个类需要实现`EnvironmentPostProcessor`接口

并可以使用`@Order`设置读取配置文件的优先级。

```java
import cn.hutool.core.util.StrUtil;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Properties;
import java.util.stream.Stream;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.context.config.ConfigFileApplicationListener;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.boot.env.YamlPropertySourceLoader;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MutablePropertySources;
import org.springframework.core.env.PropertiesPropertySource;
import org.springframework.core.env.PropertySource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.support.PropertiesLoaderUtils;

/**
 * 读取外部配置文件
 *
 * @author LLG
 * @date 2022年05月30日 17:34:34
 */
@Slf4j
@Order(Ordered.HIGHEST_PRECEDENCE)
public class LocalSettingsEnvironmentPostProcessor implements EnvironmentPostProcessor {

  /** 外部配置文件路径 */
  private static final String LOCATION_CONFIG = "/aplication/config/";

  /** 读取配置文件后缀 */
  private static final String[] SUFFIX_CONFIG_FILE = {"yml", "yaml", "properties"};

  /**
   * 主配置文件名
   */
  private static String mainFileName = "application.yml";

  /**
   * Post-process the given {@code environment}.
   *
   * @param environment the environment to post-process
   * @param application the application to which the environment belongs
   */
  @Override
  public void postProcessEnvironment(
    ConfigurableEnvironment environment, SpringApplication application) {
    final File file = new File(LOCATION_CONFIG);
    final File[] configFile = file.listFiles();
    if (configFile == null || configFile.length <= 0) {
      return;
    }
    final MutablePropertySources mutablePropertySources = environment.getPropertySources();
    // 加载主配置文件application.yml
    loadProperties(configFile, mutablePropertySources);
    // 加载ActiveProfiles以及IncludedProfiles
    loadActiveAndIncludedProfiles(mutablePropertySources, file);
  }

  /**
   * 加载主配置文件
   *
   * @author LLG
   * @date 2022年05月31日 09:57:19
   * @param configFile
   * @param mutablePropertySources
   * @return void
   */
  private static void loadProperties(
    File[] configFile, MutablePropertySources mutablePropertySources) {
    Stream.of(configFile)
      .filter(
        file -> {
          final String fileName = file.getName();
          return "application.yml".equals(fileName)
            || "application.yaml".equals(fileName)
            || "application.properties".equals(fileName);
        })
      .forEach(
        file -> {
          mainFileName = file.getName();
          loadProp(mutablePropertySources, file);
        });
  }

  /**
   * 加载YAML配置文件
   *
   * @author LLG
   * @date 2022年05月30日 18:57:19
   * @param mutablePropertySources
   * @param file
   * @return void
   */
  private static void loadYamlProp(MutablePropertySources mutablePropertySources, File file)
      throws IOException {
    final FileSystemResource fileSystemResource = new FileSystemResource(file);
    final YamlPropertySourceLoader loader = new YamlPropertySourceLoader();
    final String name = "externalConfig: [" + file.getName() + ']';
    final List<PropertySource<?>> yamlSources = loader.load(name, fileSystemResource);
    yamlSources.forEach(mutablePropertySources::addFirst);
  }

  /**
   * 加载properties配置文件
   *
   * @author LLG
   * @date 2022年05月30日 18:57:31
   * @param mutablePropertySources
   * @param file
   * @return void
   */
  private static void loadPropertiesProp(MutablePropertySources mutablePropertySources, File file)
      throws IOException {
    final FileSystemResource fileSystemResource = new FileSystemResource(file);
    final Properties properties = PropertiesLoaderUtils.loadProperties(fileSystemResource);
    final String name = "externalConfig: [" + file.getName() + ']';
    final PropertiesPropertySource propertySource = new PropertiesPropertySource(name, properties);
    mutablePropertySources.addFirst(propertySource);
  }

  /**
   * 加载Profiles
   *
   * @param mutablePropertySources
   * @param path
   * @return void
   * @author LLG
   * @date 2022年05月31日 10:07:41
   */
  private static void loadActiveAndIncludedProfiles(
    MutablePropertySources mutablePropertySources, File path) {
    loadProfiles(
      mutablePropertySources, path, ConfigFileApplicationListener.ACTIVE_PROFILES_PROPERTY);
    loadProfiles(
      mutablePropertySources, path, ConfigFileApplicationListener.INCLUDE_PROFILES_PROPERTY);
  }

  /**
   * 加载Profiles
   *
   * @param mutablePropertySources
   * @param path
   * @param type                   activeProfiles/includesProfiles
   * @return void
   * @author LLG
   * @date 2022年05月31日 10:07:41
   */
  private static void loadProfiles(
    MutablePropertySources mutablePropertySources, File path, String type) {
    final String sourceName = "externalConfig: [" + mainFileName + ']';
    if (mutablePropertySources.contains(sourceName)) {
      final PropertySource<?> propertySource = mutablePropertySources.get(sourceName);
      final String activeProfiles = (String) propertySource.getProperty(type);

      if (StrUtil.isNotBlank(activeProfiles)) {
        final String[] profiles = activeProfiles.split(",");
        final List<File> allFiles = new ArrayList<>();
        Stream.of(profiles)
          .forEach(
            profile -> {
              final File[] profilesFiles =
                path.listFiles(
                  (dir, name) ->
                    name.equals("application-" + profile + ".yml")
                      || name.equals("application-" + profile + ".yaml")
                      || name.equals("application-" + profile + ".properties"));
              if (profilesFiles != null && profilesFiles.length > 0) {
                allFiles.addAll(Arrays.asList(profilesFiles));
              } else {
                log.error("未找到指定的" + type + "配置文件: " + profile);
              }
            });
        allFiles.forEach(file -> loadProp(mutablePropertySources, file));
      }
    }
  }

  private static void loadProp(MutablePropertySources mutablePropertySources, File file) {
    try {
      final String fileName = file.getName();
      final String suffix = fileName.substring(fileName.lastIndexOf('.') + 1);
      if (suffix.equals(SUFFIX_CONFIG_FILE[0]) || suffix.equals(SUFFIX_CONFIG_FILE[1])) {
        loadYamlProp(mutablePropertySources, file);
      } else if (suffix.equals(SUFFIX_CONFIG_FILE[2])) {
        loadPropertiesProp(mutablePropertySources, file);
      }
    } catch (IOException e) {
      log.error("加载外部配置文件失败 路径：" + file.getAbsolutePath());
    }
  }
}

```

## 添加`spring.factories`

```yml
org.springframework.boot.env.EnvironmentPostProcessor=com.demo.config.LocalSettingsEnvironmentPostProcessor
```