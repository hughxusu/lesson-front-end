# js高级



## Json对象

```javascript
var json = '{"name":"孙悟空","age":18,"gender":"男"}';
var arr ='[{"name":"孙悟空","age":18,"gender":"男"},{"name":"孙悟空","age":18,"gender":"男"}]';

// 可以将以JSON字符串转换为js对象
var obj = JSON.parse(json);
var list = JSON.parse(arr);

var obj3 = {name:"猪八戒" , age:28 , gender:"男"};

// JS对象转换为JSON字符串
var str = JSON.stringify(obj3);
```

### eval处理Json对象

```javascript
var str = '{"name":"孙悟空","age":18,"gender":"男"}';

/*
 * eval()
 * - 这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回
 * - 如果使用eval()执行的字符串中含有{},它会将{}当成是代码块
 * 	 如果不希望将其当成代码块解析，则需要在字符串前后各加一个()
 * - 字符串转换为对象
 */
var obj = eval("(" + str + ")");
```

# ES规范

## ES5

### 数组扩展

```javascript
var arr = [1, 4, 6, 2, 5, 6];

console.log(arr.indexOf(6)); // 得到值在数组中的最后一个下标，输出2
console.log(arr.lastIndexOf(6)); // 得到值在数组中的最后一个下标，输出5

// 遍历数组
arr.forEach(function (item, index) {
    console.log(item, index);
});

// 遍历数组返回一个新的数组，返回加工之后的值
var arr1 = arr.map(function (item, index) {
    return item + 10
});

// 遍历过滤出一个新的子数组，返回条件为true的值
var arr2 = arr.filter(function (item, index) {
    return item > 4
});
```

### 

## ES6+

#### 模板字符串

模板字符串，简化字符串的拼接。模板字符串必须用\`\`包含，变化的部分使用`${xxx}`定义

```javascript
let obj = {name:'anverson', age:41};
console.log(`我叫: ${obj.name}, 我的年龄是: ${obj.age}`);
```

#### 对象简化写法

简化的对象写法：省略同名的属性值；省略方法的`function`
```javascript
let x = 3;
let y = 5;

// 普通写法
let obj = {
   x: x,
   y: y,
   getPoint: function () {
       return this.x + this.y
   }
};

// 简化写法
let obj = {
    x,
    y,
    getPoint() {
        return this.x + this.y
    }
};
```

#### 形参默认值

```javascript
function Point(x=12, y=12) {
    this.x = x;
    this.y = y;
}
let p = new Point(); // 使用默认值
let point = new Point(25, 36);
```

#### Promise对象

异步编程解决方法，体现在代码中是一个对象，可以通过Promise构造函数来实例化。

promise对象的3个状态：

  * pending：初始化状态
  * fullfilled：成功状态
  * rejected：失败状态

可以从初始化变为成功或失败的一种。通过异步执行结果修改promise的状态，在then调用中处理成功或失败的函数。

```javascript
// 创建一个promise实例对象
let promise = new Promise((resolve, reject) => {
    // 初始化promise的状态为pending --> 初始化状态
    console.log('1111');  // 同步执行
    // 启动异步任务：发送请求或开启定时器等
    setTimeout(() => { // 两秒后执行
        console.log('3333');
      	// 根据异步任务的返回结果修改promise状态
        resolve('atguigu.com'); // 修改promise的状态pending变为fullfilled（成功状态）
        reject('xxxx'); // 修改promise的状态pending变为rejected(失败状态)
    }, 2000)
});

// 相当于把原来setTimeout处理的回调函数拿到出处来处理
promise.then((data) => { // 成功回调函数
    console.log('成功了。。。' + data);
}, (error) => { // 失败回调函数
    console.log('失败了' + error);
});

promise.then((data) => {
   console.log('成功了。。。' + data);
}).catch((err) => { // 调用reject函数，与上面失败回调函数一样
  console.log(data);
})

