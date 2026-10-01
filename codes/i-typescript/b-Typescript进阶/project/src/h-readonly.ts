class Employee {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let emp = new Employee(1001, '张三');
console.log(emp.id);
emp.id = 10012;
