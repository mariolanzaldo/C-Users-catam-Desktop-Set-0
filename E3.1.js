// let a = 1;
// let b = 23;
let z = [];
let array = ["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 

let B = function (a,b) {
    let x;
    x = a * b;
    for (i=x; 0 < i; i = Math.floor(i/13)){
        if(i % 13 >= 10){
            z.push(array[i % 13 - 10]);
        } 
        else{
            z.push(i % 13);
        }
    }
    z = z.reverse();
    z = z.join("");
    console.log(z);
};
B(1,27);