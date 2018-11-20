var mul=1;
      numbers =process.argv.slice(2);
      numbers.forEach(function (val) {
        mul *=Number(val);
        return mul;
         });
         console.log("the multiplication of numbers is:"+mul);
         
         The ouput of the above program is:
         ----------------------------------
         C:\Users\ANAND\Operations>node mul.js 2 3 2
         the multiplication of numbers is:12
