//Returns the matching content type if the incoming request’s “Content-Type” HTTP header field matches the MIME type specified by the type parameter. 
//If the request has no body, returns null. Returns false otherwise.

let express=require('express');
let app=express();

app.get('/',(req,res)=>{;
console.log(req.is('html'));
console.log(req.is('text/html')); 
console.log(req.is('text/*'));    
// When Content-Type is application/json
console.log(req.is('json'));      
console.log(req.is('application/json')); 
console.log(req.is('application/*'));    

console.log(req.is('html'));
});
app.listen(1998);

/*Output will be:
false
false
false
false
false
application/x-www-form-urlencoded
false
*/ 