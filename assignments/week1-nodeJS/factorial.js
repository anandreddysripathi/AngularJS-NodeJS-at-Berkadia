var i, num,fact;
    fact=1;
   num=process.argv[2];
for(i=1; i<=num; i++)  
{
fact= fact*i;
} 
console.log("The factorial of "+num+" is:"+fact);

The ouput of the above code is
------------------------------
C:\Users\ANAND\Operations>node fact.js 6
The factorial of 6 is:720
