# ES6

只收录了部分比较常用或有用的方法和扩展，详情请见[W3Cschool](https://www.w3cschool.cn/escript6/escript6-m42v37eq.html)

## let & const

新增let和const,都创建块级作用域，只是const不能被修改

**扩展：let, const, var 的区别**

- 它们都有严格的作用域，var一般是全局变量，let定义在块级作用域下
- let和const同一个作用域下面不能重复声明，var可以
- let和var声明的是变量，而const声明的是只读的常量（string,number...不包括复杂数据类型，如对象，数组），并且const在定义时就要进行初始化，不能只声明不赋值
- let和const不存在变量提示，会有暂时性死区，也就是如果在定义以前使用变量会报错，var存在变量提升，在定义之前使用不会报错，但是得到的值为`undefined`

## 解构赋值

解构赋值，只能用于对象或者数组，也可用于嵌套解构，但是等号两边的模式必须相等，不能用于null和undefined,结构不成功会报错，例如：

```js
let [a,b,c]=[1,2,3] //数组的解构赋值
let {a,b}={a:'a',b:'b'} //对象的解构赋值
```

对象的解构和数组不同的是，由于数组的元素是按照次序排列的，变量取值由位置决定，但是对象的属性是没有次序的，变量必须与属性同名，才能取到正确的值，如果变量名和属性名不一致，写法为：

```js
let {a:c}={a:'a',b:'b'}
```

对象的解构可以指定默认值，但是需要注意的是，对象的属性值严格等于undefined，也表示它可以用于解构空数组也不会报错，：

```js
let {x=3} = {} //x=3
let {x=3} = {x} //x=3
let {x=3} = {x:null} //x=null
```

## 字符串扩展  

### 修饰符

- `u`修饰符，用于处理被误认为4个字节的字符
- `y`修饰符，每一次执行都从头部开始匹配

### 模板字符串

是增强版的字符串，用反引号 ' ' 标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

```js
// 普通字符串
`In JavaScript '\n' is a line-feed.`

// 多行字符串
`In JavaScript this is
 not legal.`

// 字符串中嵌入变量
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`
```

- 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
- 模板字符串中嵌入变量，需要将变量名写在 ${} 之中。
- 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。

```js
var x = 1;
var y = 2;
`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"
`${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"
var obj = {x: 1, y: 2};
`${obj.x + obj.y}`
// 3
```

- 模板字符串之中还能调用函数。

```js
function fn() {
  return "Hello World";
}
`foo ${fn()} bar`
// foo Hello World bar
```

- 如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的 toString 方法。
- 如果模板字符串中的变量没有声明，将报错。

```js
// 变量place没有声明
var msg = `Hello, ${place}`;
// 报错
```

- 模板字符串允许嵌套

### `contains()`

`contains()`返回布尔值，表示是否找到了参数字符串

```js
'abc'.contains('a') //true
```

### `startsWith()`

`startsWith()` 返回布尔值，表示参数字符串是否在源字符串头部

```js
'abc'.startsWith('a') //true
```

### `endsWith()`

`endsWith()` 返回布尔值，表示参数字符串是否在源字符串尾部

```js
'abc'.endsWith('a') //false
```

### `repeat()`

`repeat()` 返回一个新字符串，表示将源字符串重复n次

```js
'abc'.repeat(2) //abcabc
```

## 数值的扩展

### `Number.isFinite()`

判断参数是否为无穷大 ，与isFinite()的不同在于，isFinite() 是先调用Number()将非数字转为数值后再进行判断，而新方法对于非数值一律返回false

### `Number.isNaN()`

判断参数是否为NaN，与isNaN()的不同在于，isNaN() 是先调用Number()将非数字转为数值后再进行判断，而新方法对于非数值一律返回false

### `Number.parseInt()`  `Number.parseFloat()`

将字符串或者数值转为整数/浮点数并返回

### `Number.isInteger()`

用来判断一个值是否为整数。需要注意的是，在javaScript内部，整数和浮点数使用同样的存储方法，所以3和3.0被视为同一个数

### `Number.MAX_SAFE_INTEGER`

最大常量

### `Number.EPSILON`

表示一个可以接受的最小误差范围。JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。
引入一个这么小的量的目的，在于为浮点数计算，即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等。

### `Number.MIN_SAFE_INTEGER`

最小常量

### `Number.isSafeInteger()`

判断一个整数是否在javaScript能准确表达的最大常量和最小常量范围之间

### `Math.trunc()`

去除一个数的小数部分，返回整数部分。对于空值和无法截取整数的值，返回 NaN 。

### `Math.sign()`

Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。对于那些无法转为数值的值，会返回 NaN 。

它会返回五种值。

- 参数为正数，返回 +1 ；
- 参数为负数，返回 -1 ；
- 参数为 0，返回 0 ；
- 参数为-0，返回 -0 ;
- 其他值，返回 NaN 。

```js
Math.sign(-5) // -1
Math.sign(5) // +1
Math.sign(0) // +0
Math.sign(-0) // -0
Math.sign(NaN) // NaN
```

### `Math.imul()`

Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数。

Math.imul(2, 4)   // 8
Math.imul(-1, 8)  // -8
Math.imul(-2, -2) // 4

### BigInt 数据类型

- BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。

```js
const a = 2172141653n;
const b = 15346349309n;
// BigInt 可以保持精度
a *b // 33334444555566667777n
// 普通整数无法保持精度
Number(a)* Number(b) // 33334444555566670000
```

- 为了与 Number 类型区别，BigInt 类型的数据必须添加后缀 n 。

```js
1234 // 普通整数
1234n // BigInt
// BigInt 的运算
1n + 2n // 3n
```

- igInt 同样可以使用各种进制表示，都要加上后缀 n 。

```js
0b1101n // 二进制
0o777n // 八进制
0xFFn // 十六进制
```

- BigInt 与普通整数是两种值，它们之间并不相等。

```js
42n === 42 // false
```

- typeof 运算符对于 BigInt 类型的数据返回 bigint 。

```js
typeof 123n // 'bigint'
```

- BigInt 可以使用负号（ - ），但是不能使用正号（ + ），因为会与 asm.js 冲突。

```js
-42n // 正确
+42n // 报错
```

### BigInt 对象

- JavaScript 原生提供 BigInt 对象，可以用作构造函数生成 BigInt 类型的数值。转换规则基本与 Number() 一致，将其他类型的值转为 BigInt。

```js
BigInt(123) // 123n
BigInt('123') // 123n
BigInt(false) // 0n
BigInt(true) // 1n
```

- `BigInt()` 构造函数必须有参数，而且参数必须可以正常转为数值，下面的用法都会报错。参数如果是小数，也会报错。

```js
new BigInt() // TypeError
BigInt(undefined) //TypeError
BigInt(null) // TypeError
BigInt('123n') // SyntaxError
BigInt('abc') // SyntaxError
BigInt(1.5) // RangeError
BigInt('1.5') // SyntaxError
```

- BigInt 对象继承了 Object 对象的两个实例方法。
  - BigInt.prototype.toString()
  - BigInt.prototype.valueOf()

- 它还继承了 Number 对象的一个实例方法。
  - BigInt.prototype.toLocaleString()

- 它提供了三个静态方法。
  - BigInt.asUintN(width, BigInt) ： 给定的 BigInt 转为 0 到 2width - 1 之间对应的值。
  - BigInt.asIntN(width, BigInt) ：给定的 BigInt 转为 -2width - 1 到 2width - 1 - 1 之间对应的值。
  - BigInt.parseInt(string[, radix]) ：近似于 Number.parseInt() ，将一个字符串转换成指定进制的 BigInt。

#### 转换规则

- 可以使用Boolean()、Number()和String()这三个方法，将 BigInt 可以转为布尔值、数值和字符串类型。注意最后一个例子，转为字符串时后缀 n 会消失。

```js
Boolean(0n) // false
Boolean(1n) // true
Number(1n)  // 1
String(1n)  // "1"
```

- 取反运算符（ ! ）也可以将 BigInt 转为布尔值。

```js
!0n // true
!1n // false

```

#### 数字运算

- 数学运算方面，BigInt 类型的 + 、 - 、 * 和 ** 这四个二元运算符，与 Number 类型的行为一致。除法运算 / 会舍去小数部分，返回一个整数。

```js
9n / 5n
// 1n
```

- BigInt 不能与普通数值进行混合运算。

```js
1n + 1.3 // 报错
```

## 数组的扩展

### 扩展运算符

扩展运算符（spread）是三个点（ ... ）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

```js
console.log(...[1, 2, 3])
// 1 2 3
console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]
```

#### 扩展运算符的运用

- 复制数组

```js
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```

- 合并数组

需要注意的是这两种方法都是浅拷贝，也就是说虽然是新数组，但是它们的成员都是对原数组成员的引用。

```js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

- 与解构赋值结合

扩展运算符可以与解构赋值结合起来，用于生成数组。

```js
const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []
```

如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

```js
const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错
const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错
```

- 字符串

扩展运算符还可以将字符串转为真正的数组。

```js
[...'hello']
// [ "h", "e", "l", "l", "o" ]
```

### `Array.from()`

将一个类数组对象或者可遍历对象转换成一个真正的数组。可以接收第二个参数，用于对每个元素进行处理，类似于map方法

1. **将类数组对象转换为真正的数组**

    要将一个类数组对象转换为一个真正的数组，必须具备以下条件

    - 该类数组对象必须具有length属性，用于指定数组的长度，并且length属性值必须与对象拥有的属性个数对应，否则多余的属性将被忽略。如果没有length属性，那么转换后的数组是一个空数组。
    - 该类数组对象的属性名必须为数值型或字符串型的数字

    ```js
    //有length属性
    let arrayLike = {
        0:'tom',
        1:'65',
        2:'男',
        3:['English','Math'],
        'length':4
    }
    let arr = Array.from(arrayLike)
    console.log(arr) //['tom','65','男',['English','Math']]
    ```

    ```js
    //没有length属性
    let arrayLike = {
        0:'tom',
        1:'65',
        2:'男',
        3:['English','Math'],
    }
    let arr = Array.from(arrayLike)
    console.log(arr) //[undefined,undefined,undefined,undefined]
    ```

    ```js
    //length属性值与实际的属性个数不相符
    let arrayLike = {
        0:'tom',
        1:'65',
        2:'男',
        3:['English','Math'],
        'length':3
    }
    let arr = Array.from(arrayLike)
    console.log(arr) //['tom','65','男']
    ```

2. **将Set结构的数据转换为真正的数组**

    ```js
    let arr = [1,2,3,4,5]
    let set = new Set(arr)
    console.log(Array.from(set)) //[1,2,3,4,5]
    ```

    ```js
    //接收第二个参数，用于对每个元素进行处理，处理完成后返回新的数组
    let arr = [1,2,3,4,5]
    let set = new Set(arr)
    console.log(Array.from(set, item => item+1)) //[2,3,4,5,6]
    ```

3. **将字符串转换为数组**

    ```js
    let str = 'hello world'
    console.log(Array.from(str)) //['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']
    ```

4. **Array.from参数是一个真正的数组**

    ```js
    console.log(Array.from([1,2,3,4,5]))
    ```

    Array.from会返回一个一模一样的新数组

### `Array.of()`

将一组值转换为数组。比如:

```js
Array.of(7) //[7]
Array.of(1,2,3) // [1,2,3]
Array.of(undefined) //[undefined]
```

**扩展：Array.of() 和 Array 构造函数之间的区别？**

Array.of() 和 Array 构造函数之间的区别在于处理整数参数，也就是他们都只有一个参数，并且参数为整数时，Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为 7 的空数组（注意：这是指一个有 7 个空位 (empty) 的数组，而不是由 7 个undefined组成的数组）

```js
Array.of(7) //[7]
Array(7) //array of 7 empty slots
```

### `arr.find()`

返回第一个符合条件的数组元素，如没有符合元素的返回undefined

```js
[1,2,3,4].find((item,index,array)=>{
    return item>2
})
//结果为：3
```
  
### `arr.findIndex()`

返回第一个符合条件的数组元素的位置，如果都不符合返回-1

```js
[1,2,3,4].findIndex((item,index,array)=>{
    return item>2
}) 
//结果为：2
```

### `arr.fill()`

- 返回一个被value替换的数组，value可以是单个值，也可以是一个数组。
- 第二，三参数可以指定填充的起始位置和结束位置，替换包含起始位置，不包含结束位置，如果不指定起始位置和结束位置，则替换数组内所有元素。
- 如果是被替换的arr为空数组，始终返回空数组。

    ```js
    //arr.fill(value,startIndex,endIndex)

    //1.value为单个值，不指定起始和结束位置
    [1,2,3].fill(4) //[4,4,4]

    //2.value为单个值，指定起始和结束位置
    [1,2,3].fill(4,0,2) //[4,4,3]

    //3.value为数组，指定起始和结束位置
    [1,2,3].fill([4,5],0,2) //[[4,5],[4,5],3]

    //4.被替换的arr为空数组
    [].fill(4,0,2) //[]

    ```

### `arr.copyWithin()`

数组实例的copyWithin() 方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

```js
Array.prototype.copyWithin(target, start = 0, end = this.length)
```

它接受三个参数。这三个参数都应该是数值，如果不是，会自动转为数值。

- target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
- start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
- end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

### `arr.includes()`

返回一个布尔值，表示某个数组是否包含给定的值，与字符串的 includes 方法类似。
它接收两个参数

- target（必需）：表示包含的给定值
- index（可选）：表示搜索的起始位置，默认为 0 。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为 -4 ，但数组长度为 3 ），则会重置为从 0 开始。

```js
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true

[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
```

### `arr.keys()` `arr.values()` `arr.entries()`

- keys() 是对键名的遍历
- values() 是对键值的遍历
- entries() 是对键值对的遍历。

  都返回一个遍历器对象，可以用 `for...of` 循环进行遍历

    ```js
    for (let index of ['a', 'b'].keys()) {
    console.log(index);
    }
    // 0
    // 1
    for (let elem of ['a', 'b'].values()) {
    console.log(elem);
    }
    // 'a'
    // 'b'
    for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"
    ```

  如果不使用 for...of 循环，可以手动调用遍历器对象的 next 方法，进行遍历。

    ```js
    let letter = ['a', 'b', 'c'];
    let entries = letter.entries();
    console.log(entries.next().value); // [0, 'a']
    console.log(entries.next().value); // [1, 'b']
    console.log(entries.next().value); // [2, 'c']

    ```

### `arr.flat()`

数组的成员有时还是数组， `arr.flat()`用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

- flat() 默认只会“拉平”一层，如果想要“拉平”多层的嵌套数组，可以将 flat() 方法的参数写成一个整数，表示想要拉平的层数，默认为1。

```js
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
```

- 如果不管有多少层嵌套，都要转成一维数组，可以用 Infinity 关键字作为参数。

```js
[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]
```

- 如果原数组有空位， flat() 方法会跳过空位。

```js
[1, 2, , 4, 5].flat()
// [1, 2, 4, 5]
```

### `arr.flatMap()`

`flatMap()`方法对原数组的每个成员执行一个函数（相当于执行 `Array.prototype.map()` ），然后对返回值组成的数组执行 flat() 方法。该方法返回一个新数组，不改变原数组。

```js
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

- `flatMap()` 只能展开一层数组。
下面代码中，遍历函数返回的是一个双层的数组，但是默认只能展开一层，因此 flatMap() 返回的还是一个嵌套数组。

```js
// 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()
[1, 2, 3, 4].flatMap(x => [[x * 2]])
// [[2], [4], [6], [8]]
```

- `flatMap()` 方法的参数是一个遍历函数，该函数可以接受三个参数，分别是当前数组成员、当前数组成员的位置（从零开始）、原数组。
- `flatMap()` 方法还可以有第二个参数，用来绑定遍历函数里面的 this 。

```js
arr.flatMap(function callback(currentValue[, index[, array]]) {
  // ...
}[, thisArg])
```

- 通过现有数组生成新数组，称为数组推导，比如：var 数组2=[for(i of 数组1) i*2] ，循环数组1,将每个元素乘以2，作为数组2，for...of循环可以附加if语句，也可以多个for...of循环，但是返回的表达式写在最后。需要注意的是，新数组会立刻在内存中生成，如果原数组是一个很大的数组，将会非常耗费内存。
- Array.observe(arr,callback),Array.unobserve(arr,callback) 用于监听（取消监听）数组的变化，指定回调函数。

## 对象的扩展

### super 关键字

我们知道， this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字 super ，指向当前对象的原型对象。

注意， super 关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。

```js
const proto = {
  foo: 'hello'
};
const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};
Object.setPrototypeOf(obj, proto);
obj.find() // "hello"
```

### 链判断运算符

在实际编程中，如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。
层层判断非常麻烦，因此 ES2020 引入了“链判断运算符”（optional chaining operator） ?. ，简化写法。
比如，要读取 message.body.user.firstName：

```js
//安全写法
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';

