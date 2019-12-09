// Read first name and last name, also create a variable fullName, and then welcome the user by his full name.

const nameCall = (name,sureName) =>{

let fullName=`${name} ${sureName}`;

let msg= `welcome! ${fullName}!`;
return msg;
}

//erez solution


/*Read first name and last name, also create a variable fullName,
and then welcome the user by his full name. */
/*
let firstName = prompt('what is your First name ? ');
let lastName  = prompt('what is your Last name ? ');
let fullName  = firstName + ' ' + lastName;
alert('hello' + ' ' + fullName );
*/
//optimal solution i think

let firstName = prompt('what is your First name ? ');
let lastName  = prompt('what is your Last name ? ');
let fullName  = `${firstName} ${lastName}`;
alert(`Welcome ${fullName}!`);
