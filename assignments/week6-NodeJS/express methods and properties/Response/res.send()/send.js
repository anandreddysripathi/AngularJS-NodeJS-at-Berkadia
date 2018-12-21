
let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.send(new Buffer('This is buffer'));
    res.send({ name: 'anand' });//sending a json
  res.send('<p>some html</p>');
  res.status(404).send('Sorry, we cannot find that!');
  res.status(500).send({ error: 'something blew up' });
  res.send('<p>some html</p>');
});
app.listen(1998,console.log("listening to port 1998"));