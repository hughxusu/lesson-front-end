class queue<T> {
  private items: T[] = [];

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift();
  }
}

let numbers = new queue<number>();
numbers.enqueue(1);
numbers.enqueue(2);
let number = numbers.dequeue();
console.log(number);
