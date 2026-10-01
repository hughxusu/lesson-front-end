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



## 类型定义文件

用于对js类库的类型进行规范，使得类库可以在ts下使用，文件名称为`*.d.ts`文件。



## 库使用

使用npm安装库文件后需要安装.d.ts类型定义文件，在引入文件时会有安装提示。类型定义文件安装应该安装到开发环境下。



