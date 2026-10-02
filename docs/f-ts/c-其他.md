# Typescript其他特性

## 枚举类型

枚举类型（Enum）主要的作用是定义一组具名的常量集合，通过名称的映射来提高代码的可读性、维护性与类型安全性。

枚举类型的使用

```ts
enum Status {
  Success = 200,
  Created = 201,
  NotFound = 404,
  ServerError = 500,
}

interface Response {
  status: Status;
  data?: any;
}

function handleResponse(response: Response) {
  switch (response.status) {
    case Status.Success:
      return { success: response.data };
    case Status.Created:
      return { message: 'created' };
    case Status.NotFound:
      return { message: 'not found' };
    case Status.ServerError:
      return { message: 'server error' };
    default:
      return { message: 'unknown error' };
  }
}

let response: Response = { status: 404 };
console.log(handleResponse(response));
```

- `enum Status`声明一个枚举类型，每个枚举类型中包含多个值。
- `Success = 200`枚举值对应的数字是`200`，每个枚举值实际上都映射了一个基本数据类型。
- `status: 404`枚举值的映射可以直接和枚举值进行比较。

枚举的注意事项

1. 不指定枚举值，枚举计数从`0`开始。

```ts
enum Gender {
  Female,
  Male,
}

let gender: Gender = Gender.Female;
console.log(gender);
console.log(Gender[1]);
```

- `Gender[1]`可以获得枚举值。

2. 可以指定枚举值的开始计数。

```ts
enum Conntatus {
  OFFLINE = 1,
  ONLINE,
  DELETED,
}

let status: Conntatus = Conntatus.ONLINE;
console.log(status);
```

3. 枚举值的映射可以为字符串。

```ts
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

let color: Color = Color.Red;
console.log(color);
```

## 类型保护与类型断言

类型保护（Type Guard）是一种在运行时检查变量类型的机制。编译器在某段具体的代码中，能够确定比变量声明更精确的类型。

1. `typeof`：适用于判断基本数据类型。

```ts
function printValue(val: string | number) {
  if (typeof val === 'string') {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toFixed(2));
  }
}

let hello = 'hello typescript';
printValue(hello);
```

2. `instanceof`：适用于判断某个对象是否属于某个特定的类或构造函数。

```ts
class Dog {
  bark() {
    console.log('Woof!');
  }
}
class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

let dog = new Dog();
makeSound(dog);
```

3. `in`：适用于通过判断对象是否包含某个属性名来区分不同的接口或类型。

```ts
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function move(pet: Fish | Bird) {
  if ('swim' in pet) {
    pet.swim();
  } else {
    pet.fly();
  }
}

let fish = { swim: () => console.log('swim') };
move(fish);
```

类型断言（Type Assertion）是开发者强制指定类型，覆盖TypeScript推断。使用`as`强制转换变量的类型。

```ts
const myInput = document.getElementById("username") as HTMLInputElement;
console.log(myInput.value);
```

## 泛型

泛型（Generics）是类型的占位符，允许在编码时不预先指定具体的类型，而是在使用时再动态地传入具体类型。

### 函数泛型

声明一个泛型函数

```ts
function pair<T>(first: T, second: T) {
  return { first, second };
}

let pairObj = pair<string>('hello', 'world');
console.log(pairObj);

let pairObj2 = pair(10, 20);
console.log(pairObj2);

let pairObj3 = pair(10, 'hello');
console.log(pairObj3);
```

* 这里`<T>`为占位符，使用函数时可以指定`<T>`的类型。
* 使用泛型函数时可以自动推断。
* 这里两个变量必须是同一个类型。

多个泛型

```ts
function pair<T, U>(first: T, second: U) {
  return [first, second];
}

let pairObj = pair('hello', 10);
console.log(pairObj);
```

使用泛型可以定义数组

```ts
function getIntersection<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  return arr1.filter((item) => set2.has(item));
}

const listA = [1, 2, 3, 4];
const listB = [3, 4, 5, 6];
const intersection = getIntersection(listA, listB);
console.log(intersection);
```

