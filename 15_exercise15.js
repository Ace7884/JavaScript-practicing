//Read 2 names and print the longer one

let first = prompt('Enter first name');
let second = prompt('Enter second name');

if (first.length > second.length) {
    alert(first);
}else if (first.length < second.length) {
    alert(second);
}else {
    alert(`Both names have same length`);
}
