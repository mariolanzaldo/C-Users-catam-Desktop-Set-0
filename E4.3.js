let newObj = (function () {
    let privateVar;
    return {
        set: function (num) {
            if (typeof num === 'number') {
                privateVar = num;
            } else {
                throw new Error(`Must be a number`);
            }
        },
        get: function () {
            return {
                num: privateVar
            };
        }
    }
})();

newObj.set(4);
console.log(newObj.get());
