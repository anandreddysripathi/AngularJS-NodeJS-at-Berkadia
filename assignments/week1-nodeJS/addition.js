var sum=0;  
  numbers =process.argv.slice(2);
  numbers.forEach(function (val) {
     sum +=Number(val);
     return sum;
      });
      console.log('addition is:'+sum); 
      
      The output for the above program is:
      ------------------------------------
      C:\Users\ANAND\Operations>node index.js 2 3
      addition is:5
