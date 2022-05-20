function dataParse(str) {
    return Function('"use strict"; return (' + str + ')')();
}

const str = "{prop1: 42, myFn: function(a,b) { return a+b+this.prop1;}}";
let newObj = dataParse(str);
console.log(newObj.myFn(2, 3));