* `T[]`中约束了数组的数据类型，要求两个数组数据类型必须一致。
* 泛型还可以用来约束返回值。

箭头函数和匿名函数的泛型

```ts
const makeArray = function <T>(item: T, count: number): Array<T> {
  return new Array(count).fill(item);
};

const makeArray2 = <T>(item: T, count: number): T[] => {
  return new Array(count).fill(item);
};

let array = makeArray('hello', 3);
console.log(array);

let array2 = makeArray2(100, 3);
console.log(array2);
```

* `Array<T>`也表示数组泛型与`T[]`一致。

使用`extends`可以限制泛型的范围

```ts
function add<T extends number | string>(one: T, two: T) {
  return `${one} ${two}`;
}

console.log(add(1, 2));
console.log(add('hello', 'world'));
console.log(add(true, false));
```

* 这里只能使用数字和字符串两种类型，传入其他类型编译器会报错。

### 类泛型

泛型还可以在类中使用

```ts
class queue<T> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift();
  }
}

let numbers = new queue<number>();
numbers.enqueue(1);
numbers.enqueue(2);
let number = numbers.dequeue();
console.log(number);
```

泛型是可以继承的

```ts
interface ID {
  id: number;
}

class IDQueue<T extends ID> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift();
  }
}

class Student implements ID {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let queue = new IDQueue<Student>();
queue.enqueue(new Student(1001, '张三'));
queue.enqueue(new Student(1002, '李四'));
let student = queue.dequeue();
console.log(student);
```

### `keyof`

`keyof`是运算符可以把一个类型的属性名提取出来，变成一组允许的值。

```ts
interface User {
  id: number;
  name: string;
  age: number;
}

type UserKeys = keyof User;

let key1: UserKeys = 'id';
let key2: UserKeys = 'email';
```

* 提取出`UserKeys`后，这个类型就只接受`id`、`name`或`age`这三个字符串，赋值为其他字符串编译器会报错。

`keyof`经常与泛型相结合

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 10012, name: 'Alice', age: 25 };
const id = getProperty(user, 'id');
console.log(id);

const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
const len = getProperty(colors, 'length');
console.log(len);
```

* `K extends keyof T`保证`K`一定是泛型`T`的键。

## 命名空间

命名空间（Namespace）用来解决在大型项目中，会出现撞名的问题的机制。

```ts
namespace Student {
  export class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }
}

namespace Teacher {
  export class User {
    id: number;
    name: string;
    
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }
}

let student: Student.User = new Student.User(1001, '张三');
console.log(student);

let teacher: Teacher.User = new Teacher.User(1001, '李四');
console.log(teacher);
```

* 如果想在命名空间外使用命名空间中的元素，需要使用`export`导出，否则只能在命名空间内部使用。

## 装饰器

装饰器（Decorators）本质是一个函数，可以附加到类、方法、属性、访问器或参数上，用于修改或扩展其行为。

### 类装饰器

定义装饰函数

```ts
function logClass(target: Function) {
  console.log(`类被装饰了`);
  console.log(target);
}
```

* `target: Function`传入装饰目标的构造函数。

使用`@`装饰目标类

```ts
@logClass
class UserService {
  constructor() {}
}
```

* 目标被装饰后，装饰器自动调用。

类装饰器应用

```ts
function countInstances(target: new (...args: any[]) => any) {
  return class extends target {
    static counter = 0;

    constructor(...args: any[]) {
      super(...args);
      (this.constructor as any).counter++;
    }
  };
}

@countInstances
class UserService {
  constructor() {}
}