// 函数中定义一个promise对象，用来处理请求，并将promise返回，
function getNews(url) {
    // 创建一个promise对象
    let promise = new Promise((resolve, reject) => {
        // 初始化promise状态为pending，启动异步任务
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if(request.readyState === 4){ // 设置了promise状态可以在then中处理
                if(request.status === 200){
                    let news = request.response;
                    resolve(news);
                }else{
                    reject('请求失败了。。。');
                }
            }
        };
        request.responseType = 'json';//设置返回的数据类型
        request.open("GET", url);//规定请求的方法，创建链接
        request.send(); // 发送
    })
    return promise;
}

// 调用请求函数，得到promise对象，并调用promise的then函数处理请求
getNews('http://localhost:3000/news?id=2')
        .then((news) => { // 首先请求新闻
            document.write(JSON.stringify(news));
  					// 请求成功后再去请求评论，调用同一请求函数传递不同地址
            return getNews('http://localhost:3000' + news.commentsUrl); // then的方法可以链式调用，需要返回另一个promise对象
        }, (error) => { // 请求失败
            alert(error); // 如果失败了，没有返回promise对象，调用停止
        }).then((comments) => { // 链式调用，接收第二个promise结果，多次请求变为顺序执行，避免的回调嵌套
            document.write('<br><br><br><br><br>' + JSON.stringify(comments));
        }, (error) => {
            alert(error);
        })
```

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

#### 迭代器与生成器

迭代器（Iterator）主要供`for ... of`进行遍历。

* `for ... in ...` 以原始插入顺序迭代对象的可枚举属性。
* `for ... of ...` 根据可迭代对象的迭代器具体实现迭代对象的数据。

原生具备iterator接口的数据：Array、arguments、set容器、map容、String。使用解构赋值以及三点运算符时会默认调用iterator接口。

```javascript
let arr3 = [1, 2, 'kobe', true];
for(let i of arr3) { // 迭代器遍历
    console.log(i);
}
```

生成器（Generator）函数是一个状态机，内部封装了不同状态的数据，function与函数名之间有一个星号，内部用yield表达式来定义不同的状态。generator函数返回的是指针对象，调用next方法函数内部逻辑开始执行，遇到yield表达式停止，返回`{value: yield/undefined, done: false/true}`。

```javascript
// 定义Generator函数
function* generatorTest() {
    console.log('函数开始执行');
    result = yield 'hello';
    console.log('函数暂停后再次启动');
    yield 'generator';
}
// 生成遍历器对象
let Gt = generatorTest();
let result = Gt.next(); // 函数执行，遇到yield暂停，{value: "hello", done: false}
result = Gt.next('input'); // 函数再次启动，并传入返回值用result接收
result = Gt.next();
console.log(result); // {value: undefined, done: true} 表示函数内部状态已经遍历完毕

// 对象的Symbol.iterator属性;
let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 4;
};
for(let i of myIterable) {
    console.log(i);
}
let obj = [...myIterable];
```

#### async

解决异步回调的问题，同步流程表达异步操作。本质是 Generator的语法糖。

* 不需要像Generator去调用next方法，遇到await等待，当前的异步操作完成就往下执行
* 返回的总是Promise对象，可以用then方法进行下一步操作
* async取代Generator函数的星号*，await取代Generator的yield

```javascript
// 语法格式
async function foo(){
  await 异步操作;
  await 异步操作;
}

// 基本使用
async function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms); // 直接返回成功函数
  })
}

async function asyncPrint(value, ms) {
  console.log('函数执行', new Date().toTimeString());
  await timeout(ms);
  console.log('延时时间', new Date().toTimeString()); // 会等到timeout执行完成
  console.log(value);
}
console.log(asyncPrint('hello async', 2000));

// 请求新闻和评论函数
async function sendXml(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      type: 'GET',
      success: data =>  resolve(data),
      error: error => reject(error)
    })
  })
}

async function getNews() {
  // 首先请求新闻
  let result = await sendXml('http://localhost:3000/news?id=2')
  // 再次请求评论，会等待第一次请求完成
  result = await sendXml('http://localhost:3000' + result.commentsUrl)
}
```

#### `Class`

```javascript
class Person {
    constructor(name, age){ // 调用类的构造方法
        this.name = name;
        this.age = age;
    }
    
    showName() { // 定义一般的方法
        console.log(this.name, this.age);
    }
}

