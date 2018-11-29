/*concept of events:EventEmitter
An event is basically a signal that indicates that something has happened in our application for example in node
we have a class called HTTP that we can use to build a web server so we listen on a given port and every time
we receive a request on that port that HTTP class raises an event.
now our job is to respond to that event which basically involves reading that request and returning the right response
we have one class that is called event emitter it's one of the core building blocks of node and a lot of classes
are based on this event emitter
*/

const EventEmitter=require('events');
const emitter=new EventEmitter();
//I register a listener here, we should always register for listener before raising an event in the code.
//listener can be registered using on and addListener, both are same but very often on is used it seems
//The first parameter is the name of the emit which will be raised by me in the next part of code,the second parameter 
//in the listener is a callback function.
emitter.on('messageLogged',()=>{
    console.log("raised an event by anand");
});
emitter.emit('messageLogged');

                            /*
                            Output will be:
                                raise an event by anand
                            */


 //An another example                           
var events = require('events');
var util = require('util');

// creating a function Person
var Person =function(name){
// this allows, the function with any object created(anand,vivek,anusha) to utilise this function
    this.name = name;
}

// From the module util, we are inheriting the from events.EventEmitter
util.inherits(Person,events.EventEmitter);
//randomly 3 objects storing in 3 variables
var anand = new Person('anand');
var vivek = new Person('vivek');
var anusha = new Person('anusha');

var People = [anand,vivek,anusha];

People.forEach((Person)=>{
    Person.on('speak',(msg)=>{
        console.log(Person.name + ' said this ' + msg );
    });
});

anand.emit('speak',' Hi i am anand');
vivek.emit('speak',' vivek here ');
anusha.emit('speak','Dr.anusha here');

                                /*
                                Outuput wil be:
                                    anand said this  Hi i am anand
                                    vivek said this  vivek here
                                    anusha said this Dr.anusha here
                                */