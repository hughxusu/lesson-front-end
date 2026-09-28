const PI = 3.1415926;

function getArea(radius) {
  return PI * radius * radius;
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distanceTo(other) {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
}

export default {
  PI,
  getArea,
  Point,
};
