/* Write the function factorial that gets a 
number n and return n! */

let num = parseInt(prompt('Enter n'));

function factorial (num) {
    let numbase=1;
    let factNum=1;
    for (i =0 ; i<num ; i++){
        factNum = factNum *numbase;
        numbase++;

    }

    return alert(` ${num}! = ${factNum}`);
}

factorial(num);