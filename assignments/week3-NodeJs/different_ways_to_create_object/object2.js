/*
using Object.create(), this is called prototyping chaining

Object.create() is an good choice for creating an object without going through its constructor. 
writable: Whether the concrete value of the property may be changed. Only applies to data descriptors.
configurable: Whether the type of descriptor may be changed, or if the property can be removed.
enumerable: Whether the property is listed in a loop through the properties of the object.
value: The value of a property. This property only applies to Data descriptors because they reference concrete values, so the value describes the concrete data bound to the property.
*/
let obj={
    name:'I am a student'
}
let obj2=Object.create(obj,{
    Fullname:
    {
   configurable:true,
   writable:true,
   enumerable:true,
   value:'sripathi anand reddy' 
    },
    college:
    {
        configurable:false,
        writable:false,
        enumerable:true,
        value:'Vardhaman'
    }
});
console.log(obj2);//prints in json format
console.log(obj2.Fullname);
//we can also print the value of the prototype
console.log(obj2.name);
console.log(obj.name);//prints I am a student 


/*
Output is:
----------
PS C:\Users\ANAND\object> node object2.js
{ Fullname: 'sripathi anand reddy', college: 'Vardhaman' }
sripathi anand reddy
I am a student
I am a student
*/