let express=require('express');
let app=express();

app.param('anand',(req, res, next, id)=>{
    console.log('CALLED ONLY ONCE');
    next();
  });
  
  app.get('/user/:anand',  (req, res, next)=>{
    console.log('although this matches');
    next();
  });
  
  app.get('/user/:anand', (req, res)=> {
    console.log('and this matches too');
    res.end();
  });app.listen(1998);

  /*Output will be:
    CALLED ONLY ONCE
although this matches
and this matches too
  */