# Ajax

Ajax的全称是Asynchronous Javascript And XML（异步JavaScript和XML），本质上是通过JavaScript内置的对象在网页和服务器之间进行数据交互。

用于数据交互的JavaScript内置对象为`XMLHttpRequest`。

## `XMLHttpRequest`

### 发起`Get`请求

1. 创建`xhr`对象。
2. 调用`xhr.open()`函数，指定请求方法和`url`。
3. 调用`xhr.send()`函数，发送请求。
4. 监听`xhr.onreadystatechange`事件，接受相应数据。

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
        xhr.open('GET', 'https://dummyjson.com/users/filter?key=username&value=emilys');
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                result.innerHTML = this.responseText;
            }
        }
    })
</script>

```

> [!important]
>
> GET请求携带参数的本质：就是直接将参数以查询字符串的形式，追加到URL地址的后面，发送到服务器。

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

<img src="./assets/Xnip2026-09-11_15-07-52.jpg" style="zoom:75%;" />

### 发起`Post`请求

