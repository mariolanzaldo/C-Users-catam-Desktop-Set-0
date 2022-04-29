let btn = document.querySelector('input');
let met = document.querySelector('meter');
btn.style.width = '200px';
btn.style.fontSize = '20px';
met.style.width = '200px';
met.style.height = '20px';

let increment = (function () {
    let i = 1;
    return function () {
        return i++
    }
})();

btn.addEventListener('click', () => {
    let counter = increment();
    if (counter === 1) {
        met.value = counter;
    }
    else if (counter === 2) {
        met.value = counter;
    }
    else if (counter === 3) {
        met.value = counter;
        alert('Button is disabled');
        btn.disabled = true;
        // This alternative removes the button
        // btn.remove();
        // met.style.transform ='translate(100%,0)';
    }
});
