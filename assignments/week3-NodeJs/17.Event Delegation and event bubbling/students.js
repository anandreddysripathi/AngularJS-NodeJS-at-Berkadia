/*
Event Delegation in JavaScript is an important optimization technique that we can use to make our websites
run faster when responding to user-events.
It saves us memory, and can help make our code simpler and easier to write and understand.
*/

/*
Event Delegation allows us to avoid adding event listeners to specific nodes; instead,
the event listener is added to one parent.That event listener analyzes bubbled events 
to find a match on child elements.
*/

/*
Event bubbling :
the event starts at the most specific node and flows outwards to the least specific one.
this is the default type of event flow with every wide browser support.

*/


(function() {
    'use strict';


/*
var student1=document.querySelector('#student1');
var student2=document.querySelector('#student2');
var student3=document.querySelector('#student3');
var student4=document.querySelector('#student4');
var student4=document.querySelector('#student4');


student1.addEventListener('click',()=> {
    console.log(student1.innerText, 'was clicked');
}, false);

student2.addEventListener('click',()=> {
    console.log(student2.innerText, 'was clicked');
}, false);

student3.addEventListener('click',()=> {
    console.log(student3.innerText, 'was clicked');
}, false);

student4.addEventListener('click',()=> {
    console.log(student4.innerText, 'was clicked');
}, false);

student5.addEventListener('click',()=> {
    console.log(student5.innerText, 'was clicked');
}, false);
*/

//Here instead of assigning lisetener to every child i can do this by giving it to parent like this

//Now on clicking on any of the student name it will display that student was clicked.

var students = document.querySelector('#students');

students.addEventListener('click', (e)=>{
    if (e.target) {
    console.log(e.target.innerText,' was clicked (with event delegation)');
    }
}, false);
})();