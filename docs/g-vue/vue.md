# Vue

## Vue语法

### 声明周期

<img src="https://cn.vuejs.org/images/lifecycle.png" style="zoom: 40%;" />

```html
<!--
vue对象的生命周期: 
1. 初始化显示: beforeCreate(); created(); beforeMount(); mounted();
2. 更新状态: beforeUpdate(); updated();
3. 销毁vue实例: vm.$destory()-调用销毁方法; beforeDestory(); destoryed();

常用的生命周期方法
1. created()/mounted(): 发送ajax请求, 启动定时器等异步任务
2. beforeDestory(): 做收尾工作, 如: 清除定时器
-->
<div id="test">
  <button @click="destroyVue">destory vue</button>
  <p v-if="isShow">尚硅谷IT教育</p>
</div>

<script type="text/javascript">
  new Vue({
    el: '#test',
    data: {
      isShow: true
    },

    mounted () {
      this.intervalId = setInterval(() => { // 执行异步任务
        this.isShow = !this.isShow
      }, 1000)
    },

    beforeDestroy() {
      clearInterval(this.intervalId) // 执行收尾的工作
    },

    methods: {
      destroyVue () {
        this.$destroy() // 调用销毁方法
      }
    }
  })
</script>
```

### 过渡和动画

vue动画是通过操作css的trasition或animation，vue会给目标元素添加/移除特定的class。

#### 过渡

```html

<style>
  /*2. 定义class样式;*/
  .xxx-enter-active, .xxx-leave-active { /*  */
    transition: opacity 1s /*2-1. 指定过渡样式*/
  }
  
  .xxx-enter, .xxx-leave-to {
    opacity: 0; /*2-2. 指定隐藏时的样式*/
  }


  .move-enter-active {
    transition: all 1s
  }

  .move-leave-active {
    transition: all 3s
  }

  .move-enter, .move-leave-to {
    opacity: 0;
    transform: translateX(20px)
  }
</style>

<div id="demo">
  <button @click="show = !show">Toggle</button>
  <transition name="xxx"> <!--1. 使用指定标签包裹动画内容 -->
    <p v-show="show">hello</p>
  </transition>
</div>

<hr>
<div id="demo2">
  <button @click="show = !show">Toggle2</button>
  <transition name="move">
    <p v-show="show">hello</p>
  </transition>
</div>

<script type="text/javascript">
  new Vue({
    el: '#demo',
    data: {
      show: true
    }
  })

  new Vue({
    el: '#demo2',
    data: {
      show: true
    }
  })

</script>
```

#### 动画

```html
<style>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>

<div id="example-2">
  <button @click="show = !show">Toggle show</button>
  <br>
  <transition name="bounce">
    <p v-if="show" style="display: inline-block">Lorem</p>
  </transition>
</div>

<script>
  new Vue({
    el: '#example-2',
    data: {
      show: true
    }
  })
</script>
```

### 指令

#### 自定义指令

```html
<!-- v-upper-text换为全大写; v-lower-text转换为全小写 -->
<div id="test">
  <p v-upper-text="msg"></p> <!-- 使用自定义指令 -->
  <p v-lower-text="msg"></p>
</div>

<div id="test2">
  <p v-upper-text="msg"></p>
  <p v-lower-text="msg"></p>
</div>

<script type="text/javascript" src="../js/vue.js"></script>
<script type="text/javascript">
  // 1. 注册全局指令
  Vue.directive('upper-text', function (el, binding) { // el: 指令所在的标签对象; binding: 包含指令相关数据的容器对象
    el.textContent = binding.value.toUpperCase()
  })
  new Vue({
    el: '#test',
    data: {
      msg: "I Like You"
    },
    // 2. 注册局部指令
    directives: {
      'lower-text'(el, binding) {
        el.textContent = binding.value.toLowerCase()
      }
    }

  })
  
  new Vue({
    el: '#test2',
    data: {
      msg: "I Like You Too"
    }
  })
</script>
```

### 插件

1. 定义插件

```js
(function (window) {
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive',function (el, binding) {
      el.textContent = 'my-directive----'+binding.value
    })

    // 3. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }
  window.MyPlugin = MyPlugin
})(window)
```

2. 使用插件

```html
<div id="test">
  <p v-my-directive="msg"></p> 
</div>

<script type="text/javascript" src="../js/vue.js"></script> 
<script type="text/javascript" src="vue-myPlugin.js"></script> <!-- 引用插件, 必须在引入vue包之后 -->
<script type="text/javascript">
  Vue.use(MyPlugin) // 安装插件, 内部会调用插件对象的install()

  const vm = new Vue({
    el: '#test',
    data: {
      msg: 'HaHa'
    }
  })
  Vue.myGlobalMethod()
  vm.$myMethod()

  new Object()
</script>
```

## Vue项目

### 组件化编码思想

* 编码流程
  1. 将页面拆分为不同的组件组件。
  2. 使用组件实现静态页面效果（实现静态组件）。
  3. 实现动态组件：
     * 动态显示初始化数据
     * 交互功能（从绑定事件监听开始）

* 数据存储原则
  1. 只有单个组件使用，保存在该组件内。
  2. 多个组件使用，保存在共同的父组件内。
  3. 数据在哪，更新数据的行为（函数）就应该定义在哪。
  4. 不要在子组件中直接修改父组件的数据，通过相应的方法修改数据（即在父组件中定义函数，传递给子组件，在子组件中调用）。



