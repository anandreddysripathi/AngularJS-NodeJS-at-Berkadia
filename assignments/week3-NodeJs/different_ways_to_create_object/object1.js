/*
JavaScript Object Literal

A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces.
Object literals encapsulate data, enclosing it in a package.
This minimizes the use of global variables which can cause problems when combining code.
Object literal property values can be of any data type, including array literals, functions, and nested object literals.
Several JavaScripts from dynamic-web use object literals for setup purposes.
Object literals enable us to write code that supports lots of features yet still provide a relatively straightforward process for implementers of our code.
No need to invoke constructors directly or maintain the correct order of arguments passed to functions.
Object literals are also useful for unobtrusive event handling; they can hold the data that would otherwise be passed in function calls from HTML event handler attributes.
*/

let a={
    firstname:'sripathi',
    middlename:'anand',
     fullname(){
        return this.firstname+" "+this.middlename+" "+this.lastname;
    }
}
//adding a new property to the existing object
a.lastname="reddy"
console.log(a.fullname()); // sripathi anand reddy
console.log("first name  is: "+a['firstname']) //first name is: sripathi
console.log("middle name is: "+a.middlename ) // middle name is : vivek
console.log("")

//another way of creating object 
let b=new Object(a)
b.firstname='sripathi'
b.middlename='vivek'
b.lastname='reddy'
console.log(b.fullname()) //sripathi vivek reddy

/*
Output is:
----------
PS C:\Users\ANAND\object> node object1.js
sripathi anand reddy
first name  is: sripathi
middle name is: anand

sripathi vivek reddy
*/
