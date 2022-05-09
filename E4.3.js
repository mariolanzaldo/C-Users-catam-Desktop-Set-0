class HoldObj {
  constructor(a) {
    if (isNaN(parseInt(a))) {
      throw new Error('Must be a number');
    } else {
      this[a] = a;
    }
  }
}
const value = 2;
const newObj = new HoldObj(value);

let newObjProxy = new Proxy(newObj, {
  get: (obj, prop) => {
    if (prop == `${value}`) {
      return new Error(prop + '- is private');
    }
    return obj[prop];
  },
  set: (obj, prop, val) => {
    if (prop == `${value}`) {
      throw new Error(prop + '- is private');
    }
    obj[prop] = val;
    return true;
  }
});

newObjProxy[value] = 3;
console.log(newObjProxy);
