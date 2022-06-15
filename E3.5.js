function printObjProp(object, instance) {
    let output = [];
    for (let key in object) {
      if (instance && object.hasOwnProperty(key)) {
        output.push(key);
      } else if (!instance) {
        output.push(key);
      }
    }
    return output
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
  
  let newObject = new CustomObject(3, 2);
  console.log(printObjProp(newObject));
