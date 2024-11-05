import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "文档",
  tagline: "个人文档站点",
  favicon: "img/favicon.ico",

  githubHost: "github.com",
  deploymentBranch: "gh-pages", //部署分支
  // Set the production url of your site here
  url: "https://li-liguang.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "li-liguang", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false, // If you use the GitHub preview or debug features, you will need these

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    // 搜索框 https://github.com/easyops-cn/docusaurus-search-local
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        language: ["en", "zh"],
        // Limit the search results.
        searchResultLimits: 8,
        // Set the max length of characters of each search result to show.
        searchResultContextMaxLength: 50,
        // Highlight search terms on target page.
        highlightSearchTermsOnTargetPage: true,
        // Set the match rules to ignore some files.
        ignoreFiles: [
          "/mysql$/"
        ],
        // 汉化
        translations: {
          "search_placeholder": "搜索",
          "see_all_results": "查看所有结果",
          "no_results": "无结果",
          "search_results_for": "\"{{ keyword }}\"的搜索结果",
          "search_the_documentation": "查找文档",
          "count_documents_found": "找到 {{ count }} 个文档",
          "count_documents_found_plural": "找到 {{ count }} 个文档",
          "no_documents_were_found": "未找到文档"
        }
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "主页",
      hideOnScroll: true,
      logo: {
        alt: "docs-website",
        src: "img/logo.svg",
        target: "_self",
      },
      items: [
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "文档",
        //   position: "left",
        // },
        {
          type: "docSidebar",
          sidebarId: "backSidebar",
          label: "后端",
          position: "left",
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "frontSidebar",
          label: "前端",
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "serverSidebar",
          label: "服务器",
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "cloudSidebar",
          label: "云原生",
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "dbSidebar",
          label: "数据库",
        },
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "otherSidebar",
          label: "其他",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://gitee.com/li-liguang",
          position: "right",
          className: "header-gitee-link",
          "aria-label": "Gitee repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "docs/intro",
            },
          ],
        },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/docusaurus",
        //     },
        //   ],
        // },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/li-liguang",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
