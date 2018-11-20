var arr =process.argv.slice(2);
  var empty = [], multiple = [];
for(var i = 0; i < arr.length; i++)
{
  if(empty.includes(arr[i]) && !multiple.includes(arr[i]))
    multiple.push(arr[i])
  else
    empty.push(arr[i]);
}
console.log("The repeated elements are:"+multiple);

   The output of the above program is:
   -----------------------------------
   C:\Users\ANAND\Operations>node index.js 2 3 2 3 3 4  4
   The repeated elements are:2,3,4
