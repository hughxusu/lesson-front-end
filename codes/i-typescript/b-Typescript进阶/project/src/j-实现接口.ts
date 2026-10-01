interface Loggable {
  log(message: string): void;
}

interface Serializable {
  serialize(): string;
}

class BaseEntity {
  id: number = 0;
}

class User extends BaseEntity implements Loggable, Serializable {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  log(message: string): void {
    console.log(`[USER LOG]: ${message}`);
  }

  serialize(): string {
    return JSON.stringify({ id: this.id, name: this.name });
  }
}

let loggergable: Loggable = new User('张三');
loggergable.log('这是一条日志');

let serializable: Serializable = new User('李四');
console.log(serializable.serialize());
