# Vue指令

指令是由Vue框架定义，添加在模版标签上的特殊属性，它们由`v-`作为前缀，为DOM节点提供特殊的响应式行为。

> [!tip]
>
> 如何使用原生的JavaScript给`<a>`标签设置`href`属性？

## 内置指令

### `v-bind`

动态的绑定一个或多个属性，该属性可以是HTML标签的真实属性，也可以是组件的属性。

```vue
<script setup lang="ts">
let link = 'https://vuejs.org/'
let src =
  'https://raw.githubusercontent.com/hughxusu/lesson-front-end/refs/heads/main/static/silder/naz1.jpg'
</script>

<template>
  <a v-bind:href="link" target="_blank" rel="noopener">百度首页</a>
  <hr />
  <img :src="src" alt="naz1" />
</template>
```

* `v-bind:href`是动态绑定`href`的属性
  * `v-bind:`为Vue指令，后面可以接任意属性。
  * `="link"`为TypeScript表达式，与文本插值一样，只能是返回一个值的表达式。
* `v-bind:`指令中`v-bind`可以省略，简写为`:`。

### `v-on`

给元素绑定事件监听器。

```vue
<script setup lang="ts">
import { ref } from 'vue'

let counter = ref(0)
function decrement() {
  counter.value--
}
function add(value: number = 1) {
  counter.value += value
}
</script>

<template>
  <h2>当前计数: {{ counter }}</h2>
  <div class="btns">
    <button v-on:click="counter++">+1</button>
    <button v-on:click="decrement">-1</button>
    <button @click="add(5)">+5</button>
  </div>
</template>

<style scoped lang="less">
.btns {
  display: flex;
  align-items: center;
  button {
    margin: 0 5px;
    font-size: 24px;
  }
}
</style>
```

* `v-on:click`可以动态绑定`click`事件
  * `v-on:`为Vue指令，后面可以接任意事件，包括点击事件、键盘事件等。
  * `@事件名`里的事件名，不是元素的属性，是JavaScript[原生DOM事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Events)类型。
  * `="counter++"`为TypeScript表达式
    * 可以是多行代码，使用`;`分割。
    * 可以是函数名，如：`"decrement"`。
    * 可以是函数调用，如：`"add(5)"`。
    * 函数在`<script>`中定义。
* `v-on:click`指令可以简写为`@click`。

上面的代码中`<style>`标签中使用了Less语法控制`<template>`的样式。

> [!warning]
>
> `v-on`指令是Vue唯一可以使用`;`写多行代码的指令，其他指令只能写一行代码。但开发的最佳实际是，`v-on`指令中也只写一行代码，多行代码需要封装为函数。

`v-on`绑定事件后可以获得事件对象

```vue
<script setup lang="ts">
function aClick(e: MouseEvent) {
  e.preventDefault()
  alert('点击了链接')
}

function btnClick(msg: string, e: MouseEvent) {
  e.preventDefault()
  alert(msg)
}
</script>

<template>
  <a href="https://www.baidu.com" @click="aClick">百度跳转</a>
  <hr />
  <button @click="btnClick('点击了按钮', $event)">点击我</button>
</template>
```

* 绑定函数名，回调函数中直接收事件对象。
* 绑定函数调用，需要手动传入`$event`事件。

事件修饰符：可以为触发事件添加特定的行为，用`.`表示的指令后缀。常用修饰符

* `.stop`阻止事件冒泡。
* `.prevent`阻止默认行为。

```vue
<script setup lang="ts">
function aClick() {
  alert('点击了链接')
}

function btn1Click() {
  alert('点击了按钮1')
}

function btn2Click() {
  alert('点击了按钮2')
}

function upToDiv() {
  alert('事件冒泡了！')
}
</script>

<template>
  <a href="https://www.baidu.com" @click.prevent="aClick">百度跳转</a>
  <hr />
  <div class="btns">
    <div @click="upToDiv">
      <button @click="btn1Click">点击我</button>
    </div>
    <div @click="upToDiv">
      <button @click.stop="btn2Click">点击我</button>
    </div>
  </div>
</template>
```

[更多事件修饰符](https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers)

按键修饰符：给键盘事件添加特定的行为。常用的按键修饰符

* `.enter`监测回车按键。
* `.esc`监测返回按键。

```vue
<script setup lang="ts">
function handleEnter() {
  alert('按下了Enter键')
}

function handleEsc() {
  alert('按下了Esc键')
}
</script>

<template>
  <input type="text" @keyup.enter="handleEnter" />
  <hr />
  <input type="text" @keyup.esc="handleEsc" />
</template>
```

[更多按键修饰符](https://cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers)

