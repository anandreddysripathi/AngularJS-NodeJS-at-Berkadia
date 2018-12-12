//Router-Level Middleware
var express = require("express");
var app = express();

//Creating Router() object
var router = express.Router();

// Router middleware, mentioned it before defining routes.
router.use((req,res,next)=>{
  console.log("/" + req.method);
  next();
});

// Provide all routes here
router.all("/",(req,res)=>{
  res.json({"name" : "My name is Anand"});
});

app.use("/",router);
// Listen to this Port
app.listen(1998);

/*
Output will be :

 in console:
 ----------- 
 /GET 

 in browser: localhost:1998
 --------------------------
 {"name":"My name is Anand"}
*/