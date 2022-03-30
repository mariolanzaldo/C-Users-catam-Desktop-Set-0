function distance(x1,y1,z1,x2,y2,z2){
    let delta = 0;
    if(typeof x1 === "number" && 
    typeof y1 === "number" && 
    typeof x2=== "number" && 
    typeof z1 === "number" && 
    typeof y2 === "undefined" && 
    typeof z2 === "undefined" ){
    delta = Math.sqrt(Math.pow(z1-x1,2) + 
    Math.pow(x2-y1,2));
    return delta;
}
else if(typeof x1 === "number" && 
typeof y1 === "number" && 
typeof x2 === "number" && 
typeof z1 === "number" && 
typeof y2 === "number" && 
typeof z2 === "number"){
    delta = Math.sqrt(Math.pow(x2-x1,2)+
    Math.pow(y2-y1,2)+
    Math.pow(z2-z1,2));
    return delta;
}
else {
    return console.log('Insufficient parameters or introduce numerical values');
}
}

console.log(distance(1,2,0,3,1,1));