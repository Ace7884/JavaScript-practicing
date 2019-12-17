/*Write the function encrypt that gets a string and
 encrypt it by replacing each character c with c+5
  (i.e. 'r' will be replaced by: 'w'),
now write a function to decrypt a message.*/

let newStr='';
let originStr='';


let cond=false;
while(cond == false){

    let str=prompt('enter message');
    

    
//call encryption function
    encryptString(str);
    alert(`encrypted Message is as follows: ${newStr}`);
    decodeString(newStr);
    alert(`original message is as follows: ${originStr}`);
}


// encryption function
function encryptString(str){
    
//setup encryption key

    

    //verify strings entered

    if(isNaN(str)===false){
        return alert('Wrong input please reenter only strings');
    }else{ 
        
    //encrypt message    
    
        for(i=0;i<str.length;i++){
           
            let encryptKey = parseInt(str.charCodeAt(i)+5);

            newStr+=String.fromCharCode(encryptKey);
        }
        cond=true;
    }

    
    return newStr ;
}


//decoder function
function decodeString(newStr){

    //decodes message and display user
    for(i=0;i<newStr.length;i++){

        let decryptKey = parseInt(newStr.charCodeAt(i)-5);
        originStr+=String.fromCharCode(decryptKey);
    }

    return originStr;

}
