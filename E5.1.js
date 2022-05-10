let transfer = superclass => class extends superclass {
  transfer(amount, account) {
    account = bank.getClientlist().find(element => {
      if (element.name === account) {
        return element;
      }
    });
    if (this.retrieve(amount) && account.deposit(amount)) {
      console.log(`Transfer: $${amount} has been removed to ${this.name} and sent to ${account.name}`);
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
    this.#clientList.push(new Client(name, money));
    return this.#clientList;
  }

  open(account) {

    const found = this.#clientList.find(element => {
      if (element.name === account) {
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
  getClientlist() {
    return this.#clientList;
  }

  close(account) {
    this.#clientList.find(element => {
      if (element.name === account) {
        element.account = false;
        return element;
      } else {
        throw new Error("Error");
      }
    });
  }
}

class Client extends transfer(Bank) {
  constructor(name, money) {
    super(name, money)
    this.name = name;
    this.money = money;
    this.account = false;
  }

  retrieve(amount) {
    if (amount > 0 && this.money - amount > 0 && this.account) {
      this.money -= amount;
      console.log(`Deposit: ${this.name}. The new balance is $${this.money}`);
      return true;
    } else {
      throw new ValueError("Error");
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this.money += amount;
      return true;
    }
    else {
      throw new ValueError("Error");
    }

  }

  consult() {
    if (this.account) {
      console.log(`Greetings, client: ${this.name}! Your financial balance is: $${this.money}`);
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
bank.addClient('Martha', 900);
bank.addClient('Steve', 1000);
let martha = bank.open('Martha');
martha.retrieve(350);
martha.deposit(40);
martha.consult();
martha.transfer(300, 'Steve');
bank.close('Martha');
let steve = bank.open('Steve');
steve.consult();
