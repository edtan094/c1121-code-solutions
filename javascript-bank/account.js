/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount <= 0 || isNaN(amount) || typeof amount === typeof '' || amount !== Math.floor(amount)) {
    return false;
  } else if (amount > 0) {
    var deposit = new Transaction('deposit', amount);
    deposit.amount = amount;
    this.transactions.push(deposit);
    return true;
  }

};

Account.prototype.withdraw = function (amount) {
  if (amount <= 0 || isNaN(amount) || typeof amount === typeof '' || amount !== Math.floor(amount)) {
    return false;
  } else if (amount > 0) {
    var withdraw = new Transaction('withdrawal', amount);
    withdraw.amount = amount;
    this.transactions.push(withdraw);
    return true;
  }
};

Account.prototype.getBalance = function () {
  if (this.transactions.length === 0) {
    return 0;
  }
  var totalBalance = 0;
  for (var transactionsIndex = 0; transactionsIndex < this.transactions.length; transactionsIndex++) {
    if (this.transactions[transactionsIndex].type === 'deposit') {
      totalBalance += this.transactions[transactionsIndex].amount;
    } else if (this.transactions[transactionsIndex].type === 'withdrawal') {
      totalBalance -= this.transactions[transactionsIndex].amount;
    }

  }
  return totalBalance;
};
