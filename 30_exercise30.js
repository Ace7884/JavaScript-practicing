/*Let the user guess a random number your program set,
 help the user by outputting Too Low or Too High.*/

let compNum = Math.floor(Math.random()*20);
let correct = false;
while(correct === false ) {
    let userNum = parseInt(prompt('Guess the programs number'));
        if ( userNum < compNum ) {
            alert('Wrong answer! your number is too low! try again!');
    }else if (userNum > compNum) {
            alert('Wrong answer! your number is too high! try again!');
    }else {

        alert('Great you guessed the right number!')
        compNum = Math.floor(Math.random()*100);
        let reset = confirm('Wanna play again?') 
        if (reset == true) {

            correct=false;
        }else {
            alert('Thank you for playing!');
            correct=true;
        }    
    }
}