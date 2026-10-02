interface User {
  id: number;
  name: string;
  age: number;
}

type UserKeys = keyof User;

let key1: UserKeys = 'id';
let key2: UserKeys = 'email';
