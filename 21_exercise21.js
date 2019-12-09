/*Write a function getBigger that receives 2 
numbers and returns the bigger.*/

let num1 = parseInt(prompt('Enter first number'));
let num2 = parseInt(prompt('Enter second number'));

getBigger = ( num1 , num2) => {

    if( num1 - num2 < 0 ) {

        return alert(num2);
    }else { return alert(num1)

    }
}

getBigger(num1,num2);