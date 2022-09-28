# JavaScript

## 原生js方法

获取dom对象的方法

```js
document.write() //动态向页面添加内容
document.createElement(Tag) //创建一个html标签对象
document.getElementById(ID) //获得指定Id的对象
document.getElementByClassName(className) //获得指定class值的对象（数组）
document.getElementByTagName（TagName） //获得指定的tag对象
document.body.appendChild(Tag) //向body中添加创建的新的标签对象
document.getElementByName(Name) //获得指定的Name值的对象
document.querySelector() //获取指定的对象
document.querySelectorAll() //获取指定的对象集合
```

获取dom属性的方法

```js
document.title //设置文档的标题（HTML的title标签）
document.style//设置背景页面的颜色
document.style.cssText //设置前景色（文本颜色）
document.innerHTML //设置dom节点内容
```

document对象方法

```js
documen.URL //设置URL属性在同一个窗口打开其他页面
document.cookie //设置和读出cookie
```

## 函数式编程

- 函数式编程的原则

  - 不要改变量或对象-创建新变量和对象，并在需要时从函数返回它们，注意复杂数据类型赋值时，并不是复制，而是对原有变量的引用，此时应该使用深拷贝
  - 总是显示声明函数参数-尽量将函数依赖的变量作为参数传递，这样在修改代码时更清晰明了
- 在原型上实现 map 方法

```js
const s = [23, 65, 98, 5];
Array.prototype.myMap = function(callback) {
    const newArray = [];
    // this 为 s,callback 为传入的操作函数
    for(let i=0;i<this.length;i++){
        newArray.push(callback(this[i]))
    }
    return newArray;
};
const new_s = s.myMap(function(item) {
    return item _ 2;
});
```

- 在原型上实现 filter 方法

```js
Array.prototype.myFilter = function(callback) {
    const newArray = [];
    for(let i=0;i<this.length;i++){
        if(callback(this[i])===true){
        newArray.push(this[i])
        }
    }
    return newArray;
};
```

## 函数柯里化

函数柯里化-不断的返回嵌套的函数，类似闭包，可以存储变量
柯里化在不能一次为函数提供所有的参数情况下很有用。因为它可以将每个函数的调用保存到一个变量中，该变量将保存返回的函数引用，该引用在下一个参数可用时接收该参数

```js
function add(x) {
    return y=>{
        return z=>{
            return x+y+z
        }
    }
}
let add1=add(10)
let add2=add1(20)
console.log(add2(30))
```

## 其他

- 当一个程序中具有相同名称的局部变量和全局变量，局部变量将会优先于全局变量，也就是在函数内及函数外有相同的变量名称时，函数内打印的为函数内变量的值，函数外打印的为函数外变量的值，在函数内改变变量名的值不影响函数外变量的值

- `parseInt('11',2)` 第二个参数指定了字符串中数字的基数（2-36），此处表名 11 是在二进制系统中

- `console.log()`控制台输出，`console.clear()`清空浏览器控制台内容

- `typeof` 检查变量的数据结构或类型，`typeof 0` 返回 number
