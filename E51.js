function Account(aNumber,balance){
    this.aNumber = aNumber;
    this.balance = balance;
}

Account.prototype.deposit = function(amount){
    if(amount > 0){
        this.balance += amount;
        console.log(`Deposit: ${this.aNumber}. The new balance is $${this.balance}`);
        return true;
}
else if(amount < 0){
    console.log(`The amount must be positive!`)
}
}

Account.prototype.retrieve = function(amount){
        if(amount > 0 && this.balance - amount > 0){
                this.balance -= amount;
                console.log(`Deposit: ${this.aNumber}. The new balance is $${this.balance}`);
                return true;
        }
        else if (amount < 0) {
            console.log(`The amount must be positive!`);
        }
        else if (this.balance - amount < 0){
            console.log(`No sufficient funds! Try with another amount of money`);

        }
}

Account.prototype.transfer = function (amount,account){
        if(this.retrieve(amount) && account.deposit(amount)){
            console.log(`Transfer: $${amount} has been removed to ${this.aNumber} and sent to ${account.aNumber}`);
            return true;
        }
}

Account.prototype.consult = function(){
        return console.log(`Greetings, client: ${this.aNumber}! Your financial balance is: $${this.balance}`);
}

var user1 = new Account('A2F80', 1000);
var user2 = new Account('B3N10', 250);

user1.deposit(800);
user1.retrieve(100);
user2.transfer(200,user1);
user1.consult();