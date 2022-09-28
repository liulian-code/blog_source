# npm

[官网传送门](https://www.npmjs.cn/getting-started/what-is-npm/)

## 常用命令

```bash
//npm安装位置,where node同理
where npm 

安装指定包，简写为npm i
npm install 包名

//卸载指定包
npm uninstall 包名

//在当前文件夹下生成package.json文件，注意只能在英文目录下运行，并且文件夹名称不能出现空格
npm init -y
```

## 包的语义化版本规范

* 第一位数字：大版本
* 第二位数字：功能版本
* 第三位数字：bug修复版本

包的版本号提升规则：只要前面的版本号增加，后面的版本号就要归零

## package.json

包管理配置文件

* node_modules文件夹用于存放下载的包，需要添加到.gitignore忽略文件中
* 快速创建package.json文件
* package.json文件节点
  * dependencies节点是用于记录安装了哪些包，以及包的版本号

## npm淘宝镜像

* 使用npm命令切换淘宝镜像
    1. npm config get registry -- 查看当前的下包镜像源
    2. npm config set registry=<https://registry.npm.taobao.org/> --将下包的镜像源切换为淘宝镜像源
* 使用nrm切换淘宝镜像
    1. npm i nrm -g  --安装nrm工具
    2. nrm ls  --检查所有可用的镜像源
    3. nrm use taobao  --将下包的镜像源切换为淘宝镜像源

## 常用的npm包

* i5ting_toc --把md文档转为html页面
    1. npm i -g i5ting_toc  --安装为全局包
    2. i5ting_toc -f 要转换的md文件路径 -o  --文件转换
* nodemon  --由于每次修改代码后手动关闭开始项目非常繁琐，因此使用nodemon自动重启项目
    1. npm i -g nodemon  --安装为全局包
    2. nodemon 需要启动的文件名  --将node启动方式改为nodemon启动

## 开发属于自己的包

* 包规范
  * 所有内容被包含在一个文件夹内
  * 顶层文件夹下必须有package.json文件，index.js包的入口文件,README.md包的说明文档
  * package.json中必须包含name名字,version版本号,main入口文件属性
* package.json配置
  * name：包的名称，唯一，必须确保不会跟npm上的其他包重复
  * version：版本号
  * main：入口文件
  * description：包的简短描述
  * keywords：在npm上搜索此包时相关联的关键字
  * license：开源遵循的协议
* 发布包
  * 注册npm账号
  * 登录npm账号--注意在登录之前，需要先把镜像源改为官方服务器
    * npm login --根据提示输入用户名称，密码，邮箱
  * npm publish --发布包，注意需要在包的根目录下，也就是包含package.json的文件夹内允许此命令
  * npm unpublish 包名 --force ---删除已发布的包
    * 只能删除72小时内发布的包
    * 删除后24小时内，不允许重复发布
