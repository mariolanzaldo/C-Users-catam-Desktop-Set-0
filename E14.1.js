function addGrid(n, m) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < (n * m); i++) {
        let cell = document.createElement("div");
        cell.innerText = i;
        frag.appendChild(cell).className = "gridItem";
    }
    return frag;
}

function getInput() {
    const container = document.getElementById('container');
    const input = document.querySelectorAll(".in");

    let n = document.getElementById("entryN").value;
    let m = document.getElementById("entryM").value;
    m = parseInt(m);
    n = parseInt(n);
    if (isNaN(m) || isNaN(n)) {
        alert('Type a number');
    }
    else {
        container.style.setProperty('--grid-row', n);
        container.style.setProperty('--grid-col', m);
        let fragment = addGrid(n, m);
        container.appendChild(fragment);
        input.forEach((e) => {
            e.value = "";
        });

        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener('click', event => {
                container.innerHTML = "";
            });
        }

    }
}
