//Error-Handling Middleware
// Error-handling middleware always takes four arguments.
// We must provide four arguments to identify it as an error-handling middleware function. 
// Even if we don’t need to use the next object, you must specify it to maintain the signature. 
// Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
// The error handling middleware allows us to separate our error logic and send responses accordingly.
//For error handling, we have the next(err) function. 
//A call to the next(err) skips all middleware and matches us to the next error handler for that route. 

let express = require('express');
let app = express();

app.get('/',(req, res,next)=>{
   //Here I Create an error and pass it to the next function
   let err = new Error("this is an error statement i want to throw now");
   next(err);
});

//An error handling middleware
//here the err will be assigned to the error in the below code
app.use((error, req, res, next)=>{
   res.status(500);
   //console.log(error);
   res.send("An error occured "+error)
});

app.listen(1998);

/* 
Output will be:500 Internal Server Error
   An error occured Error: this is an error statement i want to throw now
*/