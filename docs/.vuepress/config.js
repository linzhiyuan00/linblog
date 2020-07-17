module.exports = {
    title: '小杰瑞',
    description: '坚持 专注 热爱',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/images/photo.jpg' }],
        ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
        ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache' }],
        ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate' }],
        ['meta', { 'http-quiv': 'expires', cotent: '0' }]
    ],
    serviceWorker: true, // 是否开启 PWA
    base: '/', // 部署到github相关的配置
    markdown: {
        lineNumbers: true // 代码块是否显示行号
    },
    themeConfig: {
        nav: [ // 导航栏配置
            { text: '知识梳理', link: '/knowledgecard/' },
            { text: 'bug踩坑', link: '/mybug/' },
            { text: '诗和远方', link: '/others/' },
            { text: '掘金', link: 'https://juejin.im/user/5c7a674e6fb9a049ef274c92' }
        ],
        sidebar: {
            // knowledgecard 文档中md文件 书写的位置(命名随意)
            '/knowledgecard/': [
                '/knowledgecard/', // knowledgecard.md 不是下拉框形式
                {
                    title: 'JS',
                    children: [
                        '/knowledgecard/JS/js数据类型', // 以docs为根目录来查找文件 
                        // 上面地址查找的是：docs>knowledgecard>JS>js数据类型.md 文件
                        // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                    ]
                }
            ],
            // docs文件夹下面的mybug文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
            '/mybug/': [
                '/mybug/',
                {
                    title: 'Iview组件库',
                    children: [
                        '/mybug/iview/select'
                    ]
                }
            ]
        },
        // sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 1,
        lastUpdated: '最后更新于',
    }
};