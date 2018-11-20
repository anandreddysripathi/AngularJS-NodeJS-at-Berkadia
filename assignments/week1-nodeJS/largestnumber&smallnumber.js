//IN THIS PROGRAM I ASSIGNED VALUE OF ONE THE ARRAY ELEMENTS TO A VARIABLE USING NUMBER() FOR TYPE CASTING.AS IT INITIALLY TAKES AS STRING.
function lar(arr)
      {
          var max=min=Number(arr[0]);
          for(var i=1;i<arr.length;i++)
          {
              if(arr[i]>max)
                max=Number(arr[i]);
                if(arr[i]<min)
                min=Number(arr[i]);
          }
          return "the largest element is:"+max+"\n the smallest element is :"+min;
      }
      var numbers=process.argv.slice(2);
      console.log(lar(numbers));
      
      The Output of the above program is:
      -----------------------------------
      C:\Users\ANAND\Operations>node index.js 2333 222 32 4233 0
      the largest element is:4233   
      the smallest element is:0
