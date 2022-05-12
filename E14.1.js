function getInput() {
    const container = document.getElementById('container');
    const input = document.querySelectorAll(".in");
    const frag = document.createDocumentFragment();
    let cell = document.createElement("div");

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

        frag.appendChild(cell).className = "gridItem";
        let clone = [];
        for (let i = 0; i < (n * m); i++) {
            cell.innerText = i;
            clone = frag.cloneNode(true);
            container.appendChild(clone);
        }

        input.forEach((e) => {
            e.value = "";
            e.addEventListener('click', event => {
                container.innerHTML = "";
            });
        });
    }
}
