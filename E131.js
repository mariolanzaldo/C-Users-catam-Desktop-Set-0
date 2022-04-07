let selectedId = document.getElementById('table');
selectedId.addEventListener('click', event => {
  let td = event.target.closest('td');
  let cont = td.textContent;
  if(td){
    td.addEventListener('mouseout', function(){
      td.style.background = 'gray';
    })
    console.log(event.target.innerText,'was clicked');
    alert(`${cont} was clicked`)
  }
});



function random(number){
  return Math.floor(Math.random()*number);
}

function randColor () {
  return 'rgb('+random(255)+','+random(255)+','+random(255)+')';
}

let cell = document.getElementsByClassName('click');
for (let i=0 ; i < cell.length; i++){
  cell[i].style.background = randColor();
}