
 module.exports=(req,res)=>{
     let EvenorOdd=((10)%2)?'Odd number':'Even number';
    res.end("The given number is:"+EvenorOdd);
}