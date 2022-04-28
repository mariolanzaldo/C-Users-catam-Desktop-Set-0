function dataParse(str) {
    let obj = JSON.parse(str);
    obj.myFn = eval("(" + obj.myFn + ")");
    return obj;
}

let str = '{"prop1": 42, "myFn":"function(a,b){return a+b+this.prop1;}"}';
let newObj = dataParse(str);
console.log(newObj);
console.log(newObj.myFn(1, 2));
