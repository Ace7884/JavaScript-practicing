/*Writes a function getAsterisks which gets a number, 
and returns a string containing asterisks according 
the number supplied. */

let asteriskNum = parseInt(prompt('Enter number'));

function getAsterisks (asteriskNum){

    let display = '';
    
    for ( i=0; i<asteriskNum ;i++) {
        display = display +'*'
 }
    return alert(display);
}
getAsterisks(asteriskNum);

/* Write a program that prints in the first 
line 1 asterisk, 
in the second 2 asterisk and so on until 10
After reaching a line with 10 asterisks,
and goes backwards until a line with 1 asterisk*/

function printAsterisks (){
    let display = '';
    for ( i=0; i<10 ;i++) {
        display +=  '*' 
        console.log(display);
    }
    
    for ( i=10 ; i>0 ; i--) {
        display = display.substring( 0 , i-1);
        console.log(display);
 }
}

printAsterisks();


/* There is a new requirement to support
 any character (not necessarily asterisk), 
 refactor your code, 
 the character will be read from the user 
 and be sent to the function. */

let stringNum = parseInt(prompt('Enter number'));
let ch = prompt('Enter Key');
function getString (stringNum,ch){
    let display ='';
    
    for ( i=0; i<stringNum ;i++) {
        display += ch;
 }
    return alert(display);
}
getString(stringNum,ch);

function printString (ch){
    let display = '';
    for ( i=0; i<10 ;i++) {
        display += ch; 
        console.log(display);
    }
    
    for ( i=10 ; i>0 ; i--) {
        display = display.substring( 0 , i-1);
        console.log(display);
 }
}

printString(ch);

/* Use Math.rand to generate a number between 1 and 10 
and use it to draw asterisks rows at random lengths
*/

function printRandomAsterisks (){
    let display ='';
    let ast = '*';
    for ( i=0; i<5 ;i++) {
        display = ast.repeat( Math.floor(Math.random()*10)); 
        console.log(display);
    }
}

printRandomAsterisks();

