/*Write the function myPow that gets 2 params:
 base, exp and returns the power. */

let base = parseInt(prompt('Enter number'));
let exp  = parseInt(prompt('Enter exponent'));

 const myPow = ( base , exp) => {
    let pow = 1

    for ( i=0 ; i<exp ; i++) {

    pow = pow*base;        

    }

    return alert(`The power of ${base} times ${exp} is ${pow}`);
 }

 myPow(base,exp);