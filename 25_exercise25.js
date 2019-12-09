/*Read numbers until 999, for each number:
o Print if it’s divided by 3
o Print whether this num is much bigger 
(more than 10) than the previous number.*/

let previousNum = null ;
let currentNum = null;

for ( i=0 ; i<999 ; i++) {

    currentNum= Math.floor(Math.random()*999);

    if( previousNum === null){
        previousNum = currentNum;
    }
    if (currentNum % 3 ===0);{
        if( currentNum-previousNum >10){
            console.log(`${currentNum} is Dividable by 3 and much bigger then ${previousNum}`);
    }else { console.log(`${currentNum} is dividable by 3`);
    }
    }
    previousNum = currentNum;
}