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
