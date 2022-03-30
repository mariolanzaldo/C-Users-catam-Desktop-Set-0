function findProp(obj,b) {
    var x = Object.getOwnPropertyNames(obj);
    var y = [];
    if(b===false || b===undefined){
       return Object.getOwnPropertyNames(obj);
    }
    else if (b===true){
       for (let i=0; i < x.length -1; i++){
          y[i] = x[i];
       }
       return y; 
    }
  }
  
  function customObject (a,b) {
    this.a = a;
    this.b = b;
    this.c = function c (){
          return this.a + this.b;
     }
  };
 
  var obj = new customObject(1, 2);
 console.log(findProp(obj));