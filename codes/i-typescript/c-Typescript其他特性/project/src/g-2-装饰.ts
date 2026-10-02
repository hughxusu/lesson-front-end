function countInstances(target: new (...args: any[]) => any) {
  return class extends target {
    static counter = 0;

    constructor(...args: any[]) {
      super(...args);
      (this.constructor as any).counter++;
    }
  };
}

@countInstances
class UserService {
  constructor() {}
}

let one = new UserService();
let two = new UserService();
console.log((UserService as any).counter);
