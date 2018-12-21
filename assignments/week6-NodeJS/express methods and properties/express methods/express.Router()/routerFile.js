let express=require('express');
let router=express.Router();

//making to respond if the get request is done 
//this will execute when user types localhost:1998/router
router.get('/',(req,res)=>{
  res.send("You have selected GET opertion from router");
});

router.post('/',(req,res)=>{
    res.send("you have selected POST operation from router");
});

//to execute this this file I export the router so that it can be accessible to other files
module.exports=router;