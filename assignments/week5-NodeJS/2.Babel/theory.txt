Babel is transcompiler to convert your javascript es6 code to the equivalent javascript
 which is compatible with all the browser.  
Babel is a essentially an ECMAScript 6 to ECMAScript 5 transpiler.
  ESNext to ES”current” transpiler.
   In short - it allows you to use language features “from the future”. 
   It does so by transpiling your code to the currently supported version of JavaScript.

Take the new fat arrow function for example:

let myFunc = () => {
    console.log("ES6 is awesome!");
};

the function above would get compiled to:

var myFunc = function() {
    console.log("ES6 is awesome!");
};

You need Babel because browser vendors are slow to adopt new language features,
 thus browser support for ES6 (at the moment ) is quite poor


 INSTALLING BABEL
 ----------------
Babel is easily installed using npm, locally in a project:

npm install --save-dev @babel/core @babel/cli

AN EXAMPLE BABEL CONFIGURATION
-----------------------------
Babel out of the box does not do anything useful, you need to configure it and add plugins.

npm install --save-dev \
    @babel/plugin-transform-es2015-arrow-functions

to download the package in the node_modules folder of our app, then we need to add

{
  "plugins": ["transform-es2015-arrow-functions"]
}
to the .babelrc file present in the application root folder. 
If you don’t have that file already, you just create a blank file, and put that content into it.

Now if we have a script.js file with this content:

var a = () => {};
var a = (b) => b;

const double = [1,2,3].map((num) => num * 2);
console.log(double); // [2,4,6]

var anand = {
  _name: "Anand",
  _friends: ["Vivek", "Sandesh"],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(anand.printFriends());



running babel script.js will output the following code:
------------------------------------------------------
"use strict";

var a = function a() {};
var a = function a(b) {
  return b;
};

var double = [1, 2, 3].map(function (num) {
  return num * 2;
});
console.log(double); // [2,4,6]

var anand = {
  _name: "Anand",
  _friends: ["Vivek", "Sandesh"],
  printFriends: function printFriends() {
    var _this = this;
    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};
   
console.log(anand.printFriends());
