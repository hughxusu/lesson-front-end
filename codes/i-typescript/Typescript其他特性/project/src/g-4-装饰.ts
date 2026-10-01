function measureTime(value: Function, context: ClassMethodDecoratorContext) {
  const methodName = String(context.name);

  return function (this: any, ...args: any[]) {
    const start = performance.now();
    const result = value.apply(this, args);
    const duration = (performance.now() - start).toFixed(2);
    console.log(`方法 ${methodName} 执行完毕，耗时: ${duration}ms`);

    return result;
  };
}

class MathTool {
  @measureTime
  calculate(range: number) {
    let sum = 0;
    for (let i = 0; i < range; i++) {
      sum += i;
    }
    return sum;
  }
}

const tool = new MathTool();
console.log(tool.calculate(1000000));
