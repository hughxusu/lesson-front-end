function printValue(val: string | number) {
  if (typeof val === 'string') {
    console.log(val.toUpperCase());
  } else {
    console.log(val.toFixed(2));
  }
}

let hello = 'hello typescript';
printValue(hello);
