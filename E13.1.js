function createTable() {
  let selectedId = document.getElementById('table');
  for (let i = 1; i < 6; i++) {
    let tr = document.createElement('TR');
    selectedId.appendChild(tr);
    for (let j = 1; j < 6; j++) {
      console.log(i);
      let td = document.createElement('TD');
      td.classList.add("click");
      td.style.background = randColor();
      i === 1 ? td.innerHTML = j : i === 2 ? td.innerHTML = j + 5 : i === 3 ? td.innerHTML = j + 10 : i === 4 ? td.innerHTML = j + 15 : td.innerHTML = j + 20;
      tr.appendChild(td);
    }
  }
  // let color = cell.style.backgroundColor;
  let cell = document.getElementsByClassName("click");
  for (let i in cell) {
    cell[i].onclick = function () {
      if (cell[i].style.backgroundColor === 'grey') {
        alert(cell[i].innerHTML);
      } else {
        cell[i].style.background = 'grey';
        alert(cell[i].innerHTML);
      }
    }
  }
}

function random(number) {
  return Math.floor(Math.random() * number);
}

function randColor() {
  return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
}

createTable();
