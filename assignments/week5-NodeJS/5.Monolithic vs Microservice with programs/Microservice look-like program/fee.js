let fee=require('./fee.json');
let router=require('express').Router();

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.json(fee.find(x=>x.id==req.params.id));
});

router.get('/',(req,res)=>{
   res.json(fee);
});

router.post('/',(req,res)=>{
    let body=req.body;
    let index=fee.findIndex(x=>x.id==body.id)
    
    if(index===-1)
      fee.push(body)
    else
      fee[index]=body;
    res.json(body.id);  
});

router.delete('/:id',(req,res)=>{
  let s=fee.findIndex(x=>x.id==req.params.id);
  fee.splice(s,1);   
  res.send('success');
});

module.exports=router;