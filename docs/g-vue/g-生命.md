# 生命周期

每个Vue组件实例在创建时都需要经历一系列的初始化步骤。在此过程中，Vue框架会运行生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。

Vue 3的生命周期过程

<img src="./assets/lifecycle_zh-CN.W0MNXI0C.png" style="zoom:60%;" />

`Vue3`的生命周期函数

* 创建阶段：`setup`
* 挂载阶段：`onBeforeMount`、`onMounted`
* 更新阶段：`onBeforeUpdate`、`onUpdated`
* 卸载阶段：`onBeforeUnmount`、`onUnmounted`

生命周期的回调代码

```vue
<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  onBeforeUpdate,
  onUpdated,
  ref,
} from 'vue'

const count = ref(0)

console.log('header组件setup了')

onBeforeMount(() => {
  console.log('header组件挂载前')
})

onMounted(() => {
  console.log('header组件挂载完成')
})

onBeforeUnmount(() => {
  console.log('header组件卸载前')
})

onUnmounted(() => {
  console.log('header组件卸载完成')
})

onBeforeUpdate(() => {
  console.log('header组件更新前')
})

onUpdated(() => {
  console.log('header组件更新完成')
})
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="count++">Add 1</button>
</template>

<style scoped></style>
```

* `onMounted`中发起数据请求。
* `onBeforeUnmount`进行清理工作，如：清除定时器或事件监听。

## Axios使用

在Vue中安装Axios库

```shell
npm i axios
```

Vue中可以同时使用Axios库发送数据请求

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const url = ref('')
async function getDog() {
  const res = await axios.get('https://dog.ceo/api/breeds/image/random')
  url.value = res.data.message
}

onMounted(() => {
  getDog()
})
</script>

<template>
  <button @click="getDog">获取随机狗</button>
  <hr />
  <img height="300" :src="url" alt="logo" />
</template>
```

* 数据请求可以封装成方法，请求可以在`onMounted`发起请求。

## `nextTick()`

在Vue中更改响应式状态时，DOM更新不是同步生效，而是由Vue将它们缓存在一个队列中，在某一时刻一起执行。`nextTick()`可以在状态改变后立即使用，以等待DOM更新完成。

```vue
<script setup lang="ts">
import { ref, nextTick } from 'vue'

const count = ref(0)

async function increment() {
  count.value++
  console.log('DOM 还未更新:', document.getElementById('counter')?.textContent) // 0
  await nextTick()
  console.log('DOM 此时已经更新:', document.getElementById('counter')?.textContent) // 1
}
</script>

<template>
  <button id="counter" @click="increment">{{ count }}</button>
</template>
```

* 按钮出发时DOM并没有更新，DOM会在`nextTick()`执行后同步更新。

`nextTick()`的应用

```vue
<script setup lang="ts">
import { ref, nextTick, useTemplateRef } from 'vue'

let search = useTemplateRef<HTMLInputElement>('search')

const flag = ref(false)

async function handleClick() {
  flag.value = true
  await nextTick()
  search.value?.focus()
}
</script>

<template>
  <button v-if="!flag" @click="handleClick">点击搜索</button>
  <input ref="search" v-else type="text" placeholder="这是一个输入框" @blur="flag = false" />
</template>
```

* `handleClick`点击按钮后，等待搜索框显示，使搜索框聚焦。

## 组合式函数

组合式函数（自定义Hook）一个利用Vue的组合式API来封装和复用有状态逻辑的函数。

> [!important]
>
> 对数据和功能进行封装，复用代码，使`setup`中的逻辑更清晰。

一般组合是api定义在`src/composables`文件夹下，使用`use`开头。

```ts
import { reactive, onMounted } from 'vue'
import axios, { AxiosError } from 'axios'

export default function () {
  let dogList = reactive<string[]>([])

  async function getDog() {
    try {
      let { data } = await axios.get('https://dog.ceo/api/breeds/image/random')
      dogList.push(data.message)
    } catch (error) {
      const err = <AxiosError>error
    }
  }

  onMounted(() => {
    getDog()
  })

  return { dogList, getDog }
}
```

* 在组合式API中可以：定义响应式数据，调用生命周期函数。
* 在组合式API中可以：返回数据和方法。

在组件中可以使用组合式函数

```vue
<script setup lang="ts">
import useDog from '@/composables/useDog'

