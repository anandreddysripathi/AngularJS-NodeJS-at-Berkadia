//importing modules
var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();
const route=require('./routes/route');

const port=3000;

mongoose.connect("mongodb://localhost:27017/contactlist",{ useNewUrlParser: true });

mongoose.connection.on("connected",()=>{console.log("successfully connected to the database")});

mongoose.connection.on("error",(err)=>{
    if(err)
    console.log("error in connecting to database"+err);
});

//adding middleware-cors
app.use(cors());

//body-parser
app.use(bodyparser.json())

//static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

app.get('/',(req,res)=>{
    res.send("hello");
});

app.listen(port,console.log("listening to port "+port))