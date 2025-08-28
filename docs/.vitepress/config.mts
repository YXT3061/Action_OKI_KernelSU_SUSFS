import { defineConfig } from 'vitepress'
import { localSearchOptions } from "./search";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Oneplus Kernel Image",
  description: "使用GA编译一加KSU分支内核并发布构建",
  themeConfig: {
  
    outline: {
        level: "deep", // 右侧大纲标题层级
        label: "目录", // 右侧大纲标题文本配置
    },
    
    darkModeSwitchLabel: "切换日光/暗黑模式",
    sidebarMenuLabel: "文章",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "最后更新", // 最后更新时间文本配置, 需先配置lastUpdated为true
     
     // 文档页脚文本配置
    docFooter: {
        prev: "上一篇",
        next: "下一篇",
    },
    // 搜索配置（二选一）
    search: {
        // 本地离线搜索
        provider: "local",
        options: localSearchOptions,
    }, // 导航栏右侧社交链接配置
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/what-is-this' }
    ],

    footer: {
        message: '感谢GitHub Pages提供网站搭建服务',
        copyright: 'Copyright © 2024-present 酷安@我不是尘桑'
    },

    editLink: {
        pattern: 'https://github.com/mcxiaochenn/Action_OKI_KernelSU_SUSFS/edit/main/docs/:path',
        text: '在 GitHub 中编辑本页'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mcxiaochenn/Action_OKI_KernelSU_SUSFS' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: '什么是OKI', link: '/guide/what-is-this' },
          { text: '安装', link: '/guide/installation' },
          { text: '无root安装', link: '/guide/noroot-installation'},
          { text: '如何构建', link: '/guide/how-to-build'},
          { text: 'Faq', link: '/guide/Faq'},
          { text: 'ROM 下载', link: '/guide/roms'},
          { text: '赞助', link: '/guide/zanzhu'}
        ]
      }
    ]
  }
})
