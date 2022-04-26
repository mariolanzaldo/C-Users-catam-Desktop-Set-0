function addRec(array, leng = array.length, sum = 0) {
    if (leng === 0) {
        return 0;
    } else if (leng === 1) {
        return array[0] + sum;
    }
    else {
        sum += array[leng - 1];
        return addRec(array, leng - 1, sum)
    }
}

let arr = [1, 3, 5, 7];
console.log(addRec(arr));
console.log(arr);
