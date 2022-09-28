# Vue常用插件可以更加

## [nprogress](https://www.npmjs.com/package/nprogress) 
web请求进度条-一般在请求请求拦截器，响应拦截器中使用，实现在请求接口时显示进度条的效果

下载：

```
npm i --save nprogress
```

在需要的文件中引入：

```js
import nProgress from 'nprogress' //引入
import 'nprogress/nprogress.css //引入样式
```

使用：

```js
nProgress.start() //进度条开始
nProgress.done() //进度条结束
```

完整实例代码：

```js
import axios from "axios";
//引入进度条
import nProgress from "nprogress";
import 'nprogress/nprogress.css'
//1.利用axios对象的方法create,创建一个axios实例
//2.requests就是axios,只是稍微配置一下
const requests = axios.create({
    baseURL: '/api', //配置基础路径
    timeout: 5000, //请求超时时间
})
//请求拦截器:在发送请求前，会触发请求拦截器，可以在请求发送出去之前做一些事情
requests.interceptors.request.use((config) => {
    nProgress.start()
    return config
})
//响应拦截器：在请求响应后，会触发响应拦截器，可以在此时做请求成功的回调和请求失败的回调
requests.interceptors.response.use((res) => {
    nProgress.done()
    return res.data
}, (error) => {
    return Promise.reject(new Error('faile'))
})
export default requests
```

## [Lodash](https://www.lodashjs.com/) 
js实用工具库

下载：

```
npm i --save lodash
```
引入：

```js
import _ from 'lodash' //全部引入-不推荐，对性能不太友好
import throttle from 'lodash/throttle' //按需引入-节流函数
```
使用：

```js
_.debounce(函数,时间)
```
防抖函数，适用于搜索，核心是setTiemOut,在每次执行前取消上一次的定时器，并且在最后一次执行在规定时间之后才会触发，简单来说，在多次触发的情况下，只执行最后一次
* 注意此处的回调函数不能使用箭头函数，可能导致上下文this出错
* 一般用于搜索操作防抖：`input.oninput = _.debounce(函数，时间)`

```js
_.throttle(函数,时间)
```
节流函数，在规定的时间范围内，不会重复调用，原理是保存第一次创建定时器执行的时间，在后面的每次执行时，判断当前时间是否大于规定时间，如果大于，则再次创建定时器执行，简单来说，就是在多次触发的情况下，在规定时间内，只执行一次，将频繁触发，变成少量触发

## [mockjs](http://mockjs.com/)  
模拟数据接口

* 下载：

```
npm i --save mockjs
```

* 第一步：src下创建文件夹mock
* 第二步：mock文件夹下创建需要的json文件，并且准备好json数据-注意json数据不能有多余的空格，需要格式化，并且不需要写export，因为webpack中图片资源和json数据是默认暴露的

```js
//banner.js
[
    {
        "id": 1,
        "imgUrl": "/images/banner1.jpg"
    },
    {
        "id": 2,
        "imgUrl": "/images/banner2.jpg"
    },
    {
        "id": 3,
        "imgUrl": "/images/banner3.jpg"
    },
    {
        "id": 4,
        "imgUrl": "/images/banner4.jpg"
    }
]
```

* 第三步：将mock数据需要的图片根据json数据的路径，放置在public下（public文件打包的时候，会将文件夹下的文件，原封不动的打包在dist文件夹下）
* 第四步：创建mockServe.js文件，通过mock创建虚拟数据-不需要对外暴露

```js
//mockServe.js
import Mock from 'mockjs'
import banner from './banner.json' //引入json数据
Mock.mock('/mock/banner/',{code:200,data:banner}) //mock接口--参数1：请求的接口 参数2：返回的模拟数据
```

* 第五步：mockServe.js需要在main.js中引入，相当于执行一次

```js
//main.js
import '@/mock/mockServe.js'
```

## [Swiper](https://www.swiper.com.cn/)
轮播图插件，常用于移动端网站的内容触摸滑动

下载-尽量不使用最新版本，避免bug：

```
npm i --save swiper@5 
```

在需要使用轮播图的组件中引用swiper：

```js
import Swiper from 'swiper'
//在结构完成之后，初始化swiper实例化，详情见swiper文档

```

在main.js中引入swiper.css：

```js
import 'swiper/css/swiper.css'
```

## [moment](http://momentjs.cn/) 
日期处理类库

* 下载：
```
npm i moment
```
使用示例：

```
moment() 获取当前时间
date.format() 格式化
```
更多使用方法见[官方网站](http://momentjs.cn/) 

