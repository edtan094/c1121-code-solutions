/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance <= 0 || isNaN(balance) || typeof balance === typeof '' || balance !== Math.floor(balance)) {
    return null;
  } if (balance >= 0 && balance === Math.floor(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var accountsIndex = 0; accountsIndex < this.accounts.length; accountsIndex++) {
    if (this.accounts[accountsIndex].number === number) {
      return this.accounts[accountsIndex];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  }
  var grandTotal = 0;
  for (var accountsIndex = 0; accountsIndex < this.accounts.length; accountsIndex++) {
    grandTotal += this.accounts[accountsIndex].getBalance();
  }
  return grandTotal;
};
