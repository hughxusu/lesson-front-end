function methodDecorator(
  value: Function,
  context: ClassMethodDecoratorContext,
) {
  console.log(value);
  console.log(context);
}

class User {
  constructor() {}

  @methodDecorator
  pwd(password: string) {
    console.log(`密码为 ${password}`);
  }
}
