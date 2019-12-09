/*Write a function that prints a block of asterisks
 (*) by parameters: rows, cols ex: for 4,5.
  ****** 
  ****** 
  ****** 
  ******  
  */

 let asterisksRow = parseInt(prompt('Enter number of rows'));
 let asterisksCol = parseInt(prompt('Enter number of coloms'));
 let tableRow = '';


 function getAsterisks (asterisksRow ,asterisksCol ){
 
     
     for ( i=0; i<asterisksCol ;i++) {
        for( j=0 ; j<asterisksRow; j++) {
            tableRow = tableRow + '*';
        }
        
        console.log(tableRow);
        tableRow='';
  }
 }
 getAsterisks(asterisksCol ,asterisksRow);
  
  /*Now, print only the outline 
  ***** 
  *   *
  *   *  
  ***** */

 function getAsterisksOutline (asterisksRow , asterisksCol){
 
    for( j=0 ; j<asterisksCol ; j++) {

        //sort rows
        for ( i=0; i<asterisksRow ;i++) {
            if(j===0 || j===asterisksCol-1){
                    tableRow= tableRow + '*';
                
            }else{
                if(i===0 || i=== asterisksRow-1){
                    tableRow += '*';    
                }else
                    tableRow += '_';            }
        }
        console.log(tableRow);
        tableRow='';
    }    
}
getAsterisksOutline(asterisksRow,asterisksCol);