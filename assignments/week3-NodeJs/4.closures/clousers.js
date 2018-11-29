
/* Closures
Javascript has lexical scoping which means the variable that are defined outside our scope basically 
upper scope are automatically available inside.we dont need pass it again.

*/

let name='anand';
const person=()=>{
  console.log(name);
}
person();

//however the abpve code will be executed and output will be anand.
 
//if i want to use like this in the following code I will get error.

let person;
if(true){
  let name="anand"
  person=()=>{console.log(name)}
}
console.log(name)
person();

/*
Here i will get name is not defined as an error on line 21, as we are trying to access the name which scope
is not available here.
we can get the required output if we use declare name AS VAR.
*/

//An another example
function SetName(FirstName, MiddleName,LastName) 
{
    var display = "Your name is : ";
    // This inner function has access to the outer function's variables & parameters
    function FullName(){
        return display+FirstName+MiddleName+LastName;
    }
    return FullName();
}
console.log(SetName('sripathi', 'anand','reddy'));

/*Output will be 
PS C:\Users\ANAND> node 4.closures.js
Your name is : sripathianandreddy
PS C:\Users\ANAND>
*/
