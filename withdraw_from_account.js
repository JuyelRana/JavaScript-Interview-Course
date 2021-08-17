const account1 = {
  name : 'Jen',
  totalAmount: 5000,
  deductAmount: function(amount){
    this.totalAmount -= amount;
    return this.name + ' has amount in account: '+this.totalAmount;
  }
};

const account2 = {
  name: 'James',
  totalAmount: 8000
}

const withDrawFromAccount = function(amount){
  return account1.deductAmount.bind(account2, amount);
}

console.log(withDrawFromAccount(500)());  // 7500 
console.log(withDrawFromAccount(200)())   // 7300

console.log(account1.deductAmount(300));