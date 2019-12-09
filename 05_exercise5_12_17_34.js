/*Rolling Project - BankSystem (you will add more features to this project as we go along)
o Initialize a variable: currentBalance with the value: 1000
o prompt for the user secret and how much he would like to withdraw, and then print a nice message with the new balance.*/
/*Rolling Project: BankSystem
o Check that the secret is 'secret!', if not, tell the user its
wrong and don’t let him withdraw
o Add feature: don’t let the user withdraw more than he has
in the account


*/


//initiate balance
/*
let currentBalance=1000;
let password = 'secret';

//ask user for password

let userpassword  = prompt ('Welcome please enter password:');

// Make the secret case insensitive
let checkPassword = password.toLowerCase();
let authenticateUser = userpassword.toLowerCase();

if (checkPassword === authenticateUser) {
    let withdrawl = prompt('Please enter withdraw amount:');
    parseInt(withdrawl);
    // calculate balance left
    if (withdrawl > currentBalance) {
        alert('Not enough money in balance to withdraw');
    }else {
    let newBalance = currentBalance-withdrawl;
    alert(`Your current balance is ${newBalance} Nis.Thank you come again!`);
    }
}else{
    alert('password incorrect try again');
}
*/
/*Rolling Project – BankSystem:
o Improve the secret code coming from user,
 instead of hardcoded secret - symmetric codes
  (such as: 95459) are accepted.
*/


let cond=false;
while(cond ==false) {
// accepts password and save both parts of it for verification    
    let simPassword = prompt('enter new password,must be symmetrical');
    let simCheck1 = '';
    let simCheck2='';
    for (i=Math.floor(simPassword.length/2) ; i<simPassword.length ; i++ ){
        simCheck1 += simPassword.charAt(i);
    }
    for (i=Math.floor(simPassword.length/2) ; i>=0 ; i-- ){
        simCheck2 += simPassword.charAt(i);
    }
// checks if both parts equal if so password is symmetrical 
    if (simCheck1 === simCheck2) {
        alert('password accepted!')
        cond=true;

    }else {
        alert('incorrect input please re-enter password!');
    }
    
}



