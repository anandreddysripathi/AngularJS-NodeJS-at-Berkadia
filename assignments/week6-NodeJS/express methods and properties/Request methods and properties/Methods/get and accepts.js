// Checks if the specified content types are acceptable, based on the request’s Accept HTTP header field.
// The method returns the best match, or if none of the specified content types is acceptable,
// returns false (in which case, the application should respond with 406 "Not Acceptable").
let express=require('express');
let app=express();

app.get('/',(req,res)=>{
    req.accepts('html');
    // => "html"
    req.accepts('text/html');
    // => "text/html"
    req.accepts(['json', 'text']);
    // => "json"
    req.accepts('application/json');
    // => "application/json"
    
    // Accept: text/*, application/json
    req.accepts('image/png');
    req.accepts('png');
    // => undefined
    
    // Accept: text/*;q=.5, application/json
    req.accepts(['html', 'json']);
    res.send("yo");
});

app.listen(1998);