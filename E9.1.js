function dataParse(string){
let x;
x = JSON.parse(string, function (key, value) {
    if (typeof value === "string" 
        && value.substring(0,8) == "function") {
        let startFun = value.indexOf('{') + 1;
        let endFun = value.lastIndexOf('}');
        let startPar = value.indexOf('(') + 1;
        let endPar = value.indexOf(')');

        return new Function(value.substring(startPar, endPar)
                          , value.substring(startFun, endFun));
    }
    return value;
});
console.log(typeof x);
return x;
}

let str = '{"prop1": 42, "myFn":"function(a,b){return a+b+this.prop1;}"}';
let newObj = dataParse(str);
console.log(newObj.myFn(1,2));
