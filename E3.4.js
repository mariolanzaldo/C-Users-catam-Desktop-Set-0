function Image(data, name, width, height) {
    this.data = data;
    this.name = name;
    if (width * height <= data.length) {
        this.width = width;
        this.height = height;
    } else {
        throw new Error("The heigh or the width exceeds the provided data");
    }
}

Image.prototype.pixelData = function (x, y) {
    if (x <= this.width && y <= this.height) {
        var np = (x - 1) * this.width + y;
        return this.data[np];
    }
    else {
        throw new Error("The input exceeds the image's dimensions");
    }
};
var data = new Array(25);
var Image = new Image(data, 'My Image', 5, 5);
console.log(Image.name);
console.log(Image.width);
console.log(Image.height);
Image.pixelData(2, 5);
