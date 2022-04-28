let f = [function (){
    return 'Function A';
}, function (){
    return 'Function B';
}, function (){
    return 'Function C';
}];

let myFunction = function (counter){
    if(counter <= 3){
        timer = time[counter];
        if(counter === 1||counter === 2||counter === 3){
            console.log(f[counter-1]());
        }
    }else{
        counter = 0;
        timer = time[counter];
    }
    setTimeout(myFunction,timer,counter + 1);
}
let time = [30000, 60000, 75000];
myFunction(0);
