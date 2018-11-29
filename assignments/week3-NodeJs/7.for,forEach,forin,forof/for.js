//appending files using forEach 
const fs = require('fs');
var files = new Array( "anand.txt", "vivek.txt", "anusha.txt" );
files.forEach(file => {
 readAndAppendContent(file);
 });        
 console.log("files appended succesfully see finalfile.txt");
//this is the readContent and append data function
function readAndAppendContent(file) {
 fs.readFile(file, (err, data) => {
     if (err) console.error(err);
     fs.appendFileSync('finalfile.txt', data.toString());
 });
}

/*the output will be:
     PS C:\Users\ANAND\7.for,forEach,forin,forof> node for.js
     files appended succesfully see finalfile.txt
     PS C:\Users\ANAND\7.for,forEach,forin,forof>
*/



//For in 
/*
the for-in loop is basically used to carve out the properties of an object.
*/
var persons=["anand","vivek","anusha"];
people="";
for(i in persons)
   people+=" "+persons[i];
console.log("the people are "+people);   

            /*
            The output will be:
                PS C:\Users\ANAND\7.for,forEach,forin,forof> node for.js
                the people are  anand vivek anusha
                PS C:\Users\ANAND\7.for,forEach,forin,forof>
            */



//For Loop
var persons = new Array( "anand", "vivek", "anusha" );
for(let i=0;i<persons.length;i++)
    console.log(persons[i]);
  
                /* Output will be
                    PS C:\Users\ANAND\7.for,forEach,forin,forof> node for.js
                    anand
                    vivek
                    anusha
                    PS C:\Users\ANAND\7.for,forEach,forin,forof>
                */

/* The problem with for loop is everytime here we are going to assign a value to a value to the variable i
and after that based on that values are retreived 
This will occupy some memory for variable and evrytime needs to modify the existing one
this solution for this is using forEach loop*/



//forEach
/*It can only be used on Arrays, Maps, and Sets.
here we need not to initialize and increment a varaible everytime, it goes throught the array from the very 
first element and go to the end */

var persons = new Array( "anand", "vivek", "anusha" );
console.log("using  for each loop ");
persons.forEach(student => {
    console.log(student);
});   

        /*
            PS C:\Users\ANAND\7.for,forEach,forin,forof> node for.js
            using  for each loop
            anand
            vivek
            anusha
            PS C:\Users\ANAND\7.for,forEach,forin,forof>
        */

//for of
/*
for of loop give us a very clean and concise syntax to iterate over all kinds of iterables
 and enumerables like strings, arrays and object literals. 
 */

var name="anand"
for (let char of name) 
  console.log(char); 

  /*The Output will be:
        PS C:\Users\ANAND\7.for,forEach,forin,forof> node for.js
        a
        n
        a
        n
        d
        PS C:\Users\ANAND\7.for,forEach,forin,forof>
 */

//Another Example 
let designation = ['student', 'student', 'student'];
let names = ['Anusha', 'Vivek', 'Anand'];
for (let campus of designation) {
    let nameIdx = Math.floor(Math.random() * names.length);
  console.log(`${names[nameIdx]} as ${campus}`);
}

                /*The output will be:
                    PS C:\Users\ANAND\7.for,forEach,forin,forof> node for.js
                    Anand as student
                    Anusha as student
                    Vivek as student
                    PS C:\Users\ANAND\7.for,forEach,forin,forof>
                    */
