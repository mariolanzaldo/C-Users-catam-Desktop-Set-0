function printAttr(element){
    if(element.hasAttributes()){
        var attrs = div.attributes;
        var output = "Should print out:";
        for(var i = 0; i < attrs.length; i++ ){
            if(i < attrs.length - 1){
                output +=" " + attrs[i].value + ",";
            } else{
                output +=" " + attrs[i].value + ".";
            }
        }
        return output;
    }else {
        output = "No attributes to show";
        return output;
    }
}

let div = document.querySelector("div");

//To print in console
let print = printAttr(div);
console.log(print);

//To print in HTML
const body = document.body;
let printHtml = document.createElement("div");
body.append(printHtml);
printHtml.id = '2'
document.getElementById('2').innerHTML = print;