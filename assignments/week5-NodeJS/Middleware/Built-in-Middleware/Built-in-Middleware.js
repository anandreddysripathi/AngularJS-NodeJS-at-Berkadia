//Built-in-Middleware
// express.static serves static assets such as HTML files, images, and so on.
// Express provides a built-in middleware express.static to serve static files, such as images, CSS, JavaScript, etc.
//  simply need to pass the name of the directory where you keep your static assets, 
//  to the express.static middleware to start serving the files directly. 

 
var express = require('express');
var app = express();

//here public is the default directory and we can navigate through it in the postman or browser
//Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
app.use(express.static('public'));
 app.listen(1998);

 //The output of this program is shown in the screenshot

