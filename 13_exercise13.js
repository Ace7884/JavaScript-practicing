/*Guess Who
o Alert the user to think about some actor
o Using the confirm function, ask the user 2 yes-no questions:
 Male?
 Blond?
o Yes: Philip Seymour!
o No: Tom Cruise!
 English?
o Yes: Julianne Moore!
o No: Natalie Portman! */

alert('Think about an actor');
let gender = confirm('Is the actor actress male?');
if( gender === true) {
    let hairColor = confirm('Are they blond?');
    if (hairColor ===true ) {
        alert('The actor is Philip Seymour Hoffman!');
    }else {
        alert('The actor is Tom Cruise!');
    }

}else {
    let language = confirm('Is the actress english?');
    if(language === true) {
        alert('The actress is Julianne Moore!'); 
    }else(alert('The actress is Natalie Portman!'));
}

