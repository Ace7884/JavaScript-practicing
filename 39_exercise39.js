///VOWELS (aoieu)

//verify only strings entered

let cond=false;
let str='';

while(cond==false){
    str = prompt('Enter string');
    if(isNaN(str) === true){
        cond=true;
    }else {
        alert('Incorrect input enter only strings');
    }      
}

let vowels = 'aoieu';

//count vowels in string
function vowlCount(str){
    
    let vowelCount=0;
    str = str.toLowerCase();

    for(i=0;i<str.length;i++){
        for(g=0;g<vowels.length;g++){
            if(str.charAt(i)===vowels.charAt(g)){
                vowelCount++;
            } 
        }    
    }

    return vowelCount;
}
alert('Vowel count in string is ' + vowlCount(str));

/*Read a string and make the vowels lowercase,
 the others uppercase (GiZiM GiDoo)*/

 let strLowerUpper='';
 for ( i=0; i<str.length ;i++){
    //loop to check if vowels

    for(j=0 ;j<vowels.length;j++){
        if(vowels.charAt(j) === str.charAt(i)){
            strLowerUpper+= str.charAt(i);
            break;
        }else if(str.charAt(i)!==vowels.charAt(j) && j<vowels.length-1){
            continue;
        }else{
        //in not vowel uppercase

            strLowerUpper+=str.charAt(i).toUpperCase();
        }
    }
 }
alert(strLowerUpper);

 /* Write a function that reads a string and double
 all the vowel in it*/

 function stringDouble(str){

    let strDouble='';

    for ( i=0; i<str.length ;i++){
        //loop to check if vowels double
        
        for(j=0 ;j<vowels.length;j++){
            if(vowels.charAt(j) === str.charAt(i)){
                strDouble+= str.charAt(i)+str.charAt(i);
                break;
            }else if(str.charAt(i)!==vowels.charAt(j) && j<vowels.length-1){
                continue;
            }else{
                strDouble+=str.charAt(i);
            }
        }
    }
    return strDouble;
 }
 
alert(stringDouble(str));

/* write a function that gets a string and print 
how many times each vowel appears*/

function howManyVowel(str){
    let a=0;
    let o=0;
    let i=0;
    let e=0;
    let u=0;
//filter which vowel cases and count
    for(j=0;j<str.length;j++){
            switch (str.charAt(j)) {
                case 'a':
                    a++;
                    break;
                case 'o':
                    o++;
                    break;
                case 'i':
                    i++;
                    break;
                case 'e':
                    e++;
                    break;
                case 'u':
                    u++;
                    break;            
                default:
                    break;
            }

    }
    return `In ${str} the vowels breakdown as follows:
    a:${a} o:${o} i:${i} e:${e} u:${u} `;

}
alert(howManyVowel(str));