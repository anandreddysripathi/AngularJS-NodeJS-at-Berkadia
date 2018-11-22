//using Object Constructor
let fullname = new Object();
fullname.first = 'Sripathi';
fullname.middle = 'Anand';

//we can also add a method to an object like this
fullname.welcome = ()=>console.log('hello welcome '+fullname.middle);
fullname.welcome();   // Output: hello welcome Anand

//creating new object by replicating another object
let b=new Object(fullname);
b.first='Narkulla'
b.middle='Vivek'
console.log(b.welcome());

/*
Output is :
-----------
PS C:\Users\ANAND\object> node object6.js
hello welcome Anand
hello welcome Vivek
*/