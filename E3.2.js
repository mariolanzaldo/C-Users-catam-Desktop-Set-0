function add(...args) {
    let result = 0;
    args.forEach(element => result += element);
    return result;
}

var ans = add(1, 2) + add(1, 4, 6, 7, 2);
console.log(ans);
