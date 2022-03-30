function add(...args){
 let a = args.reduce(function (a,b) {
     return a+b;
    },0);
 return function(...args){
     let b = args.reduce(function (a,b) {
         return a+b;
        },0);

     if(b){
         return add(a+b);
     }
     return a;
 };
}

var ans = add(2,3,4)() + add(2,3)();
console.log(ans);
