interface Greeting {
  (name: string): string;
}

let greeting: Greeting = (name) => {
  return `hello ${name}`;
};
console.log(greeting('tom'));
