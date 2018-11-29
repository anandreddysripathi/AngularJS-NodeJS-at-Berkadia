/*
JavaScript assigns ‘undefined’ to any object that has been declared but not initialized or defined. 
In other words, in a case where no value has been explicitly assigned to the variable, JavaScript calls it ‘undefined’.
*/

//we can also empty an object by setting it to undefined
//Undefined and null are equal in value but different in type:

var a=10,b;//here i did not give value to b, i just declared it
console.log(a+b);
/*output will be:
NaN
*/
var myself = {firstName:"Sripathi", lastName:"Reddy", age:20};
myself = undefined;   // Now both value and type is undefined
console.log(myself);
//output undefined


//If you try to add ‘undefined’ to a numeral, you will get NaN or Not-a-Number.
var v2= 5+ undefined;
console.log(v2)
//output : null

