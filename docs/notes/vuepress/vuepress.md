# VuePress 从 0 开始搭建个人网站

> [VuePress 官网传送门](https://v2.vuepress.vuejs.org/zh/)

## 体验 VuePress

- **步骤1:** 创建并进入新目录

```bash
mkdir blog_source
cd blog_source
```

- **步骤2:** 初始化项目

```bash
git init
yarn init
  ```

- **步骤3:** 将 VuePress 安装为本地依赖

```bash
yarn add -D vuepress@next
```

- **步骤4:** 在 `package.json` 文件添加 `scripts`

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

- **步骤5:** 将默认的临时目录和缓存目录添加到 .gitignore 文件中

```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

- **步骤6:** 在根目录下创建 docs 文件夹

```bash
mkdir docs
```

- **步骤5:** 在 docs 目录下新建 index.md 文档，并写入一些内容

```md
---
home: true
heroImage: /images/logo.png
heroText: Blog
tagline: 一名前端er的学习笔记
features:
  - title: 前端学习笔记
    details: HTML、CSS、JavaScript、Vue、React...
  - title: 个人项目展示
    details: 
  - title: 杂七杂八
    details: 前端面试题汇总、资源推荐...
footer: this is Blog
---
```

VuePress版本v2.x中并没有关于首页的配置布局，这部分可以在v1.x文档中找到，参考[默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)

- **步骤7:** 启动本地服务器

```bash
yarn docs:dev
```

VuePress 会在 <http://localhost:8080> 启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

- **步骤8:** 浏览器打开服务器所给地址

## 目录结构

以下为 BruceBlog 部分目录结构，比较重要的是 `.vuepress` 目录的结构。官方目录结构请移步 [→](https://vuepress.vuejs.org/zh/guide/directory-structure.html)

```text
.
├── docs
│   ├── .vuepress
│   │   ├── public
|   |   |   └── images
│   │   ├── nav.js
│   │   ├── sidebar.js
│   │   └── config.js
|   |
│   ├── notes
│   │   ├── html
|   │   │   └── index.md
|   |   ├── javaScript
|   │   │   ├── sidebar.js
|   │   │   ├── javaScript.md
|   │   │   ├── ES6.md
|   │   │   └── ...
|   │   │
|   │   ├── ...
|   |   |
│   │   └── README.md
|   |
│   └── index.md
│
├── .gitignore
|
└── package.json
```

## `config.js` 文件配置

每个配置的作用都写在注释当中。

官方文档：[配置](https://v2.vuepress.vuejs.org/zh/reference/config.html)

```js
import { defaultTheme } from 'vuepress'
import navbar from './nav'
import sidebar from './sidebar'
module.exports = {
    // 自定义网站 favicon
    head: [['link', { rel: 'icon', href: 'images/logo.png' }]],
    // 根路径，和仓库名一致
    base: '/Blog/',
    // 左上角标题
    title: 'liulian-Blog',
    // markdown 相关配置
    markdown: {
        // 代码块行号
        lineNumbers: true,
    },
    // 默认主题相关配置
    theme: defaultTheme({
        // 配置左上角的 logo
        logo: 'images/logo.png',
        //点击左上角logo跳转地址
        home: '/',
        // 导航栏
        navbar: navbar,
        // 侧边栏
        sidebar: sidebar,
        // sidebar: 'auto',
        // 标题深度，2 表示提取 h2 和 h3 标题
        sidebarDepth: 2,
        // 启用页面滚动效果
        smoothScroll: true,
        // 最后更新时间
        lastUpdated: 'Last Updated',
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        // 导航栏显示 gitee 仓库
        repo: 'https://github.com/liulian-code/Blog',
        repoLabel: 'github',
        search: true,
        searchMaxSuggestions: 10
    }),
}
```

## 首页

`docs/index.md`文档：

```md
---
home: true
heroImage: /images/logo.png
heroText: Blog
tagline: 一名前端er的学习笔记
features:
  - title: 前端学习笔记
    details: HTML、CSS、JavaScript、Vue、React...
  - title: 个人项目展示
    details: 
  - title: 杂七杂八
    details: 前端面试题汇总、资源推荐...
footer: this is Blog
---
```

VuePress版本v2.x中并没有关于首页的配置布局，这部分可以在v1.x文档中找到，参考[默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)

## 导航栏

这里没有直接把配置写在 `config.js` 文件中，而是提取成一个模块，便于后续维护，也避免 `config.js` 文件过于臃肿。

注意事项：

- 所有路径以 `/` 开头，`/` 代表 docs 目录
- 若没有指明具体文件，只有文件夹，则默认会寻找该文件夹下的 READMED.md或者index.md 文档，如 `'/notes/'` → `'/notes/README.md'|'/notes/index.md'`

```js
// .vuepress/nav.js
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
                    { text: 'JavaScript', link: '/notes/javaScript/javaScript' },
                ]
            }
        ],
    }
]
export default navbar 
```

[官方文档](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar)

## 侧边栏

可以配置为不同页面显示不同的侧边栏，侧边栏配置是文件数组，侧边栏名称默认为对应文件的大标题，如果某个种类的侧边栏文件过多，可以考虑封装为独立的sidebar.js文件，方便维护

以 Vue 页面的侧边栏为例：

```js
// .vuepress/sidebar.js
import vue_sidebar from '../notes/vue/sidebar'
export default {
  '/notes/html': ['/notes/html/index.md'],
  '/notes/vue': vue_sidebar,
}
```

```js
// notes/vue/sidebar.js
export default ['/notes/vue/vue核心基础.md',
  '/notes/vue/vue组件化编程.md',
  '/notes/vue/vue组件进阶.md',
  '/notes/vue/vue-cli',
  '/notes/vue/vue网络请求.md',
  '/notes/vue/vuex',
  '/notes/vue/vue-router',
  '/notes/vue/vue3',
  '/notes/vue/vue常用插件.md']
