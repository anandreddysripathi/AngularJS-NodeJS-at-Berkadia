let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.sendFile('anand/index.html' , { root : __dirname});
});
app.listen(1998,console.log("listening to port 1998"));