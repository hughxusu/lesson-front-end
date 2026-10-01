const makeArray = function <T>(item: T, count: number): Array<T> {
  return new Array(count).fill(item);
};

const makeArray2 = <T>(item: T, count: number): T[] => {
  return new Array(count).fill(item);
};

let array = makeArray('hello', 3);
console.log(array);

let array2 = makeArray2(100, 3);
console.log(array2);
