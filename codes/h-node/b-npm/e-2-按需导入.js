import { PI as circlePI, getArea, Point } from './e-1-按需导出.js';

console.log(circlePI);
console.log(getArea(5));

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);
console.log(p1.distanceTo(p2));
