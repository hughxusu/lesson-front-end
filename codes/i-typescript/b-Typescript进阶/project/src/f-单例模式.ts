class Singleton {
  private static _instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!this._instance) {
      this._instance = new Singleton();
    }
    return this._instance;
  }
}

let first = Singleton.getInstance();
let second = Singleton.getInstance();
console.log(first === second);
