module.exports = {
  title: '小杰瑞',
  description: '坚持 专注 热爱',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      {text: '知识梳理', link: '/knowledgecard/' },
      {text: 'bug踩坑', link: '/mybug/'},
      {text: '诗和远方', link: '/others/'},
      {text: '掘金', link: 'https://juejin.im/user/5c7a674e6fb9a049ef274c92'}      
    ],
    sidebar:{
      '/knowledgecard/': [
          {
            title: '前端积累',
            children: [
              '/knowledgecard/1.html',
              '/knowledgecard/2.html',
              '/knowledgecard/3.html',
              '/knowledgecard/4.html',
              '/knowledgecard/5.html',
              '/knowledgecard/6.html',
              '/knowledgecard/7.html',
              '/knowledgecard/8.html',
              '/knowledgecard/9.html',
              '/knowledgecard/10.html',
              '/knowledgecard/11.html',
            ]
          }
        ],
        '/knowledgecard/': [
          '/knowledgecard/', 
          {
            title: '第二组侧边栏下拉框的标题1',
            children: [
              '/knowledgecard/' 
            ]
          }
        ]
    },
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};