/*
Inheritance in JavaScript is Prototypal and not as object oriented languages.
OOP style of inheritance is referred to as Classical Inheritance. In Classical the execution is bottom up, lower most child to the top most parent.
In prototypal inheritance there is a prototypal chain where every one attaches their method and variables.
It’s main advantage is we can inherit from multiple parent. Based on who attaches when to chain the value of variable or functions change.
In JavaScript, inheritance is supported by using prototype object. 
Some people call it "Prototypal Inheriatance" and some people call it "Behaviour Delegation".

JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized objects that have the ability to be cloned and extended.
 This is known as prototypical inheritance and differs from class inheritance.
  Among popular object-oriented programming languages, JavaScript is relatively unique, as other prominent languages such as PHP, Python, and Java are class-based languages, which instead define classes as blueprints for objects.
*/

// Using Extends Keyword and constructor
class Person {
     constructor(name) {
      this.type = "vegetarian";
      console.log("I'm "+this.type);
      this.name = name;
    }
  }
  class Student extends Person {
    constructor(name) {
        super(name);
       this.type = "Non-vegetarian";
       console.log("Now I'm "+this.type);
    }
  }
  var myself = new Student('anand');
  console.log("I'm "+myself.name); //prints anand

  //Output:
/*
PS C:\Users\ANAND\2.Inheritance> node inheritance1.js
I'm vegetarian
Now I'm Non-vegetarian
I'm anand
PS C:\Users\ANAND\2.Inheritance>
*/