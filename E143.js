fetch('./E143.json')
.then(response => {
    return response.json();
}).then(data => attachContent(data),1);
let container = document.querySelector(".container");

function attachContent(data){
    let hash = new URL(document.URL).hash;
    hash = hash.slice(2);
        if (data[0].image===hash||data[1].image===hash||data[2].image===hash){
            displayTemp2(hash,data);
        }else{
            displayTemp1(data);
    }
window.addEventListener("hashchange", function(e) {
	let container = document.querySelector(".container");
    let newHash = new URL(document.URL).hash;
    let imageIndex = newHash.slice(2);
    data.forEach(item =>{
        if(item.image==imageIndex){
            container.innerHTML="";
            displayTemp2(imageIndex,data);
        }else if(newHash.length === 0){
            container.innerHTML="";
            displayTemp1(data);
        }
    });
});
}


function displayTemp1(data){
    let container = document.querySelector(".container");
    let temp1 = document.querySelector('.template1').content;
    let fragment = document.createDocumentFragment();
    data.forEach(element => {
        temp1.querySelector(".image").innerHTML = element.image;
        temp1.querySelector(".title").innerHTML = element.title;
        temp1.querySelector(".text").innerHTML = element.text;
        if(data.indexOf(element) === 0){
            temp1.querySelector(".nav-link").setAttribute('href', '#/Image1');
        } else if(data.indexOf(element) === 1){
            temp1.querySelector(".nav-link").setAttribute('href', '#/Image2');
        } else if(data.indexOf(element) === 2){
            temp1.querySelector(".nav-link").setAttribute('href', '#/Image3');
        }

        let clone = document.importNode(temp1,true);
        fragment.appendChild(clone);
});
container.appendChild(fragment);  
}

function displayTemp2(imageIndex,data){
    let container = document.querySelector(".container");
    let temp2 = document.querySelector('.template2').content;
    let fragment = document.createDocumentFragment();
    data.forEach(item =>{
        if(item.image === imageIndex){
            temp2.querySelector(".image-t2").innerHTML = item.image;
            temp2.querySelector(".title-t2").innerHTML = item.title;
            temp2.querySelector(".text-t2").innerHTML = item.text;
        }
    });

    let clone = document.importNode(temp2,true);
    fragment.appendChild(clone);
    container.appendChild(fragment); 
}

