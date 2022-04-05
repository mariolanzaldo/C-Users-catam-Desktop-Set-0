function ObjectCreator(height, width, edges){
    this.height = height;
    this.width = width;
    this.edges = edges;
    this.isShape = function (){
        if (this.edges === 3){
            this.isShape = `Triangle is Shape`;
            return this.isShape;
        }
    
        else if (this.edges === 4){
            if (this.width === this.height) {    
            this.isShape = 'Square is Shape';
            return this.isShape;
            } else {
                this.isShape = 'Rectangle is Shape';
            return this.isShape;
            }
        }
    }
}

ObjectCreator.prototype.type = function (){
    let s = {};
    if (this.isShape === `Triangle is Shape`){
        s.edges = `${this.edges}`;
        s.type = `Triangle`;
        return s;
    }
    else if (this.isShape === `Square is Shape`){
        s.edges = `${this.edges}`;
        s.type = `Quadrilateral`;
        return s;
    }
    else if (this.isShape === `Rectangle is Shape`){
        s.edges = `${this.edges}`;
        s.type = `Quadrilateral`;
        return s;
    }
};

ObjectCreator.prototype.area = function calcAP(a,b){ //Where a, b is additional information if the figure is triangle
    let ap = {};
    if (this.isShape === `Triangle is Shape`){
        ap.area = (this.width * this.height)/2;
        ap.perimeter = a + b + this.width;
        return ap;
    }
    else if (this.isShape === `Square is Shape`){
        ap.area = this.width * this.width;
        ap.perimeter = this.width *4;
        return ap;
    }
    else if (this.isShape === `Rectangle is Shape`){
        ap.area = this.width * this.height;
        ap.perimeter = (this.width *2)+(this.height*2);
        return ap;
    }
};

ObjectCreator.prototype.triangleType = function(a,b){
    if (a === b && a === this.width && b === this.width){
        return 'This is an equilateral triangle';
    }
    else if (a != b && a != this.width && b != this.width){
        return 'This is a scalene triangle';
    }
    else if (a === b || a === this.width || b === this.width){
        return 'This is an isosceles triangle';
    }
};

const rectangle = new ObjectCreator(10,9,4);
const triangle = new ObjectCreator(5,5,3);
const square = new ObjectCreator(5,5,4);

console.log(rectangle.isShape());
console.log(rectangle.type());
console.log(rectangle.area(4,8));

console.log(square.isShape());
console.log(square.type());
console.log(square.area(4,8));

console.log(triangle.isShape());
console.log(triangle.type());
console.log(triangle.area(5,5));
console.log(triangle.triangleType(5,5));