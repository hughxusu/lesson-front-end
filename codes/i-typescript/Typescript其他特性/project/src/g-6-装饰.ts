function Get(path: string) {
  return function (value: Function, context: ClassMethodDecoratorContext) {
    console.log(`将方法 ${String(context.name)} 绑定到路由: GET ${path}`);
  };
}

class UserController {
  @Get('/api/users')
  getUsers() {
    return ['Alice', 'Bob'];
  }
}
