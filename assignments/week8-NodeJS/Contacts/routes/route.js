const express=require('express');
const router=express.Router();

const Contact=require('../models/contacts');

//retreiving contacts
router.get('/contacts',(req,res)=>{
  //res.send("Retreiving the contact list")    
 Contact.find((err,contacts)=>{res.json(contacts);})
});

//add contact
router.post('/contact',(req,res,next)=>{
 let newContact=new Contact({
     first_name:req.body.first_name,
     last_name:req.body.last_name,
     phone:req.body.phone
 })
 newContact.save((err,contact)=>{
     if(err)
     res.json({msg:'Failed to add contact'+err})
     else
     res.json({msg:'added new contact'})
 })
});

//delete contact
router.delete('/contact/:id',(req,res,next)=>{
   Contact.remove({_id:req.params.id},(err,result)=>{
       if(err)
       res.json("unable to delete the contact "+err);
       else
       res.json("contact deleted successfully "+result);
   });
});

module.exports=router;