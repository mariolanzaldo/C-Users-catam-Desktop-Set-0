var obj = {
    add: function (a,b,c) {
       return a+b+c;
    },
    mul: function(a, b,c) {
      return a *c* b;
    },
    f: function(a) {
        let fac = 1;

        for(let i = 1; i <= a ; i++){
          fac *=i;
        }

      return fac;
    }
  };
  
 var p = obj.add(3, 9,10);
 var b = obj.mul(3, 6, 2);
 var c = obj.f(4);
 
 console.log(p);
 console.log(b);
 console.log(c);