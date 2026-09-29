type MathFunc = (radius: number) => number;

let circle: MathFunc = (radius) => {
  return 2 * Math.PI * radius;
};

let square: MathFunc = (side) => {
  return side * side;
};

console.log(circle(5));
console.log(square(5));
