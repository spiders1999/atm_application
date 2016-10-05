$(document).ready(function(){
  $('#depositChecking').on('click', depositChecking);
  $('#withdrawChecking').on('click', withdrawChecking);
  $('#depositSavings').on('click', depositSavings);
  $('#withdrawSavings').on('click', withdrawSavings);
})

function withdraw(source, accountvalue, overflowvalue){
  var account = $(source).val();
  var balance = $(accountvalue).text();
  var overflowbalance = $(overflowvalue).text();
  balance = parseInt(balance.replace("$", ""));
  overflowbalance = parseInt(overflowbalance.replace("$", ""));
  if (balance >= account){
    balance = balance - parseInt(account);
    if (balance === 0){
      $(accountvalue).prop('class', 'balance zero');
    }
    balance = "$" + (balance);
    $(source).val("");
    $(accountvalue).text(balance);
  } else if ((balance + overflowbalance) >= account){
    overflowbalancebalance = (overflowbalance + balance) - parseInt(account);
    $(accountvalue).prop('class', 'balance zero');
    balance = '$0';
    overflowbalancebalance = "$" + (overflowbalancebalance);
    $(accountvalue).text(balance);
    $(overflowvalue).text(overflowbalancebalance);
    $(source).val("");
  }
}

function deposit(source, accountvalue){
  var account = $(source).val();
  var balance = $(accountvalue).text();
  balance = parseInt(balance.replace("$", ""));
  if (account !== ""){
    balance = (parseInt(account) + balance);
    if (balance > 0){
      $(accountvalue).prop('class', 'balance');
    }
    balance = "$" + (balance);
    $(source).val("");
    $(accountvalue).text(balance);
  }

}

function depositChecking(){
  deposit('#amountChecking', '#checkingBalance');
}

function withdrawChecking(){
  withdraw('#amountChecking', '#checkingBalance', '#savingsBalance');
}

function depositSavings(){
  deposit('#amountSavings', '#savingsBalance');
}

function withdrawSavings(){
  withdraw('#amountSavings', '#savingsBalance', '#checkingBalance');
}
        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
