/*
using object Accessors

using getters and settors
->It gives simpler syntax
->It allows equal syntax for properties and methods
->It can secure better data quality
->It is useful for doing things behind-the-scenes
*/

let person = {firstName:"Sripathi", lastName:"Anand"};
// Define a getter
Object.defineProperty(person, "fullName", {
    get:function(){return this.firstName + " " + this.lastName;}
});
console.log(person.fullName);

//an another example
let obj = {
    age : 0,
    get reset() {this.age = 0} ,
    get increment(){this.age++},
    get decrement(){this.age--},
    set add(value){this.age += value},
    set subtract(value){this.age -= value}
};
// Play with the age:
obj.reset;
console.log(obj.age);
obj.add =20;
console.log(obj.age);
obj.subtract = 1;
console.log(obj.age);
obj.increment;
console.log(obj.age);
obj.decrement;
console.log(obj.age);

/*
Output is:
----------
PS C:\Users\ANAND\object> node object3.js
Sripathi Anand
0
20
19
20
19
*/