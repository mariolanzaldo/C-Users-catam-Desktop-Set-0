function dataType(...args) {
    let type = [];
    for (let i in args) {
        if (!isNaN(Math.floor(args[i])) && Math.floor(args[i]) != args[i]) {
            type[i] = `float`;
        } else if (Array.isArray(args[i])) {
            type[i] = `array`;
        } else {
            type[i] = `${typeof args[i]}`;
        }
    }
    return type;
}

console.log(dataType('a', 1.3, {
    a: 8,
    b: 'P'
}, function () { }, 2, ['problem', 'cat'], true));
