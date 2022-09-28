# Math方法

## `Math.round()`

```js
Math.round(x)
```

返回x四舍五入后最接近的整数

## `Math.pow()`

```js
Math.pow(x,y)
```

返回x的y次幂

## `Math.sqrt()`

```js
Math.sqrt(x)
```

返回x的平方根

## `Math.abs()`

```js
Math.abs(x)
```

返回x的绝对（正）值，比如Math.abs(-2.5)返回2.5

## `Math.ceil()`

```js
Math.ceil(x)
```

返回x上舍入最接近的整数，比如Math.ceil(4.4)返回5

## `Math.floor()`

```js
Math.floor(x)
```

返回x下舍入最接近的整数

## `Math.min()`

```js
Math.min(x,y,z)
```

返回参数列表中最低值

## `Math.max()`

```js
Math.max(x,y,z)
```

返回参数列表中最高值-注意参数不能传入数组，而是单个元素，可用...将数组展开为单个元素

## `Math.random()`

返回0-1之间的随机数

## 随机整数

```js
Math.floor(Math.random()*(myMax-myMin+1)+myMin)
```

生成某个范围内的随机整数
