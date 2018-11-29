/*
The map() method creates a new array with the results of calling a provided function on every element in the calling array.
map is used when you have an array of stuff ( scientific term ) and you want to do something ( another scientific term ) for every item in that array.
 The provided callback to map modifies the array elements and save them into the new array upon completion that array get returned as the mapped array. 
*/

 var persons=[
     {name:"Anusha",college:"Osmania"},
     {name:"Vivek",college:"Nit raipur"},
     {name:"Anand",college:"Vardhaman"}
 ];
 var info=persons.map((student)=>{
     console.log(student.name+" from  "+student.college);
 });
            /*
            The output will be:
                PS C:\Users\ANAND\8.map,filter,reduce> node map.js
                Anusha from  Osmania
                Vivek from  Nit raipur
                Anand from  Vardhaman
                PS C:\Users\ANAND\8.map,filter,reduce>
           */

 
 
  const numbers = [4,9,10,16];
 const squareroots = numbers.map(x => console.log(`squareroot is of ${x} is `+Math.sqrt(x)));

            /*
            The output of will be:
                PS C:\Users\ANAND\8.map,filter,reduce> node map.js
                squareroot is of 4 is 2
                squareroot is of 9 is 3
                squareroot is of 10 is 3.1622776601683795
                squareroot is of 16 is 4
                PS C:\Users\ANAND\8.map,filter,reduce>
            */