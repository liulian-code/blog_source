import vue_sidebar from '../notes/vue/sidebar'
import js_siderbar from '../notes/javaScript/siderbar'
import node_siderbar from '../notes/nodejs/sidebar'
export default {
    '/notes/vuepress': ['/notes/vuepress/vuepress'],
    '/notes/html': ['/notes/html/index.md'],
    '/notes/css': ['/notes/css/index.md', '/notes/css/flex布局', '/notes/css/grid布局'],
    '/notes/less': ['/notes/less/less.md'],
    '/notes/javaScript': js_siderbar,
    '/notes/vue': vue_sidebar,
    '/notes/git': ['/notes/git/git.md'],
    '/notes/npm': ['/notes/npm/index.md'],
    '/notes/nodejs': node_siderbar,
    '/notes/webpack': ['/notes/webpack/webpack基础.md'],
}