//三元运算符
const fooInput = myForm.querySelector('input[name=foo]')
const fooValue = fooInput ? fooInput.value : undefined

//链判断运算符
const firstName = message?.body?.user?.firstName || 'default';
const fooValue = myForm.querySelector('input[name=foo]')?.value
```

链判断运算符有三种用法。

- obj?.prop // 对象属性
- obj?.[expr] // 同上
- func?.(...args) // 函数或对象方法的调用

### `Object.is()`

它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。

```js
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
```

不同之处只有两个：一是 +0 不等于 -0 ，二是 NaN 等于自身。

```js
+0 === -0 //true
NaN === NaN // false
Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

### `Object.assign`

Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

```js
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

Object.assign 方法的第一个参数是目标对象，后面的参数都是源对象。
注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

```js
const target = { a: 1, b: 1 };
const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

如果只有一个参数，Object.assign 会直接返回该参数。

```js
const obj = {a: 1};
Object.assign(obj) === obj // true
```

如果该参数不是对象，则会先转成对象，然后返回。

```js
typeof Object.assign(2) // "object"
```

由于 undefined 和 null 无法转成对象，所以如果它们作为参数，就会报错。

```js
Object.assign(undefined) // 报错
Object.assign(null) // 报错
```

### `object.observe()` `object.unobserve()`

