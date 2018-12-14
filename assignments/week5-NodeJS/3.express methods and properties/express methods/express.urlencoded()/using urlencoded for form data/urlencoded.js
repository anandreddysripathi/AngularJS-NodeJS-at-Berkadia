let express=require('express');
let app=express();
let bodyParser=require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendfile('index.html');
});
app.post('/login',(req,res)=>{
    let username=req.body.name;
    let password=req.body.pass;
    console.log("username is "+username+"password is "+password);
});
app.listen(1998);