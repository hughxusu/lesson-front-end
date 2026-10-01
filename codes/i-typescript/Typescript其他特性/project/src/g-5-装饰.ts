function decorator(value: undefined, context: ClassFieldDecoratorContext) {
  console.log(value);
  console.log(context);
}

class User {
  @decorator
  name: string = '';
}
