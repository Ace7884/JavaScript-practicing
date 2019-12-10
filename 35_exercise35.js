//Read a number and...

let sum = 0;
let product = 1;
let swapNum = '';
let sumFirstLast =0 ;
let armstNum = 0;
let cond = false;


//Armstrong number checker function 

function armstrongChk(userNum){

    let armstNum=0;

        if(isNaN(userNum)===false) {

           userNum = userNum.toString();
        }
        
        for (i=0 ; i<userNum.length ; i++) {

                armstNum += Math.pow(parseInt(userNum.charAt(i)),userNum.length);
            
        }
        

    if (armstNum === parseInt(userNum)) {

        return true;
    }else {

       return false;
    }
} 

//Perfect number checker function 
function perfectChk(userNum) {
        
    let divSum=0;
    
    for (i=0 ; i<userNum ; i++)  {

    //Sum up number's dividers
        if ( parseInt(userNum)%i === 0){
        divSum += i;
        }
    }
    //Check if perfect number 
        if( divSum === parseInt(userNum))
        { 
            return true;
        }else{  
            return false;
        }  
}


//program start

while( cond == false) {

    let userNum = prompt('Enter Number');

    for( i=0 ; i<userNum.length ; i++ ) {

// calculate sum of  digits
        sum +=  parseInt(userNum.charAt(i));

//    Calculate multipication of its digits. 
        product *=  parseInt(userNum.charAt(i));

// Print swapped first and last digits (2731 => 1732)
// Sum its first and last digit.

        if( i===0) {
        swapNum = userNum.charAt(userNum.length-1);  
        sumFirstLast += parseInt(userNum.charAt(0));
        }else if ( i ===userNum.length-1) {
        swapNum +=userNum.charAt(0);   
        sumFirstLast += parseInt(userNum.charAt(userNum.length-1));
        }else{
            swapNum += userNum.charAt(i);
        }
    }


// Print its reverse (BONUS: as number not as string 2731 => 1372)
    let reverseNum = '';

    for( j=userNum.length ; j>=0 ; j--){
            reverseNum+=userNum.charAt(j);
              
    }
    parseInt(reverseNum);

/*Print if it's a perfect number. 
Perfect number is number thats a sum of all his dividers. 
i.e. 6 is a perfect number (1 + 2 + 3).*/
 
//check if perfect number using perfect number checker function
    let perfChk = perfectChk(userNum);

        if(perfChk){
         
            perfNum=' is a perfect number';
        }else{
        
            perfNum=' isnt a perfect number';
        }     

/*Check if user number is a Armstrong number:
 3³ + 7³+ 1³ = 371  and print to user*/
    
    
    let armstNumChk = armstrongChk(userNum);

         if (armstNumChk) {
            armstNum = ' is a Armstrong number';

        }else {

            armstNum = ' isnt a Armstrong number';
        }

//verify only numbers accepted and display for user

    if (isNaN(userNum) === false ) {
        alert(`The sum of ${userNum} digits is ${sum}
        The product of ${userNum} digits is ${product}
        The swapped version of ${userNum} is ${swapNum}
        The reversed version of ${userNum} is ${reverseNum}
        The product of the first and last digits of ${userNum} are ${sumFirstLast}
        ${userNum} ${armstNum}
        ${userNum} ${perfNum}`);
        cond=true;
        
    }else {
        alert('Error please enter numbers only');
    }

}

/*    Now read a number: max 
and prints all Amstorng 
and Perfect positive numbers until max*/

    let max = prompt('Enter maximal number');
    
    let disp ='';

        for ( g=0 ; g<=max; g++){

            if( perfectChk(g)===true) {

                disp += `${g} is a perfect number` + "\n";
            }else if( armstrongChk(g) ===true) {
                disp += `${g} is a armstrong number`+ "\n";
            }else{
                continue;
            }
               
            }
        

        alert(`${disp}`);
