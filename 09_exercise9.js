//Read 3 numbers and print the smallest 

//accept user input

alert('Please enter 3 numbers:');

let num=[]; 

for (i=0 ; i<3; i++){
    num[i]=Number(prompt());
     if (!Number.isInteger(num[i])) {  
    alert('Input not valid please re-enter number');
    i=i-1;
    }
}

//calculate smallest number

if ( num[0] < num [1] && num [0] < num[2]) {

    console.log(num[0]);

} else if ( num[1] < num [0] && num [1] < num[2]) {

    console.log(num[1]); 
} else ( console.log(num[2]));

/* erez solution
let numA = parseInt(prompt('enter number: '));
let numB = parseInt(prompt('enter number: '));
let numC = parseInt(prompt('enter number: '));
let smallest = numA;
if(smallest>numB){
  smallest=numB;
}
if(smallest>numC){
  smallest=numC;
}
console.log('smallest number is : ' + smallest);
*/