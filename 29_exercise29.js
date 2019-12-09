/*29. Write a function that prints 
the multiplication table*/

let baseNum = 1;
let tableRow ='';
for ( i=1 ; i<11 ; i++) {
    
    for( j=1 ; j<11 ; j++) {

        let res=i*j;
        tableRow += ' ' + res.toString();
        
    }
    console.log(tableRow);
    tableRow='';
}