/*
setInterval(function, milliseconds)
Same as setTimeout(), but repeats the execution of the function continuously.
The clearTimeout() method stops the execution of the function specified in setTimeout().
*/
//sampl

//Program for countdown from 10 to 1.
//In the previous file there is recursion , that can be avoide in the program using setInterval().
let n = 10;
let a=setInterval(countDown,1000);
console.log(n);
function countDown(){
   n--;
   if(n > 0)
   console.log(n);
   if(n==0)
   {
     console.log(n+" Time Up ");
     //to terminate the execution , I used clearInterval , else it will check for -1,-2,-3,, and so on and can't find any function for those values. 
     clearInterval(a);
    }
}
4

/*              Output
PS C:\Users\ANAND\sets> node setInterval.js
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
