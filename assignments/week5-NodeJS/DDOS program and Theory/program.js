

//This is just a sample program I've thought to proceed with this way 

let express=require('express');
let app=express();
//here i set a count variable so that my server wants to respond to only my required number of requests using count,
//if my count exceeds my personal limit then no one can get response from my server

var count=0;

function increment_count(res){
    count++;
    res.send("Hi I'm anand , this is server message and your count is "+count+" and can still send "+(5-count)+" requests ");
}

app.get('/',(req,res)=>{
    if(count<5)//here I'm restrciting count to only 5 so that upto first 5 clients only requests can be considerable.
     increment_count(res);
    else
     res.end("you can no longer get server response sorry as server has exceeded the requests"); 
});
app.listen(1998,()=>console.log("listening on port 1998"));

//This may not be a perfect program but this will be like kind of handling the DDOS attack
