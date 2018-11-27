//SetImmediate 
/*
When we want to execute some piece of code asynchronously, but as soon as possible, one option is to use the setImmediate() function provided by Node.js:
Any function passed as the setImmediate() argument is a callback that’s executed in the next iteration of the event loop.
A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.
*/

let immediate = setImmediate(()=> {
    console.log("Anand Vivek ");
    setImmediate(()=>
    { 
        nextSetImmediate();
        console.log("this is inside setImmediate");
    });
    console.log("this is 2nd log");
    });
   function nextSetImmediate(){
      setImmediate(()=>{console.log("this will be setImmediate inside setImmediate")});   
        //clearImmediate(a);
    }  
//clearImmediate(immediate);
//clearImmediate is used to prevent the setImmediate
 
/*  Output will be
 PS C:\Users\ANAND\sets> node setImmediate.js
Anand Vivek
this is 2nd log
this is inside setImmediate
this will be setImmediate inside setImmediate
PS C:\Users\ANAND\sets>
*/

//I found process.nextTick() somewhat comparable and gone through that as well.

/*
the function in process.nextTick() will be executed after the current iteration is completed.
A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. 
This means it will always execute before setTimeout and setImmediate.
*/

//An example of Setimmediate and process.nextTick
function step(iteration) {
  if (iteration === 10) return;
  setImmediate(() => {
    console.log(`setImmediate iteration: ${iteration}`);
    step(iteration + 1); // Recursive call from setImmediate handler.
  });
  process.nextTick(() => {
    console.log(`nextTick iteration: ${iteration}`);
  });
}
step(0);

/*we are stepping through the first iteration of the event loop.
It will call into the step function with iteration zero.
It will then register two handlers, one for setImmediate and one for process.nextTick. 
We then recursively call this function from the setImmediate handler which will run in the next check phase.
The nextTick handler will run at the end of the current operation interrupting the event loop, so even though it was registered second it will actually run first.
The order ends up being: nextTick fires as current operation ends, next event loop begins, normal event loop phases execute, setImmediate fires and recursively calls our step function to start the process all over again. 
Current operation ends, nextTick fires, etc.
*/

                                //The output of the code will be:
/*
PS C:\Users\ANAND\sets> node setImmediate.js
nextTick iteration: 0
setImmediate iteration: 0
nextTick iteration: 1
setImmediate iteration: 1
nextTick iteration: 2
setImmediate iteration: 2
nextTick iteration: 3
setImmediate iteration: 3
nextTick iteration: 4
setImmediate iteration: 4
nextTick iteration: 5
setImmediate iteration: 5
nextTick iteration: 6
setImmediate iteration: 6
nextTick iteration: 7
setImmediate iteration: 7
nextTick iteration: 8
setImmediate iteration: 8
nextTick iteration: 9
setImmediate iteration: 9
PS C:\Users\ANAND\sets>
*/


// Now let's move our recursive call to step into our nextTick handler instead of the setImmediate.

function step(iteration) {
  if (iteration === 10) return;
  setImmediate(() => {
    console.log(`setImmediate iteration: ${iteration}`);
  });
  process.nextTick(() => {
    console.log(`nextTick iteration: ${iteration}`);
    step(iteration + 1); // Recursive call from nextTick handler.
  });
}
step(0);


/*
Now that we have moved the recursive call to step into the nextTick handler things will behave in a different order.
Our first iteration of the event loop runs and calls step registering a setImmedaite handler as well as a nextTick handler. 
After the current operation ends our nextTick handler fires which recursively calls step and registers another setImmediate handler as well as another nextTick handler.
Since a nextTick handler fires after the current operation, registering a nextTick handler within a nextTick handler will cause the second handler to run immediately after the current handler operation finishes.
The nextTick handlers will keep firing, preventing the current event loop from ever continuing.
We will get through all our nextTick handlers before we see a single setImmediate handler fire.
*/
  

                                //The output of the code will be:
/* 
PS C:\Users\ANAND\sets> node setImmediate.js
nextTick iteration: 0
nextTick iteration: 1
nextTick iteration: 2
nextTick iteration: 3
nextTick iteration: 4
nextTick iteration: 5
nextTick iteration: 6
nextTick iteration: 7
nextTick iteration: 8
nextTick iteration: 9
setImmediate iteration: 0
setImmediate iteration: 1
setImmediate iteration: 2
setImmediate iteration: 3
setImmediate iteration: 4
setImmediate iteration: 5
setImmediate iteration: 6
setImmediate iteration: 7
setImmediate iteration: 8
setImmediate iteration: 9
PS C:\Users\ANAND\sets>
*/

/*
Here I did not interrupted the recursive call and aborted it after 10 iterations then the nextTick calls would keep recursing and never letting the event loop continue to the next phase. 
This is how nextTick can become blocking when used recursively.
whereas setImmediate will fire in the next event loop and setting another setImmediate handler from within one won't interrupt the current event loop at all, allowing it to continue executing phases of the event loop as normal.
*/
