//This microservice validates whether user can be logged in or not
let express = require('express');
let http = require('http');
let app = express();

app.get('/login', (req, res)=>{
    let reponse="";
    //here i make my code listen to 3000 and validate the user, appropriate block will be executed upon login validation
    let options = {
        host: 'localhost',
        port: 3000,
        path: req.originalUrl
    };
    if(req.query.pass == "1998"){
        reponse += "<p>Success logged in as <b>"+req.query.user+"</b> This is validated by localhost 2000(micorservice)</p><br>";
        http.get(options,(resp)=>{
            console.log("Got response: " + resp.statusCode);
            resp.setEncoding('utf8');
            resp.on("data",(chunk)=>{
              reponse += chunk;
              res.send(reponse);
            });
          }).on('error',(e)=>{
            console.log("Got error: " + e.message);
          });
    }
    else{
        res.send("Password incorrect");
    }
});

app.listen(2000,()=>console.log("listening on 2000"));