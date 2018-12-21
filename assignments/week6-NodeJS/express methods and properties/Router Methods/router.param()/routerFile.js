//the router.param() will be executed when a paramter in the router.METHOD() is matching to this
let express=require('express');
let router=express.Router();

//making to respond if the get request is done 
//this will execute when user types localhost:1998/router

//here i am making the anand as name so that when in the url anand is requested and matches then this will be executed once.
router.param('anand',(req, res, next, id)=>{
    console.log('CALLED ONLY ONCE');
    next();
  });
  
  router.get('/user/:anand',  (req, res, next)=>{
    console.log('although this matches');
    next();
  });
  
  router.get('/user/:anand', (req, res)=> {
    console.log('and this matches too');
    res.end();
  });
//to execute this this file I export the router so that it can be accessible to other files
module.exports=router;


/*Output will be:
  CALLED ONLY ONCE
although this matches
and this matches too 
*/