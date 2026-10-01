class Circle {
  static PI: number = 3.14159;

  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Circle.PI * this.radius * this.radius;
  }
}

let circle = new Circle(5);
console.log(circle.area());
console.log(Circle.PI);
