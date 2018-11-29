/*
we need to follow reverse proxy technique to make apache be able to run node.js application on the same server. 
Since we cannot run the both node.js and apache to listen the same port.
we will config apache to act like a reverse proxy and pass the request to node.js application for a specific url. 
if you already have Apache server running on localhost and want to run Node.js app on localhost/node,
 the flow  looks like

 http://localhost/node--------->apache transforms into http://localhost:3000------>JS application


Apache reroute the request by using proxypass directive. Just head to httpd.conf file and add the below line
ProxyPass /node http://localhost:3000/ 

NECESSARY SCREENSHOTS ARE KEPT IN THE DIRECTORY

make sure that you have enable the mod_proxy and mod_proxy_http modules by uncommenting it

LoadModule proxy_module modules/mod_proxy.so
LoadModule proxy_http_module modules/mod_proxy_http.so
Save the file, and reboot the Apache server.

NOW INSTEAD OF GIVING PORT NUMBER WE CAN USE localhost/node TO GET THE OUPUT BY STARTING THE APACHE SERVER USING XAMPP IN
THE LOCAL SYSTEM.

Now it can be run using both port number and /node
*/

const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello Anand from Node.js Application'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))