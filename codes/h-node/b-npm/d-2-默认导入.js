import math from './d-1-默认导出.js';

console.log(math.PI);
console.log(math.getArea(5));

let p1 = new math.Point(1, 2);
let p2 = new math.Point(3, 4);
console.log(p1.distanceTo(p2));
