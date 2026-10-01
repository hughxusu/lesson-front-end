function logClass(target: Function) {
  console.log(`类被装饰了`);
  console.log(target);
}

@logClass
class UserService {
  constructor() {}
}