const { dogList, getDog } = useDog()
</script>

<template>
  <button @click="getDog">获取随机狗</button>
  <hr />
  <div class="pack">
    <img height="200" v-for="item in dogList" :key="item" :src="item" alt="logo" />
  </div>
</template>
```

## 动态组件

动态组件可以在多个组件中来回切换，

```vue
<script setup lang="ts">
import { ref } from 'vue'
import Message1 from '@/components/message_1.vue'
import Message2 from '@/components/message_2.vue'

type MessageKey = keyof typeof massages
const currentMessage = ref<MessageKey>('Message1')

const massages = {
  Message1,
  Message2,
}
</script>

<template>
  <button v-for="(_, index) in massages" :key="index" @click="currentMessage = index">
    显示{{ index }}
  </button>
  <hr />
  <component :is="massages[currentMessage]" />
</template>
```

* 使用`<component>`元素可以设置动态组件，`:is`属性可以设置要显示的组件。
* 当组件发生变化事，消失的组件会被销毁。

如果组件切换频繁，可以使用`<KeepAlive>`保证组件强行存活。

```vue
<template>
	...
  <KeepAlive>
    <component :is="massages[currentMessage]" />
  </KeepAlive>
</template>
```

* 使用`<KeepAlive>`将要缓存的组件包起来。

当组件发生切换时，`onActivated`和`onDeactivated`可以监听注解切换的状态。

```ts
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  console.log('Message1 activated')
})

onDeactivated(() => {
  console.log('Message1 deactivated')
})
```

## 自定义指令

Vue中除了内置指令外，还允许用户自定义指令。

> [!warning]
>
> 只有当所需功能，只能通过直接的DOM操作来实现时，才应该使用自定义指令。

### 局部指令

直接在`<script setup>`中自定义指令

```vue
<script setup lang="ts">
const vHighlight = {
  mounted: (el: HTMLElement) => {
    el.classList.add('is-highlight')
  },
}
</script>

<template>
  <p v-highlight>三十功名尘与土，八千里路云和月。</p>
</template>

<style scoped lang="less">
.is-highlight {
  background-color: yellow;
}
</style>
```

* 任何以`v`开头的驼峰式命名的变量，都可以当作自定义指令使用。
* 指令不同的生命周期中完成对DOM的操作。
* 指令一般在项目挂载后生效。[指令的生命周期钩子](https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks)
* 使用指令和一般的Vue指令一致。

### 全局指令

全局指令给所有DOM添加，但是需要再App中注册。

1. 定义指令操作

```ts
import type { Directive } from 'vue'

export type HighlightDirective = Directive<HTMLElement, string>

declare module 'vue' {
  export interface GlobalDirectives {
    vHighlight: HighlightDirective
  }
}

export default {
  mounted: (el, binding) => {
    el.style.backgroundColor = binding.value
  },
} as HighlightDirective
```

* `declare module 'vue'`是在vue已有的类型声明里追加一个成员。
* `mounted: (el, binding)`中`binding`参数可以获得指令的值。

2. 在App中注册指令

```ts
import { createApp } from 'vue'
import highlight from './directives/highlight'
import App from './f-directives-2.vue'

const app = createApp(App)
app.directive('highlight', highlight)
app.mount('#app')
```

3. 在组件的DOM元素中使用指令

```vue
<template>
  <p v-highlight="'skyblue'">莫等闲，白了少年头，空悲切！</p>
</template>
```

## 练习

在Vue项目使用Axios会统一设置请求拦截器和响应拦截器，拦截器便于 代码复用与统一管理。

* 请求拦截器
  * 设置请求的跟路径
  * 统一携带Token
  * 开启全局Loading
*  响应拦截器
  * 统一的状态码错误处理
  * 关闭全局Loading
  * 剥离冗余的外层数据

拦截器代码一般放在`src/utils/request.ts`文件中

> [!note]
>
> 实现一个Axios的拦截器，请求https://dummyjson.com/ 接口
