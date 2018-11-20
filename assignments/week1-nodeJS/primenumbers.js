 var num=process.argv[2];
     var arr=[];
     for (i = 1; i <=num; i++)
      {
        c = 0;
        for (j = 1; j <= i; j++) 
        {
            if ((i % j)== 0)
                c++;
        }
        if (c == 2)
            arr.push(i);
      }
    console.log("The prime numbers upto "+num+" are :"+arr);
    
    The output of the above program is:
    -----------------------------------
    C:\Users\ANAND\Operations>node index.js 13
    The prime numbers upto 13 are :2,3,5,7,11,13
