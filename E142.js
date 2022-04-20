function getInput() {
    const container = document.querySelector('div');
    let input = document.querySelector("input").value;
    input = parseInt(input);
    if (isNaN(input) === false){
        if (input <= 4 && input > 1){
            container.style.setProperty('--n-col',input);
        } else {
            alert('Only columns between 2-4 are accepted');
        }
    }else{
        alert('Type a number');
    }
}
