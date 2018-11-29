/*The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.
*/
let add=function(c){
    console.log("addition is:");
    console.log(+ this.a + this.b +c);
}
let obj={
    a:1,b:2
};
add.call(obj,3);

var person = {
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}
var person1 = {
    firstName:"sripathi",
    lastName: "anand",
}
var person2 = {
    firstName:"sripathi",
    lastName: "vivek",
}
person.fullName.call(person2); 

/*
output will be
sripathi vivek
*/

//The call() method can accept other arguments:
var person = {
    fullName: function(college, city) {
        console.log(this.firstName + " " + this.lastName + " from " + college +" "+ city);
    }
}
var person1 = {
    firstName:"sripathi",
    lastName: "anand",
}
var person2 = {
    firstName:"sripathi",
    lastName: "vivek",
}
person.fullName.call(person1,"vardhaman","hyderabad")
person.fullName.call(person2, "Nit", "raipur");

/*
Output will be:
sripathi anand from vardhaman hyderabad
sripathi vivek from Nit raipur
*/