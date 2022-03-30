function f(...args){
    let a = [];
    let type=[];
    for (let i = 0;i < args.length; i++){
        if (typeof (args[i]) === 'number'){
            if (Math.floor(args[i]) != args[i]) {
                type[i] = "Float";
            }
            else {
                type[i] = "Number"
            }
        }
        else {a[i] = Object.prototype.toString.call(args[i]);
            type[i] = a[i].substring(
            a[i].indexOf(" ") + 1,
            a[i].indexOf("]"));}
    }
    return type;
}

console.log(f('a', 1.3,{
    a: 8,
    b: 'P'
}, function (){}, 2, ['problem', 'cat']));