let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    //res.json(null);//this will return null 
    res.json({ name:"anand" });
});
app.listen(1998,console.log("listening to port 1998"));