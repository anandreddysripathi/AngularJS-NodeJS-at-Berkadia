//nummber object
let val = new Number(9);
console.log(val);
//boolean object
let val2 = new Boolean(true);
console.log(val2);
//String object
let val3 = new String('anand');
console.log(val3);
//The Arrays Object
let fruits = new Array("apple","orange","mango");
fruits.forEach(element => {console.log(element)});
//The Math Object
let sin = Math.sin(30);
console.log(sin)
//Date object 
let today=new Date()
console.log(today)

/*
Output is:
----------
PS C:\Users\ANAND\object> node object7.js
[Number: 9]
[Boolean: true]
[String: 'anand']
apple
orange
mango
-0.9880316240928618
2018-11-21T06:18:49.893Z
*/