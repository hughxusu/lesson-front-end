# Vue

## Vue语法

### 计算值和监视

```html
<div id="demo">
  姓: <input type="text" placeholder="First Name" v-model="firstName"><br> <!-- v-model双向数据绑定 -->
  名: <input type="text" placeholder="Last Name" v-model="lastName"><br>
  
  <!--下列数据是根据 fistName 和 lastName 计算产生-->
  姓名1(单向): <input type="text" placeholder="Full Name1" v-model="fullName1"><br>
  姓名2(单向): <input type="text" placeholder="Full Name2" v-model="fullName2"><br>
  姓名3(双向): <input type="text" placeholder="Full Name3" v-model="fullName3"><br>

  <p> {{ fullName1 }} </p> <!-- 页面中显示计算结果 -->
</div>

<script type="text/javascript">
  const vm = new Vue({
    el: '#demo',
    data: {
      firstName: 'A',
      lastName: 'B',
       fullName2: 'A-B'
    },

    // 计算属性配置: 定义计算属性的方法
    computed: {
      fullName1 () { 
        return this.firstName + '-' + this.lastName
      },

      // 计算属性高级, 通过getter/setter实现对属性数据的显示和监视, 计算属性存在缓存, 多次读取只执行一次getter计算
      fullName3: {
        // 获取当前属性值时自动调用, 将返回值作为属性值
        get () {
          return this.firstName + '-' + this.lastName
        },
        
        // 属性值发生了改变时自动调用, 监视当前属性值变化, 同步更新相关的其它属性值
        set (value) { 
          const names = value.split('-')
          this.firstName = names[0] // 修改data中的firstName
          this.lastName = names[1]
        }
      }
    },

    // 配置监视, 当属性变化时, 回调函数自动调用, 在函数内部进行计算
    watch: {
      firstName: function (value) { // 相当于属性的set
        this.fullName2 = value + '-' + this.lastName
      }
    }
  })

  // 通过通过vm对象的$watch()来监视指定的属性
  vm.$watch('lastName', function (value) { // 监视fullName2
    this.fullName2 = this.firstName + '-' + value
  })
</script>
```

### class与style绑定

```html
<style>
  .classA {
    color: red;
  }
  .classB {
    background: blue;
  }
  .classC {
    font-size: 20px;
  }
</style>
<div id="demo">
  <!-- class绑定, 绑定值可以是字符串、对象和数组  -->
  <p :class="myClass">myClass是字符串</p>
  <p :class="{classA: hasClassA, classB: hasClassB}">绑定值是对象</p>
  <p :class="['classA', 'classB']">绑定值是数组</p>

  <!-- style绑定, 绑定值是对象, 其中activeColor/fontSize是data属性  -->
  <p :style="{color:activeColor, fontSize}">style绑定</p>

  <button @click="update">更新</button>
</div>
<script type="text/javascript">
  new Vue({
    el: '#demo',
    data: {
      myClass: 'classA',
      hasClassA: true,
      hasClassB: false,
      activeColor: 'red',
      fontSize: '20px'
    },

    methods: {
      update () {
        this.myClass = 'classB'
        this.hasClassA = !this.hasClassA
        this.hasClassB = !this.hasClassB
        this.activeColor = 'yellow'
        this.fontSize = '30px'
      }
    }
  })
</script>
```

### 事件监听

```html
<div id="example">
  <!-- 绑定监听: 1. v-on:xxx="fun"; 2. @xxx="fun"; 3. @xxx="fun(参数)" -->
  <button @click="test1">test1</button> <!-- 默认事件形参: event -->
  <button @click="test2('abc')">test2</button> <!-- 自定义参数 -->
  <button @click="test3('abcd', $event)">test3</button> <!-- 隐含属性对象: $event -->

  <!-- 事件修饰符 -->
  <!-- .prevent: 阻止事件的默认行为event.preventDefault() -->
  <a href="http://www.baidu.com" @click.prevent="test4"> 百度一下 </a> 
  <div style="width: 200px;height: 200px;background: red" @click="test5">
    <!-- .stop : 停止事件冒泡 event.stopPropagation() -->
    <div style="width: 100px;height: 100px;background: blue" @click.stop="test6"></div>
  </div>

  <!-- 按键修饰符 -->
  <input type="text" @keyup.13="test7"> <!-- .keycode: 操作的是某个keycode值的健 -->
  <input type="text" @keyup.enter="test7"> <!-- .enter: 操作的是enter键 -->
</div>
<script type="text/javascript">
  new Vue({
    el: '#example',
    data: {},
    methods: {
      // 绑定监听
      test1(event) { alert(event.target.innerHTML) },
      test2 (msg) { alert(msg) },
      test3 (msg, event) { alert(msg+'---'+event.target.textContent) },
			// 事件修饰符
      test4 () { alert('点击了链接') },
      test5 () { alert('out') },
      test6 () { alert('inner') },
			// 按键修饰符
      test7 (event) { alert(event.target.value) }
    }
  })
</script>
```

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

### 过滤器

过滤器对要显示的数据进行特定格式化后再显示。注意: 并没有改变原本的数据，可是产生新的对应的数据。

```html
<div id="test">
  <!-- 对当前时间进行指定格式显示 -->
  <p>{{time}}</p>
  <p>最完整的: {{time | dateString}} </p> <!-- 2. 使用过滤器 -->
  <p>年月日: {{time | dateString('YYYY-MM-DD')}}</p>
</div>

<script type="text/javascript" src="../js/vue.js"></script>
<script type="text/javascript" src="https://cdn.bootcss.com/moment.js/2.22.1/moment.js"></script>
<script>
  // 1. 定义过滤器
  Vue.filter('dateString', function (value, format='YYYY-MM-DD HH:mm:ss') {
    return moment(value).format(format); // 进行一定的数据处理
  })


  new Vue({
    el: '#test',
    data: {
      time: new Date()
    },
    mounted () {
      setInterval(() => {
        this.time = new Date()
      }, 1000)
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



