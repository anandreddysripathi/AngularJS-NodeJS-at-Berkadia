var http = require('http');
//create a server object:
http.createServer(function (req, res) {
   res.writeHead(200,{'Content-Type':'text/plain'});
  res.write('This is a server response I have done'); //write a response to the client
  res.end();//this indicates that response has ended 
}).listen(1998); //the server object listens on port 1998
console.log("server listening to port 1998");
                    /*Output will be:
                            This is a server response I have done (in browser)
                            server listening to port 1998(in console)
                    */