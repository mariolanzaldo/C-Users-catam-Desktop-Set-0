function HoldObj(val) {
    let obj = {
        a:val
    };
    Object.defineProperties(this, {
        a: setter_getter(obj, "a")
    });
}

function setter_getter(obj, key) {
    return {
        get: function () {
            let b = obj[key];
            if (typeof(b)=== "number"){
                return b;
            }
            else {
                return console.log("Error! Type a number...")
            }
        },

        set: function (value) {
            if (typeOf(value) === type)
                obj[key] = value;
        }
    };
}

let newObj = new HoldObj(-8);
console.log(newObj.a);