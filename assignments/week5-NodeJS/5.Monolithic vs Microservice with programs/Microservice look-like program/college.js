let college=require('./college.json');
let router=require('express').Router();

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.json(college.find(x=>x.id==req.params.id));
});

router.get('/',(req,res)=>{
   res.json(college);
});

router.post('/',(req,res)=>{
    let body=req.body;
    let index=college.findIndex(x=>x.id==body.id)
    
    if(index===-1)
      college.push(body)
    else
      college[index]=body;
    res.json(body.id);  
});

router.delete('/:id',(req,res)=>{
  let s=college.findIndex(x=>x.id==req.params.id);
  college.splice(s,1);   
  res.send('success');
});

module.exports=router;