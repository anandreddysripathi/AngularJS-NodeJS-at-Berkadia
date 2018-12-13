//Monolithic application example
//Here I use only one file so that all the services are integrated
let express=require('express');
let app=express();
let router=require('express').Router();
let BodyParser=require('body-parser');
let students=require('./students.json');
let colleges=require('./college.json');
let fee=require('./fee.json');

app.use(BodyParser.json({limit:"10mb"}));
// app.use('/student',require('./student'));

//declaring methods to go if user wants to go for STUDENT
app.get('/student',show_students);
app.get('/student/:id',get_student);
app.post('/student/',update_student);
app.delete('/student/:id',delete_student);

//declaring methods to go if user wants to go for COLLEGES
app.get('/college',show_colleges);
app.get('/college/:id',get_college);
app.post('/college/',update_college);
app.delete('/college/:id',delete_college);

module.exports=router;

function show_students(req,res){
  res.json(students);
}
function get_student(req,res){
  console.log(req.params.id);
  res.json(students.find(x=>x.id==req.params.id));
}

function update_student(req,res){
  let body=req.body;
  let index=students.findIndex(x=>x.id==body.id)
  if(index===-1)
    students.push(body)
  else
    students[index]=body;
  res.json(body.id);
}

function delete_student(req,res){
  let s=students.findIndex(x=>x.id==req.params.id);
  students.splice(s,1);   
  res.send('success');
}

function get_college(req,res){
  console.log(req.params.id);
  res.json(colleges.find(x=>x.id==req.params.id));
}
function update_college(req,res){
  let body=req.body;
  let index=students.findIndex(x=>x.id==body.id)
  if(index===-1)
    colleges.push(body)
  else
    colleges[index]=body;
  res.json(body.id);
}
function delete_college(req,res){
  let s=colleges.findIndex(x=>x.id==req.params.id);
  colleges.splice(s,1);   
  res.send('success');
}

function show_colleges(req,res){
 res.json(colleges);
}

app.listen(1998,()=>console.log("listening on port 1998"));