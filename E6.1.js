class Shape {
    constructor(height, width, edges) {
        this.height = height;
        this.width = width;
        this.edges = edges;
    }

    display() {
        if (this.edges === 3) {
            return `Triangle is shape since it has ${this.edges} edges`;
        }
        else if (this.edges === 4) {
            return `Quadrilateral is shape(${this.edges} edges)`;
        }
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

class Quadrilateral extends Shape {
    constructor(height, width, edges) {
        super(height, width, 4);
    }
}

class Rectangle extends Quadrilateral {
    constructor(height, width) {
        super(height, width);
        this.name = 'Rectangle';
    }

    area() {

        let area = this.height * this.width;
        return `The ${this.name} area is: ${area}`;
    }

    perimeter() {
        const perimeter = 2 * (this.height + this.width);
        return `The ${this.name} perimeter is: ${perimeter}`;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
        this.name = 'Square';
    }
}

let triangle = new Triangle(2, 4, 3, 2, 3);
let rectangle = new Rectangle(3, 5, 4);
let square = new Square(3);

console.log(triangle.display());
console.log(triangle.perimeter());
console.log(triangle.area());
console.log(triangle.triangleType());

console.log(rectangle.display());
console.log(rectangle.area());
console.log(rectangle.perimeter());

console.log(square.display());
console.log(square.area());
console.log(square.perimeter());

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
