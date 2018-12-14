let express=require('express');
let router=express.Router();

//making to respond if the get request is done 
//this will execute when user types localhost:1998/router
//base on the type of HTTP request received,appropriate code will execute 
router.get('/',(req,res)=>{res.send("you selected GET method");});
router.post('/',(req,res)=>{res.send("selected post method")});
router.delete('/',(req,res)=>{res.send("selected delete method")});
router.put('/',(req,res)=>{res.send("selected put method")});
//to execute this this file I export the router so that it can be accessible to other files
module.exports=router;