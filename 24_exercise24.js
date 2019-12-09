/*Read 10 numbers and print:
o The maximum number
o The minimum number
o The average*/

alert('enter 10 numbers');

let maxNum = 0;
let minNum =null;
let avrgNum = 0;

let numset = 'tst' ;

for ( i =0 ; i<10 ; i++) {
    let userNum = parseInt(prompt(''));

    avrgNum = avrgNum + userNum;
    numset =`${numset} + ${userNum}`;
    if(minNum === null) {
        minNum = userNum
    }else if ( userNum > maxNum) {
        
        maxNum = userNum;
    }else {
        if (userNum<minNum) {
            minNum = userNum;
        }
    }
}
    avrgNum = avrgNum/10;

    alert(` ${numset}
    Max number is ${maxNum}
    Minimum number is ${minNum} 
    The numbers average is ${avrgNum}`);