let one = new UserService();
let two = new UserService();
console.log((UserService as any).counter);
```

* `new (...args: any[]) => any`表示构造函数类型
  1. `(...args: any[]) => any`表示函数类型。
  2. `new`表示函数实例化的方式，说明该函数是构造函数。
  3. `...args: any[]`表示函数变量是任意个数任意类型的。
  4. `=> any`函数的结果是任意类型。
* `target`表示一个构造函数，即被装饰的类。
* `return class extends target`装饰器返回一个构造函数，构造函数继承原有函数。
* 被装饰的类创建对象时调用为装饰后的类。

### 方法装饰器

方法装饰器接收两个参数

```ts
function methodDecorator(
  value: Function,
  context: ClassMethodDecoratorContext,
) {
  console.log(value);
  console.log(context);
}

class User {
  constructor() {}

  @methodDecorator
  pwd(password: string) {
    console.log(`密码为 ${password}`);
  }
}
```

* `value`表示被装饰的方法本身。
* `context`方法上下文对象。

方法装饰器应用

```ts
function measureTime(value: Function, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  return function (this: any, ...args: any[]) {
    const start = performance.now();
    const result = value.apply(this, args);
    const duration = (performance.now() - start).toFixed(2);
    console.log(`方法 ${methodName} 执行完毕，耗时: ${duration}ms`);

    return result;
  };
}

class MathTool {
  @measureTime
  calculate(range: number) {
    let sum = 0;
    for (let i = 0; i < range; i++) {
      sum += i;
    }
    return sum;
  }
}

const tool = new MathTool();
console.log(tool.calculate(1000000));
```

* `return function (this: any, ...args: any[])`这里返回的方法是被装饰后的方法。

> [!important]
>
> 存取器也可以使用方法装饰器处理。

### 属性装饰器

用于监控或转换属性值

```ts
function decorator(value: undefined, context: ClassFieldDecoratorContext) {
  console.log(value);
  console.log(context);
}

class User {
  @decorator
  name: string = '';
}
```

### 装饰器工厂

当装饰器需要接收外部配置参数时，可以用一个函数包裹并返回实际的装饰器函数。

```ts
function Get(path: string) {
  return function (value: Function, context: ClassMethodDecoratorContext) {
    console.log(`将方法 ${String(context.name)} 绑定到路由: GET ${path}`);
  };
}

class UserController {
  @Get('/api/users')
  getUsers() {
    return ['Alice', 'Bob'];
  }
}
```

* 使用装饰器时，可以传入参数。

## 类型定义文件

用于对JavaScript类库的类型进行规范，使得类库可以在TypeScript下使用，文件名称为`*.d.ts`文件。

安装Dayjs工具包

```ts
import dayjs from 'dayjs';

console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
```

查看Dayjs的声明文件

```ts
export = dayjs;

declare function dayjs (date?: dayjs.ConfigType): dayjs.Dayjs
...
```

`declare`关键字是TypeScript中用来进行环境声明（Ambient Declaration）的机制。它的核心作用是告诉TypeScript编译器：“某个变量、函数、类或模块已经在外部存在了，请不要为此生成代码，只需提供类型检查和代码提示即可。”

部分使用npm安装库文件，需要手动安装`.d.ts`类型文件：

* 在引入文件时会有安装提示。
* 类型定义文件安装应该安装到开发环境下。

## 工具类型

工具类型（Utility Types）以现有的类型为基础，通过类型转换/组合，快速生成新的类型。

`Partial`所有字段变为可选

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUserInput = Partial<User>;
let user = { id: 10012, name: '张三' };
console.log(user);
```

`Omit`移除字段

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUserInput = Omit<User, 'id' | 'email'>;
let user: UpdateUserInput = { name: '张三' };
console.log(user);
```

`Readonly`所有字段变为只读

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUserInput = Readonly<User>;
let user: UpdateUserInput = {
  id: 10012,
  name: '张三',
  email: 'zhangsan@example.com',
};
console.log(user);
```

[全部工具类型](https://www.typescriptlang.org/docs/handbook/utility-types.html)

## 练习

1. 定义一个比较接口，用户可以自定义规则，比较两个对象的大小，并实现一个通用升序数组，维持数组中的对象一直是升序的。

```ts
interface Comparable<T> {
  compare: (other: T) => boolean;
}
```



