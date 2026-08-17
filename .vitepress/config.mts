import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "前端开发与Vibe Coding",
  description: "前端开发与Vibe Coding",
  ignoreDeadLinks: true,
  base: '/lesson-front-end/',
  markdown: {
    math: true,
  },
  head: [
    ['link', { rel: 'icon', href: '/lesson-front-end/logo_icon.jpeg' }],
  ],
  themeConfig: {
    sidebar: [
      {
        text: '绪论',
        collapsed: true,
        items: [
          { text: '认识前端开发', link: '/docs/a-introduce/1-概述.md' },
          { text: '搭建前端开发环境', link: '/docs/a-introduce/2-环境.md' },
        ]
      },
    ],

    outline: {
      label: '导航',
    },

    footer: {
      copyright: '徐夙 &copy; 2026 北方工业大学',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hughxusu/lesson-front-end' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/94456974/upload/video' }
    ]
  }
})
