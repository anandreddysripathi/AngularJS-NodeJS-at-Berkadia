/*

The filter() method creates a new array with all elements that pass the test implemented by the provided function.
filter is a higher order function which means it expects the arguement to be an another function.
filter() is used when you want to select a subset of multiple elements from an array.
*/

//program to take a 3 letter words from a sentence
let sentence="hello my name is anand from vardhaman"
let words=sentence.split(/\W+/).filter(word=>word.length>=3);
console.log(words);
 /*Output will be:
   [ 'hello', 'name', 'anand', 'from', 'vardhaman' ]
 */

var number=number.filter(num=>(num%2==0));
console.log("the even numbers are :"+number);
/*Output is
 the even numbers are :2,4
 */

