# HTML

1. HTML5新增的语义化标签：header,nav,article,section,aside,footer
2. HTML5新增的多媒体标签：audio,video
3. label的for属性与表单组件联合使用，可以实现点击标签时也选中表单组件，比如输入框，注意，for的值需要和表单的id相同
4. fieldset标签包裹整组单选按钮，使用legend标签提供分组描述，这种方式可以优化选项组的样式
5. accesskey设置激活元素的快捷键，使用Alt+accesskey触发指定的快捷键的事件，比如为a标签设置快捷键为c,键盘按下Alt+c即可触发a标签的跳转事件，其他标签同理。使用原生js时，使用accessKey可设置或获取快捷键，注意K是大写
6. tabindex用于设置是否捕获焦点，或者指定元素的tab键焦点顺序，如果将div或其他文字标签的tabindex设置为1，联合标签css的:focus设置背景色或文字颜色改变，可以实现用户鼠标点击或tab键切换，焦点停留在文字上时，文字突出显示
