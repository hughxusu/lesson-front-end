class Investment {
  principal: number;
  years: number;

  constructor(principal: number, years: number) {
    this.principal = principal;
    this.years = years;
  }

  show() {
    return `本金: ${this.principal}, 年限: ${this.years}`;
  }
}

let i: Investment = new Investment(1000, 5);
console.log(i.show());

class FixedDeposit extends Investment {
  rate: number;

  constructor(principal: number, years: number, rate: number) {
    super(principal, years);
    this.rate = rate;
  }

  show() {
    return super.show() + `, 利率: ${this.rate}`;
  }

  calculateReturn() {
    return this.principal * (1 + this.rate) ** this.years;
  }
}

let fd: FixedDeposit = new FixedDeposit(1000, 5, 0.05);
console.log(fd.show());
console.log(`到期金额: ${fd.calculateReturn()}`);
