let f = {a: function (){
console.log('Function A');
},
b: function (){
    console.log('Function B');
},
c: function (){
    console.log('Function C');
}};

let keys = Object.keys(f);

let timer = [30*1000,60*1000,75*1000];

for (i=0; i < timer.length; i++){
    setTimeout (f[keys[i]],timer[i]);
}