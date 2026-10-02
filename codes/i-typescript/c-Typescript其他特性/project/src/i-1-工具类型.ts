interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUserInput = Partial<User>;
let user: UpdateUserInput = { id: 10012, name: '张三' };
console.log(user);
