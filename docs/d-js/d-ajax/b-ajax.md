# Ajax

Ajax的全称是Asynchronous Javascript And XML（异步JavaScript和XML），本质上是通过JavaScript内置的对象在网页和服务器之间进行数据交互。

用于数据交互的JavaScript内置对象为`XMLHttpRequest`。

## `XMLHttpRequest`基础

### 发起`Get`请求

1. 创建`xhr`对象。
2. 调用`xhr.open()`函数，指定请求方法和`url`。
3. 调用`xhr.send()`函数，发送请求。
4. 监听`xhr.onreadystatechange`事件，接受响应数据。

```html
<body>
    <button id="btn">发送get请求</button>
    <div id="result"></div>
</body>
<script>
    let btn = document.querySelector('#btn');
    let result = document.querySelector('#result');
    btn.addEventListener('click', function() {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://dummyjson.com/users');
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result.innerHTML = this.responseText;
            }
        }
    })
</script>
```

`XMLHttpRequest`对象的`readyState`属性，用来表示当前Ajax请求所处的状态。

| **值** | **状态**           | **描述**                                           |
| ------ | ------------------ | -------------------------------------------------- |
| 0      | `UNSENT`           | `XMLHttpRequest`对象被创建，但尚未调用open方法。   |
| 1      | `OPENED`           | `open()`方法已经被调用。                           |
| 2      | `HEADERS_RECEIVED` | `send()`方法已经被调用，响应头也已经被接收。       |
| 3      | `LOADING`          | 数据接收中，此时`response`属性中已经包含部分数据。 |
| 4      | `DONE`             | Ajax请求完成，数据传输已经完成或失败。             |

### 带参数的`Get`请求

查询字符串（URL参数），是指在URL的末尾，加上向服务器发送变量信息。

```url
https://dummyjson.com/users/filter?key=username&value=emilys
```

查询字符串格式：

1. 使用`?`表示查询字符串开始，放在URL 的末尾。
2. 用键值对形式表示`参数=值`。
3. 多个查询参数用`&`分割。

```js
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');
btn.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/users/filter?key=username&value=emilys');
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            result.innerHTML = this.responseText;
        }
    }
})
```

> [!important]
>
> GET请求带参数的本质：就是直接将参数以查询字符串的形式，追加到URL地址的后面，发送到服务器。

### URL编码与解码

代码中向服务器发送如下请求

```url
https://dummyjson.com/users/filter?key=username&value=张三
```

浏览器实际发送的请求是

```url
https://dummyjson.com/users/filter?key=username&value=%E5%BC%A0%E4%B8%89
```

URL编码：

* 在URL地址中，只允许出现英文字母、英文标点、数字，而其它类别字符不允许出现。
* 如果URL中需要包含：中文等其它字符，则必须对该字符进行编码。
* URL中定义了编码的原则，使用安全的字符去表示那些不安全的字符。
* URL编码过程由浏览器自动完成，不需要程序员主动操作。

