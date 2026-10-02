namespace Student {
  export class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }
}

namespace Teacher {
  export class User {
    id: number;
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }
}

let student: Student.User = new Student.User(1001, '张三');
console.log(student);

let teacher: Teacher.User = new Teacher.User(1001, '李四');
console.log(teacher);
