function distance(x1,y1,z1,x2,y2,z2){
    let delta = 0;

//Data as parameters
    if(typeof x1 === "number" && 
    typeof y1 === "number" && 
    typeof x2=== "number" && 
    typeof z1 === "number" && 
    typeof y2 === "undefined" && 
    typeof z2 === "undefined" ){
        delta = Math.sqrt(Math.pow(z1-x1,2)+
        Math.pow(x2-y1,2));
        return delta;
    }

    else if(typeof x1 === "number" && 
    typeof y1 === "number" && 
    typeof x2 === "number" && 
    typeof z1 === "number" && 
    typeof y2 === "number" && 
    typeof z2 === "number"){
        delta= Math.sqrt(Math.pow(x2-x1,2)+
        Math.pow(y2-y1,2)+
        Math.pow(z2-z1,2));
        return delta;
    }   

//For given data in Array form
    else if (x1 instanceof Array && y1 instanceof Array) {
        if (x1.length === y1.length && x1.length == 2){
            let sum = 0;
            for(let i in x1){
                sum = Math.pow(y1[i] - x1[i], 2);
                delta = sum + delta;
            }
            return Math.sqrt(delta);
        }
        else if (x1.length === y1.length && x1.length == 3){
            let sum = 0;
            for(let i in x1){
                sum = Math.pow(y1[i] - x1[i], 2);
                delta = sum + delta;
            }
            return Math.sqrt(delta);
        }
        else {
            return console.log('Error: Incompatible array data');
        }
    }

    else {
        return console.log('Error: Insufficient parameters or incompatible data');
    }
}

console.log(distance([1,2,3],[2,2,2]),1);