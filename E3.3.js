var myMath = {
  add: function (...args) {
    let result = 0;
    args.forEach(element => result += element);
    return result;
  },
  mul: function (...args) {
    let result = 1;
    args.forEach(element => result *= element);
    return result;
  },
  fact: function (a) {
    let fac = 1;

    for (let i = 1; i <= a; i++) {
      fac *= i;
    }
    return fac;
  }
};

var p = myMath.add(1, 2, 3);
var b = myMath.mul(1, 2, 3);
var c = myMath.fact(4);

console.log(p);
console.log(b);
console.log(c);
