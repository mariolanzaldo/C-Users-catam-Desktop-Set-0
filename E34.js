function img (dat, name, width, heigth) {
    this.dat = data;
    this.name = name;
    this.width = width;
    this.heigth = heigth;
}

img.prototype.pixelData = function (x,y){
    if(x <= this.width && y <= this.heigth){
        var np = (x-1)* this.width + y;
        return this.dat[np];
}
else {
    console.log("The input exceeds the image's dimensions");
}
};
var data = new Array(25);
var Image = new img (data,'My Image',5, 5);
console.log(Image.name);
console.log(Image.width);
console.log(Image.heigth);
Image.pixelData(1,5);