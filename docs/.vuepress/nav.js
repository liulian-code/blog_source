const navbar = [
    {
        text: 'how to build Blog',
        link: '/notes/vuepress/vuepress.md',
    },
    {
        text: '前端学习笔记',
        children: [
            {
                text: '基础', children: [
                    { text: 'HTML', link: '/notes/html/' },
                    { text: 'CSS', link: '/notes/css/' },
                    { text: 'LESS', link: '/notes/less/less' },
                    { text: 'JavaScript', link: '/notes/javaScript/javaScript' },
                ]
            },
            {
                text: '框架', children: [
                    { text: 'Vue', link: '/notes/vue/vue核心基础.md' },
                    { text: 'Nodejs', link: '/notes/nodejs/node' },
                    // { text: 'React', link: '' },
                    // { text: 'uni-app', link: '' },
                ]
            },
            {
                text: '其他', children: [
                    { text: 'Git', link: '/notes/git/git' },
                    { text: 'npm', link: '/notes/npm/' },
                    { text: 'webpack', link: '/notes/webpack/webpack基础.md' },
                ]
            },
        ],
    },
    { text: '个人项目', link: '' },
    { text: '踩坑记录', link: '' },
    { text: '面试题汇总', link: '' }
]
export default navbar   