function dataType(...args) {
    let type = [];
    for (let i = 0; i < args.length; i++) {
        if (typeof (args[i]) === 'number') {
            if (Math.floor(args[i]) != args[i]) {
                type[i] = "Float";
            } else {
                type[i] = "Number"
            }
        } else if (typeof args[i] === 'object') {
            if (Array.isArray(args[i])) {
                type[i] = "Array";
            } else {
                type[i] = "Object";
            }
        } else if (typeof args[i] === 'string') {
            type[i] = "String";
        } else if (typeof args[i] === 'function') {
            type[i] = "Function";
        }
    }
    return type;
}

console.log(dataType('a', 1.3, {
    a: 8,
    b: 'P'
}, function () { }, 2, ['problem', 'cat']));
