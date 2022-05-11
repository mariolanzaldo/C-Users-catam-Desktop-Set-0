function dataParse(str) {
    let parsedObj = JSON.parse(str);
    const body = /[^{\}]+(?=})/g;
    const args = /(?<value>(?<=\().*(?=\)))/g;
    const argFunc = parsedObj.myFn.match(args);
    const bodyFunc = parsedObj.myFn.match(body);
    parsedObj.myFn = new Function(argFunc, bodyFunc);
    return parsedObj;
}


let str = '{"prop1": 42, "myFn":"function(a,b){return a+b+this.prop1;}"}';
let newObj = dataParse(str);
console.log(newObj);
console.log(newObj.myFn(1, 2));
