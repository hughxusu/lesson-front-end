interface ID {
  id: number;
}

class IDQueue<T extends ID> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift();
  }
}

class Student implements ID {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

let queue = new IDQueue<Student>();
queue.enqueue(new Student(1001, '张三'));
queue.enqueue(new Student(1002, '李四'));
let student = queue.dequeue();
console.log(student);
