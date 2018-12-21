//this is similar to app.use()
let express=require('express');
let app=express();
let router=express.Router();
//all requests to this router will first hit this middleware
router.use((req, res, next)=>{
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

// this will only be invoked if the path starts with /bar from the mount point
router.use('/bar',(req, res, next)=>{
  next();
});

// always invoked
router.use((req, res, next)=>{
  res.send('Hi');
});

app.use('/yes', router);
app.listen(1998);