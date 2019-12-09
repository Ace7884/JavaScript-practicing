/*Read 3 numbers and check if the 3rd is the sum of the first two, if
so, print all numbers to the console like this: 6 + 4 = 10*/

//accepts input from user
alert('Please enter 3 digits:');

let digits=[]; 

for (i=0 ; i<3; i++){
    digits[i]=Number(prompt());
     if (!Number.isInteger(digits[i])) {  
    alert('Input not valid please re-enter number');
    i=i-1;
    }
}
//check if 3rd number sum of first 2 inputs

if ( digits[2]- digits[1] == digits[0] || 
    digits[2]- digits[0] == digits[1]) {
       console.log(`${digits[0]} + ${digits[1]} = ${digits[2]}`);    
    } else {
        console.log(`${digits[2]} isnt the sum of ${digits[0]} and ${digits[1]}!`)
    }
     

/* erez solution
let numA = parseInt(prompt('enter number: '));
let numB = parseInt(prompt('enter number: '));
let numC = parseInt(prompt('enter number: '));

if(numA+numB === numC){
  console.log(numA + '+' + numB + '= '+ numC);
}
else{
  console.log('exit');
}*/