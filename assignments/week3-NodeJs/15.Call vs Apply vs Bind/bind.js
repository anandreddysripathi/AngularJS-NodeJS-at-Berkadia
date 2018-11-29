/*
it binds an object to a function
reference to it using 'this'
Bind creates a new function that will have this set to the first parameter passed to bind().
*/
var person = {
    lastName: "Reddy"
  };
  
  function fullName(surname, firstName) {
    console.log(surname, firstName, this.lastName);
  }
  
  var bindFullName = fullName.bind(person, "sripathi");
  
  bindFullName("Anand");
