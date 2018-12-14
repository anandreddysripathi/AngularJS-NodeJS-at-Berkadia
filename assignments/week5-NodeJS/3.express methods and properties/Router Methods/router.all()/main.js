//express.Router() creates a new router object.
// To separate the routes from our main main.js file, we will use Express.Router.
// so that we can achieve modularity in our project because everyone have their own functonality.

let express=require('express');
let app=express();
//here i am making router variable to access routerFile.js file
let router=require('./routerFile');

//here if /router is requested then router is going to be executed which means it will navigate to the routerFile now
app.use('/router',router);

app.listen(1998);