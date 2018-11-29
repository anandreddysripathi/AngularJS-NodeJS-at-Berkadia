/*
The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values.
In JavaScript null is "nothing". It is supposed to be something that doesn't exist.
‘Null’ is a keyword in JavaScript that signifies ‘no value’ or nonexistence of any value.
*/


//We can empty an object by setting it to null:

var person = {firstName:"Sripathi", lastName:"Reddy", age:20};
console.log(person);
person = null;  // Now value is null, but type is still an object
console.log(person);

var v1= 5+ null;
console.log(v1)