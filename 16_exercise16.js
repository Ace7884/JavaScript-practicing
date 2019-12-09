/* read a string and print:
o Its length
o Its first and last chars
o in uppercase and lowercase */

let string = prompt('Enter input:');

console.log(string.length);
console.log('First character is ' + string.charAt(0) + '  ' + 'last character is ' + string.charAt(string.length-1));
console.log(string.toUpperCase() + '   ' + string.toLowerCase());

