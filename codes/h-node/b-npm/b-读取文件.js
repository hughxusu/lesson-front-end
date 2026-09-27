import fs from 'fs';

let fd = fs.openSync('./关山月.txt', 'r');
let str = fs.readFileSync(fd, 'utf-8');
fs.closeSync(fd);
console.log(str);
