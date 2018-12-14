 //the router.METHOD() works for all HTTP methods which is specifiedlet express=require('express');
 let express=require('express');
 let app=express();
 //here i am making router variable to access routerFile.js file
 let router=require('./routerFile');
 
 //here if /router is requested then router is going to be executed which means it will navigate to the routerFile now
 app.use('/router',router);
 
 app.listen(1998);