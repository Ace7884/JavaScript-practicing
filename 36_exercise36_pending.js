/*Write the function myAbs() to return absolute values,
 the compare the performance of your function and 
 the original function (by running them 1000000 times 
each).*/

// let strNum=prompt('Enter number');

//function to convert num to absolute value
function myAbs(strNum){
//Include exceptions
    if(strNum===null || strNum===''||strNum===[]){
        return 0;

    }
        
    strNum = strNum.toString();
    let absNum='';

//check for negative prefix 
        if(strNum.charAt(0)==='-'){
            for(i=1 ; i<strNum.length ; i++){
                absNum+= strNum.charAt(i);
            }

//verify only numbers left once negetive prefix removed if so print if not print NaN        
            if(isNaN(absNum)===false){
                absNum=parseInt(absNum);
                return absNum;

            }else{
                return NaN;
            }

        }else {
            if(isNaN(strNum)===false){   
            strNum=parseInt(strNum);
            return strNum;

            }else{
                return NaN;
            
            }
        }
}



//check myAbs function for 1000000 cycles and record time passed

/*console.log(Date.now());
console.log(myAbs(-3453453));
console.log(Date.now());
*/

function myAbsTimeCheck(){
//record start time
    let startTime=  Date.now();

    for(g=0 ; g<10;g++){
    myAbs(-3453453);
    }
//record end time
    let endTime = Date.now();
    let timeElapsed = endTime - startTime;
    return  console.log(timeElapsed);
}



 