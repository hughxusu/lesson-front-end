# 包管理

Node.js中模块又叫做包，模块分为内置模块和第三方模块。

* 内置模块，安装node后自带的模块，包括：文件模块、路径模块等。
* 第三方模块，有开发者免费分享的模块，这些模块提供高级的功能。

## npm

[npmjs](https://www.npmjs.com/)是全球最大的Node包共享平台，在该平台上共享了数百万个包。`npm`（Node Package Manager）是用于管理第三方模块的命令。安装Node后，`npm`工具也默认安装。

查看`npm`是否安装成功

```shell
npm             # 查看帮助
npm -v          # npm版本
```

### 初始化项目

在当前文件夹下使用

```shell
npm init -y   # 快速初始化
npm init      # 交互式初始化
```

初始化node项目文件夹下有一个配置文件`package.json`文件，现在了项目的当前配置

```json
{
  "name": "a-node",           // 项目名称
  "version": "1.0.0",         // 版本号
  "description": "",
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs"         // 模块化规范
}

```

* `type`表示模块化规范，修改值为`module`。
  * `commonjs`传统的模块化规范。
  * `module`为ES6后新模块化规范。

> [!warning]
>
> 当前版本Node已经对ES6模块化规范支持非常完善，现在的项目一般统一使用新规范。

## 内置模块

Node.js官方提供了内置的fs模块用来操作文件，该模块可以直接使用。

* 它包含一系列的方法和属性，用来满足用户对文件的操作需求。
* fs中所有操作都分为同步和异步，同步会阻塞程序执行，异步操作不会阻塞程序。

下面文件读写均已同步操作为例：

1. 文件写入。操作步骤：
   1. 打开文件；
   2. 向文件中写入内容；
   3. 保存并关闭文件。

```javascript
import fs from 'fs'

let str =  `
关山月
明月出天山，苍茫云海间。
长风几万里，吹度玉门关。
汉下白登道，胡窥青海湾。
由来征战地，不见有人还。
戍客望边邑，思归多苦颜。
高楼当此夜，叹息未应闲。
`

let fd = fs.openSync('./关山月.txt', 'w')
fs.writeSync(fd, str)
fs.closeSync(fd)
```

2. 读取文件。

```javascript
import fs from 'fs'

let fd = fs.openSync('./关山月.txt', 'r')
let str = fs.readFileSync(fd, 'utf-8')
fs.closeSync(fd)
console.log(str)
```

## 第三方模块

使用如下命令可以安装第三方模块

```shell
npm install [包名]  
npm i [包名]
```

### dayjs

[Day.js](https://day.js.org/zh-CN/)是一个轻量的处理时间和日期的JavaScript库。

1. 使用JavaScript内置函数显示年月日

```js
```











* 通过npm下载的包都放到node_modules文件夹中。
* npm包可以直接通过包名引入。
* node在使用模块名字来引入模块时，会首先在当前目录的node_modules中寻找，如果没有则去上一级目录的node_modules中寻找，直到找到为止或磁盘的根目录，如果没有则报错。













```shell
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





