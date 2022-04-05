let bankAccount = (function (initialBalance) {
    let balance = initialBalance;
    return {
      getBalance: function() {
        return balance;
      },
      deposit: function(amount) {
        if (amount > 0){
        balance += amount;
        return balance;
        }
        else {
          throw new Error(`The amount must be positive!`);
        }
      },

      retrieve: function(amount){
        if(amount > 0 && balance > amount){
            balance -= amount;
            console.log(`Retrieve: ${amount}. The new balance is $${balance}`);
            return balance;
    }
    else if (amount < 0) {
      throw new Error(`The amount must be positive!`);
    }
    else if (balance < amount){
      throw new Error(`No sufficient funds! Try with another amount of money`);

    }
    },
    transfer: function(tran, account){
        if(tran > 0 && balance > tran){
            balance -= tran;
            account.deposit(tran);
            console.log(`Transfer succeed: ${tran}. The new balance is $${balance}`);
            return balance;
    }
    else if (tran < 0) {
        throw new Error('Introduce a positive amount!');
    }
    else if (balance < tran){
        throw new Error (`No sufficient funds! Try with another amount of money`);

    }
    }
    };
  });

const account = bankAccount(100);
const account1= bankAccount(200);

console.log(account.getBalance());
console.log(account.deposit(10));
console.log(account.retrieve(90));
console.log(account1.getBalance());
console.log(account1.retrieve(50));
console.log(account.transfer(10,account1));
console.log(account1.getBalance());
