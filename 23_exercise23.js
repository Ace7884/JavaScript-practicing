/*Read 10 numbers from the users and output 
"the number is even" if this is the case, 
else "the number is not even" */



if ( checkNum % 2 === 0) {

    alert(`${checkNum} is even`);
}else {
    alert(`${checkNum} is not even`);
}alert('enter 10 numbers');

let checkNum = 0

for ( i =0 ; i<10 ; i++) {

    let userNum = parseInt(prompt(''));

    checkNum = checkNum+userNum;
}