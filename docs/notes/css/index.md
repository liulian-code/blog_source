# CSS

1. css利用阴影创建图形(示例为月牙，可用于创建桃心形状)

    ```css:no-line-numbers
    background-color: #fff; --设置图形颜色为空白    
    border-radius: 50%; --设置圆角边框            
    box-shadow: 25px 10px 0 0 blue inset; --设置阴影：左右阴影大小，上下阴影大小，模糊值，阴影大小，阴影的位置在上或者下，inset为上
    ```

2. transform

    ```css
    transform:scale(1)  可以用来改变元素的显示比例
    transform:skewX() 沿着X轴（横向）翻转指定的角度
    transform:skewY() 沿着Y轴（垂直）翻转指定角度
    ```

3. 线型渐变

    ```css
    //渐变 
    background: linear-gradient(角度(90deg),渐变开始颜色，渐变颜色2，渐变颜色3) 至少有两种颜色
    //条纹元素-可设置多个区间颜色
    background: repeating-linear-gradient(
        90deg, --角度      
        yellow 0px,  ---第一个区间开始颜色及位置      
        yellow 40px, --第一个区间结束颜色及位置      
        black 40px, --第二个区间开始颜色及位置      
        black 80px --第二个区间结束颜色及位置   
     );
    ```

4. 可使用 hsl() 函数使用色相、饱和度、亮度来定义颜色。
5. 视窗单位：vw(视窗宽度 100vw),vh(视窗高度 100vh),vmin(视窗高度和宽度中较小的一个为标准 100vmin),vmax(视窗高度和宽度中较大的一个为标准 vmax)
