$(document).ready(function(){
  $('#depositChecking').on('click', depositChecking);
  $('#withdrawChecking').on('click', withdrawChecking);
  $('#depositSavings').on('click', depositSavings);
  $('#withdrawSavings').on('click', withdrawSavings);
})

function depositChecking(){
  var checking = $('#amountChecking').val();
  var balance = $('#checkingBalance').text();
  balance = parseInt(balance.replace("$", ""));
  if (checking !== ""){
    balance = "$" + (parseInt(checking) + balance);
    $('#amountChecking').val("");
    $('#checkingBalance').text(balance);
  }
}

    //Checking account withdrawl funtion

      //On click of the withdrawChecking button
function withdrawChecking(){
  var checking = $('#amountChecking').val();
  var balance = $('#checkingBalance').text();
  balance = parseInt(balance.replace("$", ""));
  if (balance >= checking){
    balance = "$" + (balance - parseInt(checking));
    $('#amountChecking').val("");
    $('#checkingBalance').text(balance);
  }
}
        //Get value from the amountChecking input field

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function

      //On click of the depositSavings button
function depositSavings(){
  console.log('depositSavings()');
}
        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div

    //Savings account withdraw funtion

      //On click of the withdrawl button
function withdrawSavings(){
  console.log('withdrawSavings()');
}
        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
