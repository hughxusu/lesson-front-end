import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "大模型驱动机器学习实战",
  description: "大模型驱动机器学习实战",
  ignoreDeadLinks: true,
  base: '/lesson-ai/',
  markdown: {
    math: true,
  },
  head: [
    ['link', { rel: 'icon', href: '/lesson-ai/logo_icon.jpeg' }],
  ],
  themeConfig: {
    sidebar: [
      {
        text: '绪论',
        collapsed: true,
        items: [
          { text: '机器学习概述', link: '/docs/a-intro/01-概述.md' },
          { text: '机器学习工作流程', link: '/docs/a-intro/02-流程.md' },
        ]
      },
      { 
        text: '机器学习经典算法',
        collapsed: true,
        items: [
          { text: 'K近邻', link: '/docs/b-base/01-knn.md' },
          { text: '线性回归', link: '/docs/b-base/02-线性.md' },
          { text: '梯度下降法', link: '/docs/b-base/03-梯度.md' },
          { text: '多项式回归与模型泛化', link: '/docs/b-base/04-多项式.md' },
          { text: '逻辑回归', link: '/docs/b-base/05-逻辑.md' },
          { text: '评价分类结果', link: '/docs/b-base/06-评价.md' },
          { text: '维度分析', link: '/docs/b-base/07-pca.md' },
          { text: '支持向量机', link: '/docs/b-base/08-svm.md' },
          { text: '决策树', link: '/docs/b-base/09-决策树.md' },
          { text: '集成学习', link: '/docs/b-base/10-集成.md' },
          { text: '聚类算法', link: '/docs/b-base/11-聚类.md' },
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
      { icon: 'github', link: 'https://github.com/hughxusu/lesson-ai' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/94456974/upload/video' }
    ]
  }
})