`object.observe(监听对象, callback, [事件种类(add,update,delete,setPrototype)])`，`object.unobserve(监听对象, callback)`,用来监听/取消监听某对象

## symbol

symbol是一种新的原始数据类型，产生一个独一无二的值，可以接收参数。可以通过name属性读取。symbol类型作为属性名，可以被遍历，可以通过Object.getOwnPropertySymbols()和Object.getOwnPropertyKeys() 获取该属性

```js
var mySymbol = symbol('test')
mySymbol.name // test
typeof mySymbol //symbol
```

## Proxy

Proxy可以理解为在目标对象之前，架设一层拦截，外界对该对象的访问，都必须通过这层拦截,可以对目标对象进行过滤和改写。

- get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。

下面代码表示，如果访问目标对象不存在的属性，会抛出一个错误。如果没有这个拦截函数，访问不存在的属性，只会返回 undefined。

```js
var person = {
  name: "张三"
};
var proxy = new Proxy(person, {
  get: function(target, propKey) {
    if (propKey in target) {
      return target[propKey];
    } else {
      throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
    }
  }
});
proxy.name // "张三"
proxy.age // 抛出一个错误
```

- set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。

假定 Person 对象有一个 age 属性，该属性应该是一个不大于 200 的整数，那么可以使用 Proxy 保证 age 的属性值符合要求。

