/*Ask the user how many friends he has on FB and print out an
analysis:
o More than 500 – OMG, celebrity!
o More than 300 (and up to 500) – Well connected!
o 100 and more – Knows some people
o Up to 100 – Quite picky aren't you?
o 0 – Lets be friends? */

//Input number from user

let friendsCnt = prompt('Enter many friends do you have on facebook');

parseInt(friendsCnt);

//evaluate friend number

if  (friendsCnt>500)  { 
        alert('OMG, celebrity!');
    }else if (friendsCnt <=500 && friendsCnt > 300 ) {
        alert('well connected!');
    }else if (friendsCnt <=300 && friendsCnt > 100) {
        alert('know some people');
    }else if (friendsCnt <=100 && friendsCnt >0 ) {
        alert('Quite picky arent you?');
    }else {
        alert('Lets be friends?');
    }


