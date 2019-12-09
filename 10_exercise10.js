/*Read 2 numbers and calculate the difference (absolute value)
o if the diff is smaller from both values say that those
numbers are relatively-close
o Validate that you got numbers
(hint: search for something like: javascript check if number)*/

//accept user input

alert('Please enter 2 numbers:');

let num=[]; 

for (i=0 ; i<2; i++){
    num[i]=Number(prompt());

// validate that only numbers provided

     if (!Number.isInteger(num[i])) {  
    alert('Input not valid please re-enter number');
    i=i-1;
    }
}

//calculate difference
let diff = Math.floor(num[1]-num[0]);

//assess difference
if (  diff<num[0] && 0< diff < num[1] && diff>0)
    { alert('numbers are relatively close to eachother');
    }else { alert(`numbers are relatively far from eachother`);} 

    /* erez solution 
    let numA = parseInt(prompt('enter number: '));
let numB = parseInt(prompt('enter number: '));
let difference = numA-numB;
if(isNaN(numA) == false && isNaN(numB) == false){
if(difference<0){
  difference=difference*-1;
}
if(numA > difference && numB > difference){
  console.log('those numbers are relatively-closed');
}
else{
  console.log('those numbers are NOT! relatively-closed')
}
}
else{
  alert('you didnt enter numbers, please try again');
}
*/