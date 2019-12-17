/*Write A function that generates a random number between 0
 and max (Parameter) Clue: Use Math.Random & Math.Floor*/

 let maxNum = parseInt(prompt('Enter max Number'));   

 function randomNumber(maxNum){

    return  Math.floor(Math.random()*maxNum);

 }

 alert(randomNumber(maxNum));

 for (i=0 ; i<maxNum+5 ; i++){

    console.log(randomNumber(maxNum));

 }