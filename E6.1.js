class ObjectCreator {
    constructor(height, width, edges) {
        this.height = height;
        this.width = width;
        this.edges = edges;
    }
}

class Shape extends ObjectCreator {
    constructor(...args) {
        super(...args);
    }

    display() {
        if (this.edges === 3) {
            return `Triangle is shape since it has ${this.edges} edges`;
        }

        else if (this.edges === 4) {
            // return `Quadrilateral is shape since it has ${this.edges} edges`;
            if (this.width === this.height) {
                return `Quadrilateral is shape(${this.edges} edges). However, this a square since ${this.width} and ${this.height} are equal`;
            } else {
                return `Quadrilateral is shape(${this.edges} edges). However, this a rectangle since ${this.width} and ${this.height} aren't equal`;
            }
        }
    }
}

class Quadrilateral extends Shape {
    constructor(...args) {
        super(...args);
        this.name = 'square';
    }
    area() {
        let area = (this.width * this.height);
        return `The ${this.name} area is: ${area}`;
    }
    perimeter() {
        let perimeter = this.width * 4;
        return `The ${this.name} perimeter is: ${perimeter}`;
    }
}

class Rectangle extends Shape {
    constructor(...args) {
        super(...args);
        this.name = 'rectangle';

    }
    area() {
        let area = (this.width * this.height);
        return `The ${this.name} area is: ${area}`;
    }
    perimeter() {
        let perimeter = (this.width * 2) + (this.height * 2);
        return `The ${this.name} perimeter is: ${perimeter}`;
    }
}

class Triangle extends Shape {
    constructor(height, width, edges, a, b) {
        super(height, width, edges, a, b);
        this.a = a;
        this.b = b;
        this.name = 'triangle';

    }
    area() {
        let area = (this.width * this.height);
        return `The ${this.name} area is: ${area}`;
    }
    perimeter() {
        if (this.a === undefined || this.b === undefined) {
            throw new Error('Insuficient parameters');
        } else {
            let perimeter = this.a + this.b + this.height;
            return `The ${this.name} perimeter is: ${perimeter}`;
        }
    }

    triangleType() {
        if (this.a === undefined || this.b === undefined) {
            throw new Error('Insuficient parameters');
        } else {
            if (this.a === this.b && this.a === this.width && this.b === this.width) {
                return 'This is an equilateral triangle';
            }
            else if (this.a != this.b && this.a != this.width && this.b != this.width) {
                return 'This is a scalene triangle';
            }
            else if (this.a === this.b || this.a === this.width || this.b === this.width) {
                return 'This is an isosceles triangle';
            }
        }
    }
}

let square = new Quadrilateral(5, 5, 4);
let rectangle = new Rectangle(4, 3, 4);
let triangle = new Triangle(3, 5, 3, 4, 4);

console.log(square.display());
console.log(square.area());
console.log(square.perimeter());

console.log(rectangle.display());
console.log(rectangle.area());
console.log(rectangle.perimeter());

console.log(triangle.display());
console.log(triangle.area());
console.log(triangle.perimeter());
console.log(triangle.triangleType())
