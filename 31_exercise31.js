/*Write a program that generates 30 random numbers. 
The numbers should be generated so each number 
is greater than the ones generated before.*/

    let previousNum=0;
    let count = 0;
    for( i=0 ; i<30 ; i++) {

        currentNum=(Math.floor(Math.random()*1000));
       if(currentNum>previousNum && currentNum-previousNum<33) {
             console.log( i + ' ' + currentNum);
            previousNum = currentNum;
        } else {
            i--;
        }
    }