/*
When writing JavaScript code,we might want to delay the execution of a function.
This is the job of setTimeout . we can  specify a callback function to execute later, and a value
expressing how later you want it to run, in milliseconds.
The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
syntax is: setTimeout(function, milliseconds, param1, param2, ...)
function->The function that will be executed
milliseconds->Optional,The number of milliseconds to wait before executing the code. If omitted, the value 0 is used
param1, param2, ...	->Optional,Additional parameters to pass to the function (Not supported in IE9 and earlier)
*/

let b=setTimeout(()=>{
    console.log("I'm anand")//the ouput will be I'm anand after 3 seconds
},3000);

//there is also a function to prevent setTimeout() to execute, it is clearTimeOut()

clearTimeout(b);//now there will be no output as it prevents setTimeout to ve executed.

//Output is nothing as clearTimeout(b) will be executed.  

//Now I write a program for countdown from 10 to 1 for everysecond.
let n = 10;
setTimeout(countDown,1000);
console.log(n);
function countDown(){
   n--;
   if(n > 1)
      setTimeout(countDown,1000);
   console.log(n);
   if(n==1)
    console.log((n-1)+" Time Up ");
}

//Here recursion is applied to overcome that I used setInterval in the setInterval.js file

/*                  Output:
PS C:\Users\ANAND\sets> node setTimeout.js
10
9
8
7
6
5
4
3
2
1
0 Time Up
PS C:\Users\ANAND\sets>
*/