```

[官方文档](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#sidebar)

## 修改默认样式

默认主题使用 SASS 作为 CSS 预处理器。

用户可以通过 palette 文件 来自定义样式变量，还可以通过 style 文件 来添加额外的样式。

[官方文档](https://v2.vuepress.vuejs.org/zh/reference/default-theme/styles.html)

## Emoji

输入

```md
VuePress 2 已经发布 :tada: ！
```

输出

VuePress 2 已经发布 :tada: ！

前往 [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet) 来查看所有可用的 Emoji 表情和对应代码。

## 搭建过程踩的坑

- 使用 `![]()` 插入图片时，要填写标准的相对路径，如 `./images/xxx.png`，不要省略前面的 `./`，否则图片无法正常显示
- 在非代码块中（包括行内代码）不要使用紧贴的大括号，两个同向的大括号之间加个空格

```js
// 报错写法
style={{ key: value }}
// 不报错写法
style={ { key: value } }
```

- 使用vuepress2.x构建博客，按照官方文档配置navbar，但官方文档引入默认主题使用的是require(),如果当前是vite vue3，会导致报错（vuepress not supported），是因为vite vue3认为require引入方式不安全，解决方法是该用import...from...引入
- 侧边栏对应的文件路径要书写正确，否则侧边栏无法展示
- 若一个目录有 `README.md` 和 `sidebar.js` ，则其子目录文件夹不能再有
- 如果md文件的文件名包含中文，在配置nav或sidebar时要加上.md后缀，否则会报404错误
- 运行编译打包命令时报错`TypeError: Invalid value used as weak map key`是因为vuepress2.x 是基于 Vue3.x开发，相比  Vuepress1.x 对 html 的使用更严格，md 文件里面使用<font size="25">一段描述</font>这样类似的 font标签导致编译不通过。

## 首次部署

[官方文档](<https://v2.vuepress.vuejs.org/zh/guide/deployment.html>)

1. 在 `docs/.vuepress/config.js` 中设置正确的 `base`。
若发布到 `https://<USERNAME>.github.io/` ，可省略此步，因为 `base` 默认为 `"/"` 。

若发布到 `https://<USERNAME>.github.io/<REPO>/` ，`<REPO>` 为仓库名，则将 `base` 设置为 `"/<REPO>/"` 。

注意，当前书写的`blog_source`目录下的内容是未经编译的项目源码，而部署在GitHub Pages上供访问的是`blog_source`项目编译打包后的内容，文件夹为`blog_source/docs/.vuepress/dist`,因此我的操作是在github上建立两个仓库，一个存放源码，也就是`blog_source`，一个存放编译打包后的文件内容,也就是`Blog`。

```js
//config.js
module.exports = {
  // 仓库名为 Blog
  base: '/Blog/',
}
```

2. 在 `blog_source` 目录下运行打包命令

```bash
yarn docs:build
```

3. 打包完成后，会生成 `dist` 文件夹，为了方便以后更新，将该文件夹复制，粘贴到`blog_source`目录的父级文件夹下，改名为Blog，与github仓库名称对应，并进入文件夹

```bash
cd ..
cd Blog
```

4. 初始化 git，并添加暂存区，提交本地库

```bash
git init
git add -A
git commit -m 'init liulian-blog' -a
```

5. 为远程仓库起别名

在这一步之前，最好现在github上新建一个空的`Blog`仓库，方便后续操作

```bash
git remote add origin 远程仓库地址
```

6. 拉取远程仓库分支，与本地分支合并

```bash
git pull origin
```

7. 推送本地分支到远程分支

这一步可能会有报错或者超时，是由于github网络连接不稳定，多试几次

```bash
git push origin master
```

8. 开启 GitHub Pages 服务，并选择master分支部署

至此，Blog 的搭建就完成啦！:tada::smile:

## 更新网站内容

1. 将`Blog`文件夹下除`.git`文件夹外的内容全部删除
2. 在 `blog_source` 目录下运行打包命令

```bash
yarn docs:build
```

3. 将生成的dist文件夹里的内容复制到`Blog`文件夹下

4. 文件添加暂存

```bash
git init
git add -A
git commit -m 'Update liulian-blog' -a
```

5. 拉取远程仓库分支，与本地分支合并

```bash
git pull origin
```

7. 推送本地分支到远程分支

这一步可能会有报错或者超时，是由于github网络连接不稳定，多试几次

```bash
git push origin master
```

8. 查看github库中的文件是否更新成功，等待几分钟后，就可以访问pages服务提供的地址，查看博客了
