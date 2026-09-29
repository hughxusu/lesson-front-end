interface Employee {
  readonly code: number;
  name: string;
  age: number;
}

let emp: Employee = {
  code: 1001,
  name: '张三',
  age: 30,
};
console.log(emp);

function logEmployee(emp: Employee) {
  console.log(`员工${emp.code}的姓名是${emp.name}，年龄是${emp.age}`);
}
logEmployee(emp);

emp = {
  code: 1002,
  name: '李四',
  age: 32,
};

emp.age = 31;
emp.code = 1002;
