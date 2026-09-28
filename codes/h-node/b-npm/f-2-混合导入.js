import Point, { PI, getArea } from './f-1-混合导出.js';

console.log(PI);
console.log(getArea(5));

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);
console.log(p1.distanceTo(p2));
