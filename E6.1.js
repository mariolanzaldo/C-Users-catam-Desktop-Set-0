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
