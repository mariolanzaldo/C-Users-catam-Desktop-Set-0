let transfer = superclass => class extends superclass {
    transfer(amount, account) {
        if (this.retrieve(amount) && account.deposit(amount)) {
            console.log(`Transfer: $${amount} has been removed to ${this.aNumber} and sent to ${account.aNumber}`);
        }
    }
}

class Bank {
    constructor(aNumber, balance) {
        this.aNumber = aNumber;
        this.balance = balance;
        this.account = false;
    }
}

class BankAccount extends transfer(Bank) {
    constructor(...args) {
        super(...args)
    }

    open() {
        if (!this.account) {
            this.account = true;
        } else {
            throw new ValueError("Error");
        }
    }

    close() {
        if (this.account) {
            this.account = false;
        } else {
            throw new ValueError("Error");
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            if (this.account) {
                console.log(`Deposit: ${this.aNumber}. The new balance is $${this.balance}`);
            }
            return true;
        } else {
            throw new ValueError("Error");
        }
    }

    retrieve(amount) {
        if (amount > 0 && this.balance - amount > 0 && this.account) {
            this.balance -= amount;
            console.log(`Deposit: ${this.aNumber}. The new balance is $${this.balance}`);
            return true;
        } else {
            throw new ValueError("Error");
        }
    }

    consult() {
        if (this.account) {
            console.log(`Greetings, client: ${this.aNumber}! Your financial balance is: $${this.balance}`);
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

var user1 = new BankAccount('A2F80', 1000);
var user2 = new BankAccount('B3N10', 250);
user1.open();
user1.consult();
user1.retrieve(10);
user1.deposit(200);
user1.transfer(100, user2);
user1.close();
user2.open();
user2.consult();