```js
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }
    // 对于满足条件的 age 属性以及其他属性，直接保存
    obj[prop] = value;
  }
};
let person = new Proxy({}, validator);
person.age = 100;
person.age // 100
person.age = 'young' // 报错
person.age = 300 // 报错
```

## 函数的扩展

- ES6允许为函数的参数设置默认值，任何带有默认值的参数，都被视为可选参数。不带默认值的参数，都被视为必需参数。
- rest参数（...变量名），用于获取函数的多余参数，将其多余的参数放入一个数组中。注意，rest参数之后不能再有其他参数，否则会报错。

    ```js
    function add(...value){}
    add(2,3,4,5)
    ```  

- 扩展运算符（...）将一个数组转化为逗号分隔的参数序列

    ```js
    Math.max(..[1,2,3,4]) //Math.max(1,2,3,4)

    ```

- 箭头函数

    ```js
    基本格式 var f=v=>v 等同于 var f = function (v) {return v}
    ```  

  - 不需要参数时使用圆括号代表参数部分，只有一个参数可以直接写参数，省略圆括号
  - 代码块部分只有一条语句可以省略大括号和return 直接写需要返回的数据，多于一句代码则必须写大括号并且使用return 语句返回。如果返回的是一个对象，必须在对象外面加上括号。
  - 函数体内的this对象，绑定定义时所在的对象，而不是使用时所在的对象，也就是如果你使用了箭头函数，并在其代码块（{}）中调用this,此时会到使用箭头函数的代码块的父代码块中寻找你需要的this方法或者数据。
  - 由于this在箭头函数中被绑定，所以不能使用call(),apply(),bind()这些方法去改变this指向
  - 箭头函数不可以被当做构造函数，也就是不能使用new命令，否则会报错。
  - 箭头函数不可以使用arguments对象，该对象在函数体内不存在

