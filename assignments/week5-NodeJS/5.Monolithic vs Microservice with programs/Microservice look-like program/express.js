let express=require('express');
let app=express();
let BodyParser=require('body-parser');

app.use(BodyParser.json({limit:"10mb"}));
//implementing microservice by making use of other js files having their own functionality 
app.use('/student',require('./student'));
app.use('/college',require('./college'));
app.use('/fee',require('./fee'));
app.get('/',(req,res)=>{
    res.send("hi you did not select anything");
});
app.listen(1998,()=>console.log("listening on port 1998"));