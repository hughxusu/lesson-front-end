class Employee {
  protected id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  private info() {
    return `ID: ${this.id}, 姓名: ${this.name}`;
  }

  show() {
    console.log(this.info());
  }
}

class Manager extends Employee {
  constructor(id: number, name: string) {
    super(id, name);
  }

  title() {
    return this.info() + ' 是经理';
  }
}

let emp = new Employee(1001, '张三');
console.log(emp.name);
emp.show();
console.log(emp.id);
console.log(emp.info());

let mg = new Manager(1002, '李四');
console.log(mg.name);
console.log(mg.title());
mg.show();
console.log(mg.id);
console.log(mg.info());
