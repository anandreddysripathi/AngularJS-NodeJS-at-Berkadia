let express=require('express');
let app=express();

app.get('/',(req,res)=>{
//res.sendStatus(200); // equivalent to res.status(200).send('OK')
res.sendStatus(9999); // equivalent to res.status(403).send('Forbidden')
//res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
//res.sendStatus(500);
});
app.listen(1998,console.log("listening to port 1998"));