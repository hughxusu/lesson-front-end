function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 10012, name: 'Alice', age: 25 };
const id = getProperty(user, 'id');
console.log(id);

const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
const len = getProperty(colors, 'length');
console.log(len);
