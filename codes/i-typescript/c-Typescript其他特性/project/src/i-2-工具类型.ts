interface User {
  id: number;
  name: string;
  email: string;
}

type UpdateUserInput = Omit<User, 'id' | 'email'>;
let user: UpdateUserInput = { name: '张三' };
console.log(user);
