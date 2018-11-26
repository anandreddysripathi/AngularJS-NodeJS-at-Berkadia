//USING PROTORYPE INHERITANCE
/*When you attempt to access a property or method of an object, JavaScript will first search on the object itself, 
and if it is not found, it will search the object's [[Prototype]].
 If after consulting both the object and its [[Prototype]] still no match is found,
  JavaScript will check the prototype of the linked object,
   and continue searching until the end of the prototype chain is reached.

At the end of the prototype chain is Object.prototype.
 All objects inherit the properties and methods of Object.
  Any attempt to search beyond the end of the chain results in null.
  */

let ClassA=function(){
 this.name='anand';
 this.age=20;
}
let a=new ClassA();
ClassA.prototype.printname=function(){
console.log(this.name+" age is: "+this.age);
}
a.printname();

//Now I create “inheritance” between classes. This will clone the prototype.

let inheritsFrom =  (parent,child)=> {
    child.prototype = Object.create(parent.prototype);
};
let ClassB = function(){
    this.name = "vivek";
    this.age=20;
}

inheritsFrom(ClassA,ClassB);
var b = new ClassB();
b.printname();

//Output
/*
PS C:\Users\ANAND\2.Inheritance> node inheritance2.js
anand age is: 20
vivek age is: 20
PS C:\Users\ANAND\2.Inheritance>
*/