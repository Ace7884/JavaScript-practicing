/*Write a function isEven that gets a number,
 and returns true if the number is even
 otherwise false.*/

let num = parseInt(prompt('Enter number'));
res = num % 2;

console.log(res);

 const isEven = (num) =>{

    if( num % 2 === 0 ) {

        return alert(true); 

    } else { return alert (false)};

 }

 isEven(num);