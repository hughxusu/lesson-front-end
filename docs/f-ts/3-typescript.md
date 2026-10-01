# TypeScript

##  类型别名

### Utility Type

通过定义`type`可以使用 Utility Type，但是使用`interface`则不可以

```typescript
type TArea = (width: number, height: number) => number;

// Parameters是ts内置类型方法，用于获取参数列表类型，并返回元组
type params = Parameters<TArea>; // params类型为[number, number]

export const http = (url: string) => {};
type b = Parameters<typeof http>; // ts中的typeof用于提取变量中的类型
typeof 1 === 'number'; // js中的typeof用于类型判断
                    
type Person = {  // 只能包含类型的定义，不能包含函数，类似结构体
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>; // 让属性都变为可选
type PartialPerson = { // 等价于
  name?: string;
  age?: number;
}

type UserProps =  {
  name?:string;
  age?:number;
  sex?:string;
}

type NewUserProps =  Omit<UserProps, 'sex' | 'age'> // 删除某个属性
// 等价于
type  NewUserProps =  {
  name?:string;
}
type PickUserProps =  Pick<UserProps, 'sex' | 'age'> // 挑选属性形成新属性


type PersonKey = keyof Person // 将Person的键全部取出组成联合类型
[p in PersonKey] // 变量PersonKey中所有的key形成数组
k extends PersonKey // 必须是PersonKey的子集

interface IBtnProps2 extends ButtonProps {
  user: User
}
type OmitProps = Omit<IBtnProps2, 'user'> // 可以对interface操作得到type类型，但是不能得到interface
```

## 类型断言

```typescript
interface Bird {
    sing: () => {}
}

interface Dog {
    bark: () => {}
}

function train(animal: Bird | Dog) { 
    (animal as Bird).sing() // 类型断言，将animal强制转换为Bird
  
    if ('sing' in animal) { // 判断变量是否包含属性
        animal.sing()
    }
}

function add(one: string | number, two: string | number) {
    if (typeof one === 'string' || typeof two === 'string') { // 判断类型
        return `${one}${two}`;
    }
    return one + two;
}

class Person {
    name: string
}

let person = new Person()
console.log(person instanceof Person) // 判断类型
```

## 泛型

### 函数泛型

```typescript
function join<T>(first: T, second: T) { // 指定同一种泛型
  return `${first}${second}`;
}

join<number>(1, 1) // 调用函数泛型赋值

function join<T, P>(first: T, second: P) { // 指定不同泛型
  return `${first}${second}`;
}

join<number, string>(1, '1') // 调用泛型
join(1, '1'); // 泛型推断

function map<T>(params: Array<T>) { // 数组泛型 params:T[]，写法也可以
  return params;
}

map<string>(['123']);

function anotherJoin<T>(first: T, second: T): T { // 指定返回泛型
  return first;
}


function hello<T>(params: T) { // 使用泛型作为类型注解
  return params;
}

const func: <T>(param: T) => T = hello;
```

### 类泛型

```typescript
class DataManager<T> { // 类泛型
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

interface Item {
  name: string;
}

class DataManager<T extends Item> { // 泛型的继承
  constructor(private data: T[]) {}
  getItem(index: number): string {
    return this.data[index].name;
  }
}

const data = new DataManager([ // 调用泛型
  { name: 'dell'}
]);

class DataManager<T extends number | string> { // 指定泛型的范围
  constructor(private data: T[]) {}
  getItem(index: number): T {
    return this.data[index];
  }
}

const data = new DataManager<number>([1]);
data.getItem(0);

class Teacher { // 泛型结合 keyof
  constructor(private info: Person) {}
  getInfo<T extends keyof Person>(key: T): Person[T] { // 类型必须是Person中的属性值
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: 'dell',
  age: 18,
  gender: 'male'
});

const test = teacher.getInfo('name');
```

## 命名空间

```typescript
namespace Home { // 在命名空间中定义变量
  class Header {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Header';
      document.body.appendChild(elem);
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Content';
      document.body.appendChild(elem);
    }
  }

  class Footer {
    constructor() {
      const elem = document.createElement('div');
      elem.innerText = 'This is Footer';
      document.body.appendChild(elem);
    }
  }

  export class Page { // 暴露出单个接口
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }
}
```

## 类型定义文件

用于对js类库的类型进行规范，使得类库可以在ts下使用，文件名称为`*.d.ts`文件。

## 装饰器

### 类装饰器

```typescript
function testDecorator(flag: boolean) {
  if (flag) {
    return function(constructor: any) { // 相当于给类绑定一个getName的方法
      constructor.prototype.getName = () => {
        console.log('dell');
      };
    };
  } else {
    return function(constructor: any) {};
  }
}

@testDecorator(true) // 装饰器在类调定义时调用，且只会调用一次
class Test { } 

const test = new Test(); // 定义实力调用构造函数，绑定方法
(test as any).getName();

function testDecorator() {
  return function<T extends new (...args: any[]) => any>(constructor: T) { // 返回模板函数，函数参数是构造函数
    return class extends constructor { // 返回一个工厂函数产生构造函数
      name = 'lee';
      getName() {
        return this.name;
      }
    };
  };
}

const Test = testDecorator()( // 通过函数实现装饰器
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test = new Test('dell');
console.log(test.getName());
```

### 方法装饰器

```typescript
// target 普通方法：对应的是类的 prototype；静态方法：target 对应的是类的构造函数
// key函数名称
// descriptor函数描述，用于控制函数的属性
function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.value = function() {
    return 'decorator';
  };
}

class Test {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  
  @getNameDecorator // 对方法进行装饰，函数定义时自动调用
  getName() {
    return this.name;
  }
}

const test = new Test('dell');
console.log(test.getName());
```

### 访问器装饰器

```typescript
function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) { // 禁止访问器修改值
  descriptor.writable = false; 
}

class Test {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  @visitDecorator // 对访问权进行装饰
  set name(name: string) {
    this._name = name;
  }
}

const test = new Test('dell');
test.name = 'dell lee';
console.log(test.name);
```

### 属性装饰器

属性装饰器无法对实例的属性进行修改

```typescript
function nameDecorator(target: any, key: string): any { // 禁止修改属性
  const descriptor: PropertyDescriptor = {
    writable: false
  };
  return descriptor;
}

class Test {
  @nameDecorator
  name = 'Dell';
}

const test = new Test();
test.name = 'dell lee';
```

### 参数装饰器

```typescript
// 原型，方法名，参数所在的位置
function paramDecorator(target: any, method: string, paramIndex: number) {
  console.log(target, method, paramIndex);
}

class Test {
  getInfo(name: string, @paramDecorator age: number) {
    console.log(name, age);
  }
}

const test = new Test();
test.getInfo('Dell', 30);
```

## 库使用

使用npm安装库文件后需要安装.d.ts类型定义文件，在引入文件时会有安装提示。类型定义文件安装应该安装到开发环境下。



