function add<T extends number | string>(one: T, two: T) {
  return `${one} ${two}`;
}

console.log(add(1, 2));
console.log(add('hello', 'world'));
console.log(add(true, false));
