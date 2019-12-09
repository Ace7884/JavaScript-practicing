/*Write a function: isOfAge that gets a name and
 an age, if the user is not yet 18, alert him that
  he is too young,
   this function also returns a boolean*/

   let name = prompt('Enter name');
   let age = parseInt(prompt('Enter age'));

   const isOfAge = (name,age)=>{

    if( age<18) {

        return alert(`${name} youre too young!  ` + false)
    
    }else {

        return alert(`${name} youre old enough!  ` + true)
    }

   }

   isOfAge(name,age);