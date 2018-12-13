let http=require('http');
let server=http.createServer((req,res)=>{
  res.end('Chitti 2.0');
});
server.listen(1998,'localhost',()=>{console.log('Listening on 1998');});