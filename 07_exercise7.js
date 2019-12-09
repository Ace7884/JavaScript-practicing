

/*BONUS: read a, b, c from the user, (for example: 2
  , -5, 2)
 your output should be something like: 
 2x2– 5x + 2 = 0 x1 = 2 ; x2 = 0.5
For being able to print
 the 2 exponent to the console (X Baribua…) 
 google for: unicode exponent two and copy
  the character to your IDE*/

alert('Please enter a b c arguments in the equation');

let digits=[];

for (i=0 ; i<3; i++){
  digits[i]=Number(prompt());
   if (!Number.isInteger(digits[i])) {  
  alert('Input not valid please re-enter number');
  i=i-1;
  }
}
 let a = digits[0];
 let b= digits[1];
 let c= digits[2];
  
 //displays equation

 const vari='X';   
 let templateCalc =`${a}${vari}²- ${b}${vari} + ${c} = 0`;
 
//calculates squareroot

 let calc=(b*b)-(4*a*c);
 let x1 = ( (-b)+ (Math.sqrt(calc)) )/ (2*a) ;
 let x2 =( (-b)-(Math.sqrt(calc)) )/ (2*a) ;

 //display equation and quadratic solution
 alert(templateCalc +"\n" +  `X1 = ${x1} ; X2 = ${x2} `);

 //erez solution
let a = parseInt(prompt('enter number: '));
let b = parseInt(prompt('enter number: '));
let c = parseInt(prompt('enter number: '));
let x1 = 0;
let x2 = 0;


 x1 = ((-1)*b + (Math.sqrt((b*b)-(4*(a*c)))))/(2*a);
 x2 = ((-1)*b - (Math.sqrt((b*b)-(4*(a*c)))))/(2*a);
alert('x1= '+x1);
alert('x2= '+x2);
















