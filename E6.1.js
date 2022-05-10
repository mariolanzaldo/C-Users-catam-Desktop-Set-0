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
            if (this.width === this.height) {
                return `Quadrilateral is shape(${this.edges} edges). However, this a square since ${this.width} and ${this.height} are equal`;
            } else {
                return `Quadrilateral is shape(${this.edges} edges). However, this a rectangle since ${this.width} and ${this.height} aren't equal`;
            }
        }
    }
}

class Square extends Shape {
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
        let perimeter = 2 * (this.width + this.height);
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

let square = new Square(5, 5, 4);
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

//Another example
class Animal {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}`)
    };

    behaviour() {

    };
}

class Vertebrate extends Animal {
    constructor(...args) {
        super(...args);
        this.spine = 'spine';
    }
}

class Invertebrate extends Animal {
    constructor(...args) {
        super(...args);
        this.spine = 'no-spine';
    }
}

class Octopus extends Invertebrate {
    constructor(...args) {
        super(...args);
        this.behave = 'solitary'
        this.sound = 'no-sound'
    }
    behaviour() {
        console.log(`I'm an octopus and I have ${this.spine}. Octopus is a ${this.behave} animal. I'm not able to emit any ${this.sound}. However, I can camuflage!`);
    }
}

class Shark extends Vertebrate {
    constructor(...args) {
        super(...args);
        this.behave = 'dangerous'
        this.sound = 'sound'
    }
    behaviour() {
        console.log(`I'm a shark. Sharks have ${this.spine}. Sharks are considered ${this.behave}. Fun fact: my organs are not able to produce any ${this.sound}`);
    }
}

class Bird extends Vertebrate {
    constructor(...args) {
        super(...args);
        this.behave = 'instintive'
        this.sound = 'whistle'
    }

    bird() {
        console.log(`I'm a bird. Then, I have ${this.spine}`);
    }
}

class BlueJay extends Bird {
    constructor(...args) {
        super(...args);
        this.behave = 'aggressive'
        this.spSound = 'queedle, queedle, queedle'
    }
    behaviour() {
        console.log(`Also, I'm a blue jay. We're considered ${this.behave} birds. Besides, I ${this.sound}, but people knows me to sing: ${this.spSound}!`);
    }
}

const paul = new Octopus("Paul");
const peter = new Shark("Peter");
const lisa = new BlueJay("Lisa");

paul.greet();
paul.behaviour();

peter.greet();
peter.behaviour();

lisa.greet();
lisa.bird();
lisa.behaviour();
