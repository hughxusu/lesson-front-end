interface Person {
  name: string;
  gender: 'male' | 'female';
  age?: number;
}

let person: Person = {
  name: '张三',
  gender: 'male',
};

console.log(person);
