function addGrid(n,m){
    container.style.setProperty('--grid-row',n);
    container.style.setProperty('--grid-col',m);
    for(let i = 0; i < (n * m); i++){
        let cell = document.createElement("div");
        cell.innerText = i;
        container.appendChild(cell).className = "gridItem";
    }
}

function getInput(){
    const container = document.getElementById('container');
    const input = document.querySelectorAll("input");

    let n = document.getElementById("entryN").value;
    let m = document.getElementById("entryM").value;
    m = parseInt(m);
    n = parseInt(n);
    if(isNaN(m) || isNaN(n)){
        alert('Type a number');
    }
    else{
        addGrid(n,m);
        input.forEach((e) => {e.value = "";
    });

    for(let i = 0; i < input.length ; i++){
        input[i].addEventListener('click', event => {
            container.innerHTML = "";
        });
    }

    }
}