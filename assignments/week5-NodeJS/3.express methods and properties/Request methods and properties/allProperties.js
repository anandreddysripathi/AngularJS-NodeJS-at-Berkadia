//program involving all properties of request
let express = require("express");
let app = express();

app.get('/:id', (req, res, next) => {
    res.end("see the console");
   //req.app holds a reference to the instance of the Express application that is using the middleware.
    console.log("req.app:  "+req.app);
   
    //req.baseURL is the URL path on which a router instance was mounted.
    console.log("req.baseUrl:  "+req.baseUrl);
   
    //Contains key-value pairs of data submitted in the request body. 
   //By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.
    console.log("req.body:  "+req.body);
    
    //When using cookie-parser middleware, this property is an object that contains cookies sent by the request.
    // If the request contains no cookies, it defaults to {}.
    console.log("req.cookies:  "+req.cookies);


    console.log("req.fresh:  "+req.fresh);

    console.log("req.hostname:  "+req.hostname);

    //req.ip contains the remote IP address of the request.
    console.log("req.ip: "+req.ip);

    console.log("req.ips: "+req.ips);

    //req.method contains a string corresponding to the HTTP method of the request: GET, POST, PUT, and so on.
    console.log("req.method: "+req.method);

    console.log("req.originalUrl: "+req.originalUrl);

    //req.params property is an object containing properties mapped to the named route “parameters”.
    console.log("req.params: "+req.params);
   
    //req.path contains the path part of the request URL
    console.log("req.path: "+req.path);

     //req.protocol contains the request protocol string: either http or (for TLS requests) https.
    console.log("req.protocol: "+req.protocol);

    // This property is an object containing a property for each query string parameter in the route.
    //  If there is no query string, it is the empty object, {}.
    console.log("req.query: "+req.query);

    //req.route contains the currently-matched route
    console.log("req.route: "+req.route);

    //req.secure is a Boolean property that is true if a TLS connection is established,now here it will be false
    console.log("req.secure: "+req.secure);

    console.log("req.signedCookies: "+req.signedCookies);

    console.log("req.stale: "+req.stale);

    console.log("req.subdomains: "+req.subdomains);

    console.log("req.xhr: "+req.xhr);
});
app.listen(1998);

/*Output will be:
req.app:  function(req, res, next) {
    app.handle(req, res, next);
  }
req.baseUrl:
req.body:  undefined
req.cookies:  undefined
req.fresh:  false
req.hostname:  localhost
req.ip: ::1
req.ips:
req.method: GET
req.originalUrl: /2
req.params: [object Object]
req.path: /2
req.protocol: http
req.query: [object Object]
req.route: [object Object]
req.secure: false
req.signedCookies: undefined
req.stale: true
req.subdomains:
req.xhr: false
 */