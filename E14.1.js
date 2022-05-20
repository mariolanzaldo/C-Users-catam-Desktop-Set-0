function getInput() {
    let container = document.querySelector("#container");
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
        let nodeContainer = document.createElement("div");
        nodeContainer.setAttribute("id", "node_container");
        nodeContainer.style.setProperty('--grid-row', n);
        nodeContainer.style.setProperty('--grid-col', m);
        frag.appendChild(cell).className = "gridItem";
        let clone;

        for (let i = 0; i < (n * m); i++) {
            cell.innerText = i;
            clone = frag.cloneNode(true);
            nodeContainer.appendChild(clone);
        }

        container.appendChild(nodeContainer);
    }
}

const body = document.querySelector("body");
let container = document.querySelector("#container");
body.addEventListener('click', event => {
    if (event.target === input[1] || event.target === input[0]) {
        container.innerHTML = "";
        if (event.target.value !== "") {
            event.target.value = "";
        }
    }
});
