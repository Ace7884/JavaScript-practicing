//Read a string and print it backwards using loop


let cond=false;

while(cond==false){

    let str = prompt('Enter string');
    
    if(isNaN(str) === true){

        let strDisp='';
        for(i=str.length ; i>=0 ; i--){

        strDisp+=str.charAt(i);
        }
    alert(strDisp);
        cond=true;
    
    }else {

        alert('Incorrect input enter only strings');
    }    

}