[为什么要进行URL编码?](https://blog.csdn.net/Lxd_0111/article/details/78028889)

JavaScript中包含了对字符串编码和解码的对象

```js
let encoded = encodeURIComponent('张三');
let decoded = decodeURIComponent(encoded);
```

一直中文字符的URL编码通常用三个`%`编码表示

<img src="./assets/Xnip2026-09-11_15-07-52.jpg" style="zoom:70%;" />

### 发起`Post`请求

1. 创建`xhr`对象。
2. 调用`xhr.open()`函数，指定请求方法和`url`。
3. 调用`xhr.setRequestHeader()`函数设置`Content-Type`属性。
4. 调用`xhr.send()`函数，发送请求。
5. 监听`xhr.onreadystatechange`事件，接受响应数据。

```js
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');
btn.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://dummyjson.com/user/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('username=emilys&password=emilyspass');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            result.innerHTML = this.responseText;
        }
    }
})
```

## `form`表单

表单主要用于采集网页中的信息，HTML中的`<form>`标签即为表单标签，并通过`<form>`标签可以把采集到的信息，提交到指定的服务器进行处理。

```html
<form>
    <input type="text" id="username" name="username" placeholder="请输入用户名"> <br>
    <input type="password" id="password" name="password" placeholder="请输入密码"> <br>
    <button type="submit">登录</button>
</form>
```

* 表单由三个基本部分组成：
  * 表单标签：`<from>`表示全部要提交的信息。
  * 表单域：`<input>`等，确定每一天信息的格式。
  * 表单按钮：`<button>`用于提交信息。

### `<form>`标签的属性

`<form>`标签的属性可以用于控制数据发送到服务器的规则。

| 属性 | `action`  | `method` | `enctype`    | `target`    |
| ---- | --------- | -------- | ------------ | ----------- |
| 功能 | 服务器URL | 请求方式 | 提交数据格式 | URL打开位置 |

1. `action`属性指定了数据发送的`URL`地址，如果`action`未指定，数据提交到当前页面。

```html
<form action="https://dummyjson.com/user/login">
    <input type="text" id="username" name="username" placeholder="请输入用户名"> <br>
    <input type="password" id="password" name="password" placeholder="请输入密码"> <br>
    <button type="submit">登录</button>
</form>
```

2. `method`设置请求方式`GET`或`POST`，默认情况下`method`的值是`GET`。

```html
<form action="https://dummyjson.com/user/login" method="post">
    <input type="text" id="username" name="username" placeholder="请输入用户名" value="emilys"> <br>
    <input type="password" id="password" name="password" placeholder="请输入密码" value="emilyspass"> <br>
    <button type="submit">登录</button>
</form>
```

3. `enctype`属性用来设置表单数据格式，默认值为`application/x-www-form-urlencoded`

| 值                                  | 描述                                              |
| ----------------------------------- | ------------------------------------------------- |
| `application/x-www-form-urlencoded` | 在发送前编码所有字符（默认值）。                  |
| `multipart/form-data`               | 不对字符编码，上传文件时，必须使用该值。          |
| `text/plain`                        | 空格转换为`+`加号，但不对特殊字符编码。（很少用） |

> [!warning]
>
> 一般情况下，该属性只有上传文件时设置为`multipart/form-data`，其他情况不用设置。

4. `target`请求成功后打开页面的位置，默认值是`_self`

| 值   | `_blank`     | `_self`      | `_parent`  | `_top`         | `framename`      |
| ---- | ------------ | ------------ | ---------- | -------------- | ---------------- |
| 描述 | 新窗口中打开 | 当前窗口打开 | 父窗口打开 | 整个窗口中打开 | 指定的框架中打开 |

* `_parent`、`_top`和`framename`很少使用。

```html
<form action="https://dummyjson.com/user/login" method="post" target="_blank">
    <input type="text" id="username" name="username" placeholder="请输入用户名" value="emilys"> <br>
    <input type="password" id="password" name="password" placeholder="请输入密码" value="emilyspass"> <br>
    <button type="submit">登录</button>
</form>
```

### 使用`Ajax`提交表单

表单同步提交：直接使用`<form>`标签的属性，控制表单的提交规则，不使用任何JavaScript代码。

表单同步提交的问题：

1. 数据提交后，直接跳转到` action`指向的页面，无法控制页面的变化。
2. 数据提交后，页面之前的状态和数据会丢失。

> [!important]
>
> 一般情况下，表单只负责采集数据，使用Ajax将数据提交到服务器。

```html
<body>
<h2>用户登录</h2>
<form id="loginForm">
    <input type="text" id="username" name="username" placeholder="请输入用户名" value="emilys"> <br>
    <input type="password" id="password" name="password" placeholder="请输入密码" value="emilyspass"> <br>
    <button type="submit">登录</button>
</form>
<div id="result"></div> 
</body>
<script>
    let loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://dummyjson.com/user/login');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(`username=${username}&password=${password}`);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.querySelector('#result').innerHTML = this.responseText;
            }
        }
    })
</script>
```

* `addEventListener`需要监听`submit`行为。
* `e.preventDefault()`阻止表单的默认行为。
* 将表单域中的数据读取出来，进行拼接后发送请求。

## `XMLHttpRequest`高级特性

* 设置HTTP请求时限。
* 使用`FormData`对象管理表单数据。
* 可以上传文件。
* 可以获得数据传输的进度信息。

### 请求时限

设定合理的请求时限，可以提示用户当前网络过慢。

```js
let xhr = new XMLHttpRequest();
xhr.timeout = 30;
xhr.ontimeout = function() {
    result.innerHTML = '请求超时';
};
```

* `xhr.timeout`设置请求时限，单位是毫秒。
* `xhr.ontimeout`指定超时的回调函数。

### `FormData`对象

`FormData`对象，可以方便表单处理，`FormData`的使用：

1. 创建`FormData()`对象。
2. 使用`formData.append`方法添加数据。
3. 提交数据时，可以直接提交`FormData()`对象。

```js
let formData = new FormData();

formData.append('username', 'emilys');
formData.append('password', 'emilyspass');

let xhr = new XMLHttpRequest();
xhr.open('POST', 'https://dummyjson.com/user/login');
xhr.send(formData);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        document.querySelector('#result').innerHTML = this.responseText;
    }
}
```

> [!caution]
>
> 使用`FormData()`不需要手动添加`Content-Type`，浏览器会自动最近相关属性。

`FormData()`对象直接可以从`<form>`标签中获得数据

```js
let loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let formData = new FormData(this);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://dummyjson.com/user/login');
    xhr.send(formData);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('#result').innerHTML = this.responseText;
        }
    }
})
```

* `new FormData(this)`根据`<form>`标签创建对象，对象中直接包含了表单中的数据。`this`指向`loginForm`。

### 上传文件

### 显示传输进度

## Fetch API

Fetch API 是WebAPI新添加的原生函数，但老版本浏览器不支持。[Fetch API说明文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)

## 练习

1. 封装`XMLHttpRequest`对象用于`get`请求，兼容带参数和不带参数两种情况。
2. 完成一个上传文件的进度条。