class StrPerson extends Person { // 定义一个子类
    constructor(name, age, salary) { 
        super(name, age); // 调用父类的构造方法
        this.salary = salary;
    }
  
    showName() { // 在子类自身定义方法
        console.log(this.name, this.age, this.salary);
    }
}
```

### 其他特性

#### 字符串扩展

```javascript
let str = 'abcdefg';
console.log(str.includes('a')); // true，判断是否包含指定的字符串
console.log(str.startsWith('a'));// true，判断是否以指定字符串开头
console.log(str.endsWith('g'));// true，判断是否以指定字符串结尾
console.log(str.repeat(5)); // 将当前字符重复5次
```

#### 数值扩展

```javascript
a = 0b1010; // 二进制
b = 0o56; // 八进制
console.log(Number.isFinite(NaN)); // false，判断是否是有限大的数
console.log(Number.isNaN(NaN)); // true，判断是否是NaN 
console.log(Number.isInteger(5.23)); // false，判断是否是整数 
console.log(Number.parseInt('123abc')); // 123，将字符串转换为对应的数值
console.log(Math.trunc(13.123)); // 13，直接去除小数部分
```

#### 数组扩展

```javascript
// Array.from(v): 将伪数组对象或可遍历对象转换为真数组
let btns = document.getElementsByTagName('button');
Array.from(btns).forEach(function (item, index) {
    console.log(item, index);
});

// Array.of(v1, v2, v3): 将一系列值转换成数组
let arr = Array.of(1, 'abc', true);

// find: 找出第一个满足条件返回true的元素
let arr1 = [1, 3, 5, 2, 6, 7, 3];
let result = arr1.find(function (item, index) {
    return item >3
}); // 返回 5

// findIndex: 找出第一个满足条件返回true的元素下标
let result1 = arr1.findIndex(function (item, index) {
    return item >3
}); // 返回 2

// map方法返回新数组
let one = [1, 2, 3];
let two = one.map((item, index, arr) => item * item); 

// 通过reduce函数生成数组
keys.reduce((prev, key) => {
  return { ...prev, [key]: obj.get(key) || "" };
}, {});
```

#### 对象扩展

```javascript
// 判断2个数据是否完全相等
console.log(Object.is('abc', 'abc')); // true

console.log(NaN == NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log(0 == -0); // true
console.log(Object.is(0, -0)); // false

// 将源对象的属性复制到目标对象上，源对象可以是多个
let obj = {name : 'kobe', age : 39, c: {d: 2}};
let obj1 = {};
Object.assign(obj1, obj); // obj1目标对象，obj源对象

// 直接操作 __proto__ 属性
let obj3 = {name : 'anverson', age : 41};
let obj4 = {};
obj4.__proto__ = obj3;
console.log(obj4, obj4.name, obj4.age);

// 动态生成对象的key值
const chosenAnimal = 'cat'
const animals = {
  [`animal${chosenAnimal}`]: true,
}

// 与上面写法等价
const chosenAnimal = 'cat'
const animals = { }
animals[`animal${chosenAnimal}`] = true
```

#### set和map数据结构

set和map可以使用`for of`变量

```javascript
// 无序不可重复的多个value的集合体
let set = new Set([1,2,3,4,3,2,1,6]); 

// 相关方法
set.add('abc'); // 添加
set.clear(); // 清空
set.delete(2); // 删除原始2
set.has(4) 
set.size()


// 无序的key不重复的多个key-value的集合体，key可以是任意对象
let map = new Map([
  ['abc', 12], // 键是'abc'值是12
  [25, 'age']  // 键是25值是'age'
]);

// 相关方法
map.set('男', '性别'); // 参数1是key，参数2是值
map.delete('男'); // 删除使用key值
map.clear();
map.forEach((value, key) => {
  console.log(key, value);
})
map.values() // value迭代器
map.keys() // key迭代器
for (let key of map.keys()) {
   console.log(value)
}
...map.valuse() // 对数据进行展开
```

### ES7

```javascript
// 指数运算符(幂)
console.log(3 ** 3);//27

// 判断数组中是否包含指定value
let arr = [1,2,3,4, 'abc'];
console.log(arr.includes(2)); // true
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

