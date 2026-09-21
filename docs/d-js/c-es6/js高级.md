# js高级

# ES规范

## ES6+

#### Symbol

ES6中的添加了一种原始数据类型symbol，主要用于数据私有化问题。在typescript中可以忽略。

* Symbol属性对应的值是唯一的，解决命名冲突问题。
* Symbol值不能与其他数据进行计算，包括同字符串拼串。
* for in, for of遍历时不会遍历symbol属性。
* ES6提供了11个内置的Symbol值，指向语言内部使用的方法。

```javascript
// 用作对象的属性(唯一)
let symbol = Symbol();
let obj = {username: 'kobe', age: 39};
obj[symbol] = 'hello';

// 传参标识
let symbol = Symbol('one');
let symbol2 = Symbol('two');

// 定义常量
const Person_key = Symbol('(Person_key')
```

#### 修饰符

```javascript
@T
class User { // user会被作为参赛传入T中
    constructor(name, age=20) {
        this.name = name
        this.age = age
    }
}

function T(target) { // 被修饰对象
    target.contry = '中国' // 向对象添加属性
}
```



# 模块化

## 模块化基本形式

### 命名空间模式

模块定义

```javascript
function myModule() {
  var msg = 'My atguigu'

  function doSomething() {
    console.log('doSomething() ' + msg.toUpperCase())
  }
  
  function doOtherthing () {
    console.log('doOtherthing() '+msg.toLowerCase())
  }

  // 向外暴露对象(给外部使用的方法)
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
}
```

模块引用

```javascript
var module = myModule()
module.doSomething()
```

### IIFE模式

#### 基本模式

模块定义

```javascript
(function (window) {
  var msg = 'My atguigu'
  
  function doSomething() {
    console.log('doSomething() '+msg.toUpperCase())
  }
  
  function doOtherthing () {
    console.log('doOtherthing() '+msg.toLowerCase())
  }
  
  // 向外暴露对象直接添加给window
  window.myModule = {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
})(window)
```

模块引用

```javascript
myModule.doSomething()
```

#### 增强模式

模块定义，增加引入了jQuery，可以操作界面元素。

```javascript
(function (window, $) {
  //数据
  let data = 'atguigu.com'

  // 操作数据的函数
  function foo() { 
    $('body').css('background', 'red')
  }

  function bar() {
    console.log(`bar() ${data}`)
    otherFun() // 调用内部
  }

  function otherFun() { // 内部私有的函数
    console.log('otherFun()')
  }

  window.myModule = {foo, bar} // 导出函数，es6简写
})(window, jQuery)
```

模块引用

```javascript
myModule.foo()
```

## 模块化规范

### CommonJS

特点：

* 每一个文件都可以当做一个模块
* 服务器端：模块加载是运行同步加载
* 浏览器端：模块需要提前编译打包处理

#### 服务器端

原理通过`module.exports`向外暴露属性和方法`module`被添加在全局对象`global`上。

模块定义

```javascript
// module1，整体暴露一个对象
module.exports = {
  msg: 'module1', 
  foo() { 
    console.log(this.msg)
  }
}

// module2，整体暴露一个函数
module.exports = function () {
  console.log('module2()')
}

// module3，以属性方式暴露多个函数
exports.foo = function () {
  console.log('module3 foo()')
}

exports.bar = function () {
  console.log('module3 bar()')
}
```

模块引用

```javascript
let module1 = require('./modules/module1')
let module2 = require('./modules/module2')
let module3 = require('./modules/module3')

module1.foo()
module2()
module3.foo()
module3.bar()
```

#### 浏览器

浏览器端使用CommonJS规范需要安装依赖库，browserify。

使用流程

1. 创建相应模块。
2. 在主文件内引用模块。
3. 使用browserify命令对主文件打包生成相应文件。打包命令`browserify [源文件] -o [目标文件]`。
4. 在html中引用生成文件。`<script type="text/javascript" src="js/dist/bundle.js"></script>`

### AMD

专门针对浏览器端使用，模块加载是异步执行。需要依赖于`require.js`文件

模块定义

```javascript
// dataService.js 定义没有依赖的模块
define(function () { // define是AMD语法
  let msg = 'atguigu.com'
  function getMsg() {
    return msg.toUpperCase()
  }
  return {getMsg}
})

// alerter.js 定义有依赖的模块
define(['dataService', 'jquery'], function (dataService, $) { // AMD语法先声明依赖模块
  let name = 'Tom2'
  function showMsg() {
    $('body').css('background', 'gray')
    alert(dataService.getMsg() + ', ' + name)
  }
  return {showMsg}
})
```

模块引用

主模块

```javascript
(function () {
  // require.js配置
  require.config({
    baseUrl: 'js/', //基本路径
    
    paths: { // 映射: 模块标识名: 路径
      // 自定义模块
      'alerter': 'modules/alerter',
      'dataService': 'modules/dataService',

      // 库模块
      'jquery': 'libs/jquery-1.10.1',
      'angular': 'libs/angular'
    },

    
    shim: { // 配置不兼容AMD的模块
      angular: {
        exports: 'angular' // 暴露模块名称
      }

    }
  })

  // 引入模块使用
  require(['alerter', 'angular'], function (alerter, angular) {
    alerter.showMsg()
    console.log(angular);
  })
})()
```

在html中配置入口文件

```html
<script type="text/javascript" src="js/libs/require.js" data-main="js/main.js"></script>
```

### ES6

依赖模块需要编译打包处理，使用bable编译打包处理。

定义模块

```javascript
// module1，分别暴露
export function foo() {
  console.log('module1 foo()');
}

export let bar = function () {
  console.log('module1 bar()');
}

export const DATA_ARR = [1, 3, 5, 1]

// module2，统一暴露
let data = 'module2 data'

function fun1() {
  console.log('module2 fun1() ' + data);
}

function fun2() {
  console.log('module2 fun2() ' + data);
}

export {fun1, fun2}

// module3，默认暴露
export default {
  name: 'Tom',
  setName: function (name) {
    this.name = name
  }
}
```

引用模块

主模块

```javascript
// 分别暴露和统一暴露 整体暴露一个容器对象，需要结构赋值，取出内容
import {foo, bar} from './module1'
import {DATA_ARR} from './module1'
import {fun1, fun2} from './module2'

// 引用默认暴露，相当于引用一个对象
import person from './module3'
```

使用流程

1. 使用badle对全部模块打包`babel [源文件] -d [目标文件]`，生成es5语法格式文件
2. 使用`browserify [源文件] -o [目标文件]`，生成可调用文件。
3. 在html中使用可调用文件。

```html
<script type="text/javascript" src="js/lib/bundle.js"></script>
```

