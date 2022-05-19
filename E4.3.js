clet newObj = (function () {
  let objects = {};

  return {
    set: function (num) {
      if (!isNaN(parseInt(num))) {
        objects.num = num;
      } else {
        throw new Error(`Must be a number`);
      }
    },
    get: function () {
      return objects;
    }
  };
})();

newObj.set(4);
console.log(newObj.get());
