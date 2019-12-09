/*Write a program to compute the greatest common
 divisor (GCD) of two positive integers. */

 let num1=0;
 let num2=0;
 let bigNum=0;
 let smallNum=0;
 let cond = false;

 //recieves first integer from user

 while( cond == false) {
     num1 = parseInt(prompt('Enter first number,must be positive!'));
     if (num1< 0) {
        alert('Wrong input please enter positive number');
    }else {
        cond = true;
    }
}

//recieves second integer from user


while( cond == true) {
    num2 = parseInt(prompt('Enter second number,must be positive!'));
    if (num2< 0) {
       alert('Wrong input please enter positive number');
   }else {
       cond = false;
   }
}

if ( num1>num2) {
    bigNum=num1;
    smallNum=num2;
}else {
    bigNum=num2;
    smallNum=num1;
}

//finds out greatest divisor of num1 and num2

let div1=0;
let div2=0;
let greatestDiv=0;
while(cond == false) {

    for (i=smallNum ; i>0 ; i--)  {
        //find num1 one divisor
        if (smallNum%i === 0){
            div1 = i;
            
            //find num2 divisor
            for(j=bigNum ; j>0 ; j--){
                if(bigNum%j === 0){
                    div2 = j;
                    /*find is shared divisor is so 
                    it is the greatest common div */
                if( div1 === div2) {
                    greatestDiv=div1;
                    alert('Greatest Common Divisor is ' + greatestDiv);
                    i=0;
                    break;                }
                }   

            }
        }
    }
cond=true;
}