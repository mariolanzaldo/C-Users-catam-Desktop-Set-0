function Image(data, name, width, height) {
    this.data = data;
    this.name = name;
    if (width * height === data.length) {
        this.width = width;
        this.height = height;
    } else {
        throw new Error("The heigh or the width exceeds the provided data");
    }
}

Image.prototype.pixelData = function (x, y) {
    if (x <= this.width && y <= this.height) {
        let np = (x - 1) * this.width + y;
        return this.data[np];
    }
    else {
        throw new Error("The input exceeds the image's dimensions");
    }
};
let data = new Array(25);
let image = new Image(data, 'My Image', 5, 5);
console.log(image.name);
console.log(image.width);
console.log(image.height);
image.pixelData(2, 5);
