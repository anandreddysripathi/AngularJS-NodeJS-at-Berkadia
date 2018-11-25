let html_code=`<html>
<body>
<h2 align='center'>Crud Operations</h2>
<fieldset align="center">
 <legend><Strong>Select any Operation</Strong></legend>
<form name="radio" align='center' action="/" method="post"> 
  Enter Data for file:<input type="text" name="fname"><br>
  <input type="radio" name="Operation" value="Create" > Create file<br>
  <input type="radio" name="Operation" value="Read"> Read file<br>
  <input type="radio" name="Operation" value="Update"> Update data to file(append) <br>
  <input type="radio" name="Operation" value="Delete"> Delete file <br>
  <input type="submit" value="GO">
</form> 
</fieldset>
</body>
</html>`;
let http = require('http');
let { parse } = require('querystring');
var fs=require('fs');
let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html_code);   
     //read(res);
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            let selected_operation=result.Operation;
             if(selected_operation=='Create') create_file(result,res)
             else if(selected_operation=='Read') read_file(res)
             else if(selected_operation=='Update') update_file(result.fname,res)
             else delete_file(res);
        //  res.write(`you have selected ${selected_operation}`);
        //  res.write("<br>");   
        //res.end(`Parsed data belonging to ${result.fname}`);
        });

    }   
});
server.listen(3000);

function create_file(values,res)
{
    fs.writeFile('file.txt',values.fname,(err)=>{console.error(err);});
      res.write('successfully created file and written '+values.fname+' into file.txt');
}
function read_file(res)
{
    fs.readFile('file.txt',(err, data)=>{if (err) return console.error(err);
          res.write("The data present in the file is : " + data.toString());
        });
}
function update_file(text,res)
{
    fs.appendFile('file.txt', text,(err)=> {
        if (err) throw err;
        res.write('successfully appended text '+text.toString()+' click read file to see updated file');
      });
    }
function delete_file(res)
{
    fs.unlinkSync('file.txt');
    res.write("File has been deleted successfully");
    //fs.truncate('file.txt',0,()=>console.log('file deleted'));
}
function collectRequestData(request, callback) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
}