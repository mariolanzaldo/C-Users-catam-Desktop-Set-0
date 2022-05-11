function createTable() {
  let selectedId = document.getElementById('table');
  let fragment = document.createDocumentFragment();
  for (let i = 1; i < 6; i++) {
    let tr = document.createElement('TR');
    fragment.appendChild(tr);
    for (let j = 1; j < 6; j++) {
      let td = document.createElement('TD');
      td.classList.add("click");
      td.style.background = randColor();
      i === 1 ? td.textContent = j : i === 2 ? td.textContent = j + 5 : i === 3 ? td.textContent = j + 10 : i === 4 ? td.innerHTML = j + 15 : td.textContent = j + 20;
      tr.appendChild(td);
    }
  }
  let clone = fragment.cloneNode(true);
  selectedId.appendChild(clone);

  selectedId.onclick = function (event) {
    let target = event.target;
    if (target.tagName === 'TD' && target.style.backgroundColor === 'grey') {
      alert(target.textContent);
    } else {
      target.style.backgroundColor = 'grey';
      alert(target.textContent);
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
