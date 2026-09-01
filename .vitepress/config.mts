import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
      {
        text: 'HTML',
        collapsed: true,
        items: [
          { text: '认识HTML', link: '/docs/b-html/1-认识' },
          { text: '基础HTML标签', link: '/docs/b-html/2-基础' },
          { text: '高级HTML标签', link: '/docs/b-html/3-高级' },
        ]
      },
      {
        text: 'CSS',
        collapsed: true,
        items: [
          { text: 'CSS基础', link: '/docs/c-css/01-基础' },
          { text: '给文字设置样式', link: '/docs/c-css/02-文本' },
          { text: '选择器进阶', link: '/docs/c-css/03-进阶' },
          { text: '背景和元素显示模式', link: '/docs/c-css/04-背景' },
          { text: 'CSS特性', link: '/docs/c-css/05-特性' },
          { text: '盒子模型', link: '/docs/c-css/06-盒子' },
          { text: 'CSS中的选择器', link: '/docs/c-css/07-选择' },
          { text: '浮动的应用', link: '/docs/c-css/08-浮动' },
          { text: '定位', link: '/docs/c-css/09-定位' },
          { text: '装饰页面', link: '/docs/c-css/10-装饰' },
          { text: '2D变换', link: '/docs/c-css/11-2D.md' },
          { text: '3D变换', link: '/docs/c-css/12-3D.md' },
          { text: '弹性布局', link: '/docs/c-css/13-弹性.md' },
          { text: '综合案例', link: '/docs/c-css/14-案例.md' },
        ]
      },
      {
        text: 'javascript基础',
        collapsed: true,
        items: [
          { text: 'JavaScript介绍', link: '/docs/d-js/a-base/01-介绍' }, 
          { text: '从变量开始', link: '/docs/d-js/a-base/02-变量' }, 
          { text: '数据类型', link: '/docs/d-js/a-base/03-类型' }, 
          { text: '字符串', link: '/docs/d-js/a-base/04-字符' }, 
          { text: '条件控制', link: '/docs/d-js/a-base/05-条件' }, 
          { text: '数组', link: '/docs/d-js/a-base/06-数组' }, 
          { text: '循环控制', link: '/docs/d-js/a-base/07-循环' }, 
          { text: '函数', link: '/docs/d-js/a-base/08-函数' }, 
          { text: '对象', link: '/docs/d-js/a-base/09-对象' }, 
        ]
      },
      {
        text: 'Web API',
        collapsed: true,
        items: [
          { text: 'WebAPI基本知识', link: '/docs/d-js/b-dom/1-基本' }, 
          { text: 'DOM事件基础', link: '/docs/d-js/b-dom/2-事件' }, 
          { text: '节点操作', link: '/docs/d-js/b-dom/3-节点' }, 
          { text: '事件对象', link: '/docs/d-js/b-dom/4-事件' }, 
          { text: '高级特性', link: '/docs/d-js/b-dom/5-高级' }, 
          { text: 'BOM', link: '/docs/d-js/b-dom/6-bom' }, 
        ]
      },
      {
        text: 'javascript进阶',
        collapsed: true,
        items: [
          { text: '闭包与箭头函数', link: '/docs/d-js/c-es6/a-闭包' },  
        ]
      },
      {
        text: 'node.js',
        collapsed: true,
        items: [
          { text: 'node.js安装', link: '/docs/e-node/a-node.md' }, 
        ]
      },
      {
        text: 'typescript',
        collapsed: true,
        items: [

        ]
      },
      {
        text: 'Vue',
        collapsed: true,
        items: [

        ]
      },
      // {
      //   text: '微信小程序',
      //   collapsed: true,
      //   items: [

      //   ]
      // },
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
