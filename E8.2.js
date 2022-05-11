function a() {
    console.log('Function A');
}

function b() {
    console.log('Function B');
}

function c() {
    console.log('Function C');
}

function myFunction(counter) {
    let timer = 0;
    if (counter !== 0 && counter % 2 === 0) {
        a();
    }
    if (counter !== 0 && counter % 4 === 0) {
        b();
    }
    if (counter !== 0 && counter % 5 === 0) {
        c();
    }
    setTimeout(myFunction, timer + 15000, counter + 1);
}
myFunction(0);