## Set数据结构

- set类似数组，但是其成员是唯一的，没有重复的值。可以用于数组去重new set([1,2,,2,3,4]) // [1,2,3,4]
- 向set加入值的时候不会发生类型转换，也就是在set中，'5'和5是不同的值
- Set结构有以下属性
  - Set.prototype.constructor 构造函数
  - Set.prototype.size 返回Set的成员总数

- Set结构有以下方法
  - add(value) 添加值
  - delete(value) 删除值
  - has(value) 返回一个布尔值，表示该值是否是Set的成员
  - clear() 清除所有成员

## Map数据结构

- Map结构类似对象，也是对键值对的集合，跟对象不同的是，对象的键只能是字符串，但是Map的键不限于字符串，对象也可以当做键。
- 只有对同一个对象的引用，Map结构才将其视为同一个键。
- 基本写法

    ```js
    const map = new Map()
    map.set(键名, 值)

    ```

- 错误写法

    ```js
    const map = new Map('a',123)

    ```

- Map结构有以下属性和方法
  - size 返回成员总数
  - set(key,value) 设置一个键值对，可以接收一个数组进行初始化
  - get(key) 读取一个键
  - has(key) 返回一个布尔值，表示某个键是否在Map结构中
  - delete(key) 删除某个键
  - clear() 清空所有的键值对

