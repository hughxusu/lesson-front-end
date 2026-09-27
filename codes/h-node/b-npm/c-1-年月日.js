Date.prototype.dateFormat = function () {
  function padZero(n) {
    return n > 9 ? n : '0' + n;
  }

  const y = this.getFullYear();
  const m = padZero(this.getMonth() + 1);
  const d = padZero(this.getDate());
  const hh = padZero(this.getHours());
  const mm = padZero(this.getMinutes());
  const ss = padZero(this.getSeconds());

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
};

let dt = new Date();
console.log(dt.dateFormat());
