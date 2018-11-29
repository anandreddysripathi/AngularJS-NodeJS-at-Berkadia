//A variable is undeclared when it does not use the var keyword.
//It gets created on the global object (that is, the window), thus it operates in a different space as the declared variables.

var declared = 1;
function scoppedVariables() {
  undeclaredVariable = 1;
  var declared = 2;
}
scoppedVariables();
console.log(undeclaredVariable); 
console.log(declared); 

 
