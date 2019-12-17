/*Write Function that get a comma ',' 
delimited string that consists of names.
 Ex: 'igal,moshe,haim' and returns who has the longest name, 
 and the shortest name. 
 Tip: 
 use the split function to covert a string to an array*/

 
 //ensure commas in string

 cond = false;
 
 while(cond==false){
    let names = prompt('Enter list of names with commas between them');
    //check for commas
    for(i=0;i<names.length;i++){
        if(names.charAt(i)===','){
           cond=true;
            break;
        }else if(i===names.length-1){
            alert('Error,please enter commas after each name'); 
            break;
        }else{
            continue; 
        }
    }
    alert(nameLongShort(names));
 }

function nameLongShort(names) {
    currentName='';
    longName='';
    shortName='';
    nameCount=0;
    for(i=0;i<names.length;i++){
      currentName+=names.charAt(i);
        if(names.charAt(i)===',' && shortName === '' ){
            nameCount++;
            shortName=currentName;
        }
    }
    return `Longest name is ${longName}, the shortest name is ${shortName}`;
}




 