function fibbonacci (n){
    if (n < 3)
    {
        if (n===0 ){
            return 0;
        }
        else {
            return 1;
        }
    }
    else {
        return fibbonacci(n-1) + fibbonacci(n-2);
    }
}

console.log(fibbonacci(4));