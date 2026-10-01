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

