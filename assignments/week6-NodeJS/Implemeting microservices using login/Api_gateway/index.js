//implementing API gateway and listening to other microservice
let express = require('express');
let http = require('http');
let app = express();

app.get('/', (req, res)=>{
   res.send("<div style='text-align:center'><h1 align='center'>Api Gateway home.....now the details are validated by other microservices</h1><br> enter localhost:1000/login?user=admin&pass=1998 for admin success login in the URL<br><b>Localhost 2000 validates password<br> Localhost 3000 validates user </b><br>if password is not valid, then localhost 2000 wont pass control to 3000 to know the type of user.</div>");
});
   app.get('/login',(req,res)=>{
 //here my code listens to 2000 and validates the password, based on whether user is admin or it the appropriate code will be executed.
    let options = {
        host: 'localhost',
        port: 2000,
        path: req.originalUrl
    };
    http.get(options,(resp)=>{
        console.log("Got response: " + resp.statusCode);
        resp.setEncoding('utf8');
        resp.on("data",(chunk)=>{
          res.send(chunk);
        });
      }).on('error',(e)=>{
        console.log("Got error: " + e.message);
      });
});

app.all('*',(req,res)=>{ 
    res.end("<h1 align='center'>404 Oops!!!!</h1>");
});

app.listen(1000,()=>console.log("listening on 1000"));