- Map遍历器
  - map.keys() 返回一个键名的遍历数组，可以用for(let i of 数组.keys()){}进行遍历
  - map.values() 返回一个键值的遍历数组，可以用for(let v of 数组.values()){}进行遍历
  - map.entries() 返回一个键值对的遍历数组，可以用for(let [i,v] of 数组.entries()){}进行遍历
  - map.forEach(function(value,key,map){})

- WeakMap设计的目的在于，键名是对象的弱引用，所以其对应的对象可能会被自动回收。WeakMap的专用场合就是，它的键对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄露
  - set(key,value) 设置一个键值对，可以接收一个数组进行初始化
  - get(key) 读取一个键
  - has(key) 返回一个布尔值，表示某个键是否在Map结构中
  - delete(key) 删除某个键
  - clear() 清空所有的键值对

## Generator函数

- Generator函数的特征：一是function关键字后有星号，二是函数体内部使用yield语句定义遍历器的每个成员。

    ```js
    functionhelloWorld(){
        yield 'hello'
        yield 'world'
        return 'ending'
    }
    var hw = hellWorld()
    ```  

- 直接调用函数是不执行的，而是返回一个遍历器，此时暂停执行。
- 使用 函数名.next方法调用，每次调用都从上一次停下来的地方开始执行，直到遇到下一个yield语句。返回一个包含value和done两个属性的对象。value是当前遍历位置的键，done是表示遍历是否结束的布尔值。值得注意的是，即使已经完成所有语句的调用，下一次调用时依然可以调用不会报错，只是返回value为undefined。

    ```js
    hw.next() //{value:'hello', done: true}
    hw.next() //{value:'world', done: false}
    hw.next() //{value:'ending', done: true}
    hw.next() //{value:undefined, done: true}

    ```

