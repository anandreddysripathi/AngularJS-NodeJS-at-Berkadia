let express=require('express');
let app=express();


app.all('/',(req,res)=>{
 res.send("HI I'm Anand");
});
app.listen(1998,console.log("listening to port 1998"));