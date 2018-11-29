// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("done!"), 5000)
//     });
//     let result = await promise; //here the execution pauses until the value of returned to the variable result.
//     console.log("Now the promise got returned");
//     console.log(result); // "done!"
//   }
//   f();// "done"

/*Output will be:
PS C:\Users\ANAND> node 6.async,await.js
Now the promise got returned
done!
PS C:\Users\ANAND>
*/

//Another example of appending the contents of one file to another 
var fs = require("fs");
var required_file='anand.txt';
async function f() {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(required_file,(err, data)=> {
            if (err) {return console.error(err);}
        resolve(data.toString());
    })
    });
    let result = await promise; //here the execution pauses until the value of returned to the variable result.
    console.log("Now the promise got returned");
    console.log("the contents present in the file are: "+result); 
  }
  f();
/*the output will be:
PS C:\Users\ANAND\6.async,await> node async,await.js
Now the promise got returned
the contents present in the file are: sripathi anand reddy
PS C:\Users\ANAND\6.async,await>
*/