- for...of可以直接遍历Generator函数，不需要使用.next方法

    ```js
    for(hw of hellWorld()){
        console.log(hw) //hello
    }

    ```

- yield 后面可以跟遍历器，需要使用yield*语句

## Promise

### 基本用法

Promise对象可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调地狱。可以用来封装ajax方法。

```js
var getInfo = new Promise(function(resolve,reject){
    if(true){
        //操作成功
        resolve(info)
    }else{
        //操作失败
        reject(msg)
    }
})
getInfo.then(function(info){
//处理成功后的数据
},function(msg){
//失败
})
```

### `Promise.prototype.then()`

链式调用，第一个then结束以后，将返回的结果，作为参数，传入第二个then。如果前一个回调函数返回的是Promise对象，这是后一个回调函数就会等待该Promise对象有了运行结果，才进一步调用。

```js
getInfo.then(function(info){
    return new Promist(function(resolve,reject){
        resolve('1')
    })
}).then(function(value){
    console.log(value) //1
}).catch(function(error){
    //处理前两个回调的错误
}) 
```

### `Promise.prototype.catch()`

`Promise.prototype.catch()`方法是 `.then(null, rejection)`或 `.then(undefined, rejection)`的别名，用于指定发生错误时的回调函数。

跟传统的 try/catch 代码块不同的是，如果没有使用 catch() 方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。

```js
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

### `Promise.prototype.finally()`

`finally()`方法用于指定不管Promise对象最后状态如何，都会执行的操作。

下面代码中，不管 promise 最后的状态，在执行完 then 或 catch 指定的回调函数以后，都会执行 finally 方法指定的回调函数。

```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```

### `Promise.all()`

`Promise.all()`方法用于将多个Promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.all([p1, p2, p3]);
```

上面代码中， Promise.all() 方法接受一个数组作为参数， p1 、 p2 、 p3 都是 Promise 实例，如果不是，就会先调用下面讲到的 Promise.resolve 方法，将参数转为 Promise 实例，再进一步处理。另外， Promise.all() 方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。

- p 的状态由 p1 、 p2 、 p3 决定，分成两种情况。

    1. 只有 p1 、 p2 、 p3 的状态都变成 fulfilled ， p 的状态才会变成 fulfilled ，此时 p1 、 p2 、 p3 的返回值组成一个数组，传递给 p 的回调函数。
    2. 只要 p1 、 p2 、 p3 之中有一个被 rejected ， p 的状态就变成 rejected ，此时第一个被 reject 的实例的返回值，会传递给 p 的回调函数。

- 注意，如果作为参数的 Promise 实例，自己定义了 catch 方法，那么它一旦被 rejected ，并不会触发 Promise.all() 的 catch 方法。

### `Promise.race()`

