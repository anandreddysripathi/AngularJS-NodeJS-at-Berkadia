//This microservice validates the type of user
let express = require('express');
let app = express();

app.get('/login', (req, res)=>{
   if(req.query.user == "admin"){
       res.send("You have <b>administrator</b> privileges........... This is validated by localhost 3000(a microservice)");      
   }
   else{
       res.send("You have <b>Normal</b> User privileges...........This is validated by localhost 3000 (a microservice)");
   }
});

app.listen(3000,()=>console.log("listening on 3000"));