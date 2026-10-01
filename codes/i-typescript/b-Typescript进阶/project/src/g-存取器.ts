class Ratio {
  private _value: number;

  constructor(ratio: number) {
    this._value = ratio;
  }

  get percent(): string {
    return `${this._value * 100}%`;
  }

  set percent(value: number) {
    if (value < 0) {
      this._value = 0;
    } else if (value > 100) {
      this._value = 1;
    } else {
      this._value = value / 100;
    }
  }
}

let ratio = new Ratio(0.5);
console.log(ratio.percent);
ratio.percent = 100;
console.log(ratio.percent);
