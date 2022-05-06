function printObjProp(object, parameter) {
  let property = Object.getOwnPropertyNames(object);
  const fromPrototype = Object.keys(Object.getPrototypeOf(object));
  if (parameter) {
    property = property.filter(element => !fromPrototype.includes(element));
    return property;
  } else if (!parameter) {
    return property;
  } else if (typeof object.a === 'function' || typeof object.b === 'function') {
    throw new Error('Function inputs are not allowed')
  }
}

function CustomObject(a, b) {
  this.a = a;
  this.b = b;
};

CustomObject.prototype.c = function () {
  return this.a + this.b;
}

CustomObject.prototype.s = function () {
  return this.a - this.b;
}

let newObject = new CustomObject(3, "4");

newObject.c = newObject.c();
newObject.s = newObject.s();
console.log(printObjProp(newObject, true));
