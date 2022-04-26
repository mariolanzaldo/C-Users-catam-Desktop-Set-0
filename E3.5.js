function printObjProp(obj, param) {
  let prop = Object.getOwnPropertyNames(obj);
  let propEx = [];
  if (typeof param === 'boolean') {
    if (param === false) {
      return prop;
    } else if (param === true) {
      for (let i = 0; i < prop.length - 1; i++) {
        propEx[i] = prop[i];
      }
      return propEx;
    }
  } else if (param === undefined) {
    return prop;
  }
}

function CustomObject(a, b) {
  this.a = a;
  this.b = b;
};

CustomObject.prototype.c = function () {
  console.log(this.a + this.b);
  return this.a + this.b;
}

let obj = new CustomObject(1, 2);
obj.c = obj.c();
console.log(printObjProp(obj, true));
