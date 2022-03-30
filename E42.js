function addRec(array) {
    if (array.length===0){
       return console.log('The array is empty');
    }
    else if (array.length===1){
        return array[0];
    }
    else {
        return array[0] + addRec(array.slice(1))
    }
}

var arr = [1, 3, 5, 7];
console.log(addRec (arr));