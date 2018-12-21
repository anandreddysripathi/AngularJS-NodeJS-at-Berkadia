//express.json() is  a built-in middleware function in Express.
//It parses incoming requests with JSON payloads and is based on body-parser.
let express=require('express');
let app=express();
let anand=require('./anand.json');
app.get('/',(req,res)=>{
  res.json(anand);
});
app.listen(1998);