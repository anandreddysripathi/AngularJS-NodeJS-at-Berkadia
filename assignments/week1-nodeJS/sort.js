function Sort(arr){
        var len = arr.length;
        for (var i=len-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(Number(arr[j-1])>Number(arr[j])) {
                arr[j-1]=(Number(arr[j-1])+Number(arr[j]))-((arr[j])=Number(arr[j-1]));
             }
          }
        }
        return arr;
     }
     console.log(Sort(process.argv.slice(2)));
     
     The ouput of the above program is:
     ----------------------------------
     C:\Users\ANAND\Operations>node index.js 13 12 1 34 2 4
     1,2,4,12,13,34
