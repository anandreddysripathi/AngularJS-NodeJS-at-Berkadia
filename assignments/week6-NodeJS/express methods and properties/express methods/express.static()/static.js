//express.static() is a built-in middleware function in Express. It serves static files and is based on serve-static.
//Express provides a built-in middleware express.static to serve static files, such as images, CSS, JavaScript, etc.
//simply need to pass the name of the directory where you keep your static assets,to the express.static middleware to start serving the files directly. 

var express = require('express');
var app = express();

//here anand is the  directory and we can navigate through it in the postman or browser
//Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.
app.use(express.static('anand'));
 app.listen(1998);

 //in the browser we send the request using like this localhost:1998/required_file_name
