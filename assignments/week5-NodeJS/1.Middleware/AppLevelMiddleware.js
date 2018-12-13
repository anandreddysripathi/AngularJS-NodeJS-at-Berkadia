//Application level Middleware
let express=require('express');
let app=express();

var logger=(req,res,next)=>{
   console.log("first middleware");
   next();
}
app.get('/',logger,firstMiddleware,secondMiddleware);

function firstMiddleware(req,res,next){
      console.log("second middleware");
      //here i set a timeout so that the request-response cycle will try to accept the request after 5 seconds
      setTimeout(()=>{next()}, 5000);
}

function secondMiddleware(req,res){
      res.end("executing after 5 seconds third mddleware");
}

app.listen(1998);    

/*
 Output will be:
  
  in console:
  -----------
  first middleware
  second middleware

   in browser:
   -----------
   executing after 5 seconds third mddleware
*/