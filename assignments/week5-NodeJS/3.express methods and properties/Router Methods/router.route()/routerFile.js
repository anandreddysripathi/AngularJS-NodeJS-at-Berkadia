//router.route() Returns an instance of a single route which you can then use to handle HTTP verbs with optional middleware. 
// Use router.route() to avoid duplicate route naming and thus typing errors.
let express=require('express');
let router=express.Router();

//making to respond if the get request is done 
//this will execute when user types localhost:1998/router
//to execute this this file I export the router so that it can be accessible to other files
router.route('/:id')
.all((req, res, next)=>{
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  next();
})
//here instead of declaring everytime i just simply extend so that approriate method will get executed
.get((req, res, next)=>{res.send("you have selected GET Method")})
.put((req, res, next)=>{res.send("you have selected PUT Method")})
.post((req, res, next)=>{res.send("you have selected POST Method")})
.delete((req, res, next)=>{res.send("you have selected DELETE Method")});
module.exports=router;