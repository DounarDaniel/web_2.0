const account = {
    balance: 0,
    deposit(amount) {
      this.balance += amount;
    },
    withdraw(amount) {
      if (amount > this.balance) {
        console.log("Недостаточно средств");
      } else {
        this.balance -= amount;
      }
    },
    getBalance() {
      return this.balance;
    }
  };
  account.deposit(100);
  console.log(account.getBalance());
  account.withdraw(50);
  console.log(account.getBalance());