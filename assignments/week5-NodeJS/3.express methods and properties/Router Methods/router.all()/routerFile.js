let express=require('express');
let router=express.Router();

//making to respond if the get request is done 
//this will execute when user types localhost:1998/router
//no matter the type of HTTP request received, this following code will execute , beacause it is used to accept any type of requests
router.all('/',(req,res)=>{
    res.send("you requested the webpage this will execute irrespective of the HTTP method type");
});
//to execute this this file I export the router so that it can be accessible to other files
module.exports=router;