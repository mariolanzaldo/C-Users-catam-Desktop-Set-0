class HoldObj {
    constructor(a) {
        this.a = a;
    }

    get a() {
        return this._a;
    }
    set a(val) {
        if (isNaN(parseInt(val)) === true) {
            throw new Error('Must be a number');
        } else {
            this._a = parseInt(val);
        }
    }
}

const newObj = new HoldObj('9');
console.log(newObj);
