function getInput() {
    const container = document.querySelector('.wrapper');
    let input = document.querySelector("input").value;
    const fragment = document.createDocumentFragment();
    const temp = document.querySelector('.temp').content;
    const clone = document.importNode(temp, true);

    fragment.appendChild(clone);
    input = parseInt(input);
    if (isNaN(input) === false) {
        if (input <= 4 && input > 1) {
            container.remove();
            document.body.appendChild(fragment);
            document.querySelector(".wrapper").style.setProperty('--n-col', input);
        } else {
            alert('Only columns between 2-4 are accepted');
        }
    } else {
        alert('Type a number');
    }
}
