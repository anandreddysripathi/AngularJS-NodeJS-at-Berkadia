//IIFE
/*
->An Immediately-invoked function expession is a way to execute functions immediately,as soon as they are created.
->They don't pollute the global object,and they are a simple way to isolate viriables declarations.
->Since the anonymous function within  IIFE is a function expression and is not being assigned to a global variable,
  no global property is being created, and all of the properties created inside of the function expression are scoped locally to the expression itself.

  The syntax for IIFE is

(()=>{
    //my code
})()

    OR

    ;(()=> {
  //my code
})()

*/

(()=>{
let name="sripathi";
    (()=>{
console.log('surname is '+name);
const middlename="anand";
  const getFullname=()=>{
    console.log('full name is '+name+middlename);  
  }
  getFullname()
    })();
})();


(()=>{
console.log("I'm anand");    
})()

/*   Output
PS C:\Users\ANAND> node 5.iife.js
surname is sripathi
full name is sripathianand
I'm anand
PS C:\Users\ANAND>
*/