`Promise.race()` 方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.race([p1, p2, p3]);
```

上面代码中，只要 p1 、 p2 、 p3 之中有一个实例率先改变状态， p 的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给 p 的回调函数。

### `Promise.allSettled()`

`Promise.allSettled()` 方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是 fulfilled 还是 rejected ，包装实例才会结束。

该方法返回的新的 Promise 实例，一旦结束，状态总是 fulfilled ，不会变成 rejected 。状态变成 fulfilled 后，Promise 的监听函数接收到的参数是一个数组，每个成员对应一个传入 Promise.allSettled() 的 Promise 实例。

```js
const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);
const allSettledPromise = Promise.allSettled([resolved, rejected]);
allSettledPromise.then(function (results) {
  console.log(results);
});
// [
//    { status: 'fulfilled', value: 42 },
//    { status: 'rejected', reason: -1 }
// ]
```

上面代码中， Promise.allSettled() 的返回值 allSettledPromise ，状态只可能变成 fulfilled 。它的监听函数接收到的参数是数组 results 。该数组的每个成员都是一个对象，对应传入 Promise.allSettled() 的两个 Promise 实例。每个对象都有 status 属性，该属性的值只可能是字符串 fulfilled 或字符串 rejected 。 fulfilled 时，对象有 value 属性， rejected 时有 reason 属性，对应两种状态的返回值。

下面是返回值用法的例子。

```js
const promises = [ fetch('index.html'), fetch('https://does-not-exist/') ];
const results = await Promise.allSettled(promises);
// 过滤出成功的请求
const successfulPromises = results.filter(p => p.status === 'fulfilled');
// 过滤出失败的请求，并输出原因
const errors = results
  .filter(p => p.status === 'rejected')
  .map(p => p.reason);
```

有时候，我们不关心异步操作的结果，只关心这些操作有没有结束。这时， Promise.allSettled() 方法就很有用。如果没有这个方法，想要确保所有操作都结束，就很麻烦。 Promise.all() 方法无法做到这一点。

### `Promise.any()`

`Promise.any()`方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只要参数实例有一个变成 fulfilled 状态，包装实例就会变成 fulfilled 状态；如果所有参数实例都变成 rejected 状态，包装实例就会变成 rejected 状态。该方法目前是一个第三阶段的提案 。

`Promise.any()` 跟 `Promise.race()` 方法很像，只有一点不同，就是不会因为某个 Promise 变成 rejected 状态而结束。也就是说`Promise.race()`如果第一个参数实例改变了状态，包装实例跟着改变，`Promise.any()`则是等到某个参数水里变成fulfilled 状态，包装状态才会改变

```js
const promises = [
  fetch('/endpoint-a').then(() => 'a'),
  fetch('/endpoint-b').then(() => 'b'),
  fetch('/endpoint-c').then(() => 'c'),
];
try {
  const first = await Promise.any(promises);
  console.log(first);
} catch (error) {
  console.log(error);
}
```

上面代码中， Promise.any() 方法的参数数组包含三个 Promise 操作。其中只要有一个变成 fulfilled ， Promise.any() 返回的 Promise 对象就变成 fulfilled 。如果所有三个操作都变成 rejected ，那么 await 命令就会抛出错误。

Promise.any() 抛出的错误，不是一个一般的错误，而是一个 AggregateError 实例。它相当于一个数组，每个成员对应一个被 rejected 的操作所抛出的错误。下面是 AggregateError 的实现示例。

捕捉错误的例子：

```js
var resolved = Promise.resolve(42);
var rejected = Promise.reject(-1);
var alsoRejected = Promise.reject(Infinity);
Promise.any([resolved, rejected, alsoRejected]).then(function (result) {
  console.log(result); // 42
});
Promise.any([rejected, alsoRejected]).catch(function (results) {
  console.log(results); // [-1, Infinity]
});
```

## export 和 import

- 逐一导入

    ```js
    //a.js
    export const a=1
    export function fc(){}
    ```

    ```js
    //b.js
    import {a,fc} from 'a.js'
    ```

- 整体加载

    ```js
    //a.js
    export const a=1
    export function fc(){}
    ```

    ```js
    //b.js
     export from 'a.js'
     module a from 'a.js'
     console.log(a.a)
     console.log(fc())
    ```

- 默认导出(一个模块只能有一个默认方法)

    ```js
    //a.js
    export defaule function fc(){}
    ```

    ```js
    //b.js
     import fc from 'a.js'
     ```
  
- 选择性导出

    ```js
    //a.js
    const a=()=>{},const b=()=>{}
    export {a,b}
    ```
