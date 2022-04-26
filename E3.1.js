function base13(a, b) {
    let x;
    x = a * b;
    let result = parseInt(String(x)).toString(13);
    return result;
}

let A = base13(1, 27);
console.log(A);
