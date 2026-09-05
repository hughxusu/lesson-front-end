## 包管理工具

### npm

Node Package Manager包管理工具

* 通过npm下载的包都放到node_modules文件夹中。
* npm包可以直接通过包名引入。
* node在使用模块名字来引入模块时，会首先在当前目录的node_modules中寻找，如果没有则去上一级目录的node_modules中寻找，直到找到为止或磁盘的根目录，如果没有则报错。

```shell
# 基本命令
npm # 查看帮助
npm -v # npm版本

npm init # 初始化包，生成package.json文件
npm init -y # 直接初始化项目目录

npm search [包名] # 搜索包名
npm install [包名] # 安装包
npm install [包名] --save # 安装包，并添加到依赖中
npm install -g [包名] # 全局安装，一般是一些工具
npm remove [包名] # 删除包
npm root -g # 全局下载根目录
npm list --depth --global # 查看全局安装包
npm list --depth=0 # 查看文件安装包

# 设置淘宝镜像服务器，使用cnpm是淘宝服务器，npm是原始服务器
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 直接修改npm镜像，会在用户目录下生产.npmrc文件可
npm config set registry https://registry.npm.taobao.org
npm config get registry # 检查仓库路径

npm view umi version # 查看某个包的最新版本

npm update # 更新所有包
npm update dayjs # 更新单个包
```



## 入门

```shell
node -v # 查看node版本

# 执行js文件
node hello.js
```

在node中有一个全局对象global，类似网页中window。变量为global的属性，函数为global的方法。

```javascript
var a = 10;
console.log(global.a); // 全局路径
```

使用webstorm中的run命令可以运行单个node文件

### commonjs

模块化

* 模块类型
  * 核心模块：由node引擎提供的模块。
  * 文件模块：用户自己创建的模块。

* 在Node中，一个js文件就是一个模块。每模块的代码都包装到到一个函数中。
  * `exports`该对象用来将变量或函数暴露到外部。
  * `require`用来引入外部的模块。
  * `module`当前模块本身，exports就是module的属性。
  * `__filename`当前模块的完整路径。
  * `__dirnam`当前模块所在文件夹的完整路径。

```javascript
function (exports, require, module, __filename, __dirname) {} // 包装模块的代码
```

* 导出变量和方法
  * 通过 exports 来向外部暴露变量和方法，将外部变量或方法设置为exports的属性。
  * 也可以使用module.exports导出，这种方式可以直接赋值。

```javascript
exports.x = "x变量";
exports.y = "y变量";
exports.fn = function () {
	console.log("this is math");
};

module.exports.add = function (a , b) {
	return a+b;
};

// 直接赋值导出模块
module.exports = {
	name:"猪八戒",
	age:28,
	sayName:function () {
		console.log("我是猪八戒");
	}
};
```

* 通过`require()`函数来引入外部的模块，相对路径以`.`开头。该函数会返回一个对象，这个对象代表引入的模块。

```javascript
var math = require("./math");
console.log(math.add(123,456));
```

### Package（包）

commonjs包规范由包结构和包描述文件两部分组成

* 包结构，用于组织包中的各种文件。
  * `package.json`描述文件（必须文件）
  * `bin`可执行二进制文件
  * `lib`js代码
  * `doc`文档
  * `test`单元测试
* 包描述文件，描述包的相关信息，以供外部读取分析，保存在包的根目录下。

```json
{
  "dependencies":{}, // 依赖
  "descriotion": "", // 包描述
  "devDependencies": {}, // 开发依赖
  "main": "./index", // 主文件
  "name": "node_test",  // 包名npm规范包名全部使用小写，require所需要的包名。
}
```

## 文件系统

文件系统就是通过Node来操作系统中的文件。

### Buffer

Buffer：专门用来存储二进制数据， 结构和数组很像，操作的方法也和数组类似。Buffer中的一个元素，占用内存的一个字节，大小一旦确定，则不能修改。Buffer实际上是对底层内存的直接操作。

```javascript
var str = "Hello 尚硅谷";
var buf = Buffer.from(str); // 将一个字符串保存到buffer中
console.log(buf.length); // 占用内存的大小

// 创建一个指定大小的buffer，buffer构造函数都不推荐使用
var buf2 = new Buffer(10);
var buf2 = Buffer.alloc(10); // 通常创建buffer的方法

//通过索引，来操作buf中的元素
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;

// 转换为16进制字符串
console.log(buf2[2].toString(16));

// 遍历buffer，只要数字在控制台输出一定是10进制
for(var i=0 ; i<buf2.length ; i++){
	console.log(buf2[i]);
}

// 创建一个指定大小的buffer，不清空内存
buf3 = Buffer.allocUnsafe(10);

var buf4 = Buffer.from("我是一段文本数据");
console.log(buf4.toString()); // 将缓冲区中的数据转换为字符串
```

