function pair<T>(first: T, second: T) {
  return { first, second };
}

let pairObj = pair<string>('hello', 'world');
console.log(pairObj);

let pairObj2 = pair(10, 20);
console.log(pairObj2);

let pairObj3 = pair(10, 'hello');
console.log(pairObj3);
