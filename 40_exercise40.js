/*write a function that accepts 2 strings, and returns
the location of the second string in the first, 
if the string is not found return false*/

function strSearch(str1,str2){
    let strCheck='';
    let index=0;
    
    if(isNaN(str1)===false || isNaN(str2)===false){
        return alert('Wrong input please reenter only strings');

    }else{
        
        for(i=0 ; i<str1.length ; i++){            
           index=i;
            for(g=0;g<str2.length;g++){
                strCheck += str1.charAt(index);
                index++;
            }
            if (strCheck===str2){
                return alert(`${str2} is found at ${i}th location from start of ${str1}`);
            
            }else if(strCheck.length<str2.length){
                return false;

            }else{
                strCheck='';
                continue;
            }
        }    
    }
}


