/*
With the apply() method, you can write a method that can be used on different objects.
The apply() method takes arguments as an array.
The apply() method is very handy if you want to use an array instead of an argument list.
It’s very much same as call method with only difference being its takes an array like object as arguments.
*/  

function sum(){
    let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum+=arguments[i];
    }
    return sum;
}
const result=sum.apply(null,[1,2,3,4,5])
console.log("the sum of the numbers is:"+result);

/*Output will be:
the sum of the numbers is:15
*/