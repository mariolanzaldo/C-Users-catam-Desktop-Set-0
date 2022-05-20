let transfer = superclass => class extends superclass {
    transfer(amount, account) {
        account = bank.getClientlist().find(element => {
            if (element.info.name === account) {
                return element;
            }
        });
        if (this.retrieve(amount) && account.deposit(amount)) {
            console.log(`Transfer: $${amount} has been removed to ${this.info.name} and sent to ${account.info.name}`);
        }
    }
}

class Bank {
    #clientList;
    constructor() {
        this.#clientList = [];
        this.add;
    }

    addClient(name, money) {
        this.#clientList.push(new Account(name, money));
        return this.#clientList;
    }

    getClientlist() {
        return this.#clientList;
    }

    open(account) {
        const found = this.#clientList.find(element => {
            if (element.info.name === account) {
                element.account = true;
                return element;
            }
        });
        if (found !== undefined) {
            return found;
        } else {
            throw new Error("Error");
        }
    }

    close(account) {
        this.#clientList.find(element => {
            if (element.info.name === account) {
                element.account = false;
                return element;
            } else {
                throw new Error("Error");
            }
        });
    }
}

class Client {
    constructor(name, money) {
        this.name = name;
        this.money = money;
    }
}

class Account extends transfer(Bank) {
    constructor(name, money) {
        super(name, money);
        this.info = new Client(name, money);
        this.account = false;
    }
    consult() {
        if (this.account) {
            console.log(`Greetings, ${this.info.name}! Your financial balance is: $${this.info.money}`);
        } else {
            throw new ValueError("Error");
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this.info.money += amount;
            return true;
        }
        else {
            throw new ValueError("Error");
        }
    }

    retrieve(amount) {
        if (amount > 0 && this.info.money - amount > 0 && this.account) {
            this.info.money -= amount;
            console.log(`Deposit: ${this.info.name}. The new balance is $${this.info.money}`);
            return true;
        } else {
            throw new ValueError("Error");
        }
    }
}

export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}

let bank = new Bank();
bank.addClient("Martha", 600);
bank.addClient("Steve", 600);

let martha = bank.open('Martha');
martha.retrieve(350);
martha.deposit(340);
martha.consult();
martha.transfer(300, 'Steve');
bank.close('Martha');
let steve = bank.open('Steve');
steve.retrieve(340);
steve.consult();
