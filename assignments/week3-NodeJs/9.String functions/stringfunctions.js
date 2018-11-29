//length
var text = "anand reddy";
var len = text.length;
console.log(len)

//The splice() method returns the removed item(s) in an array
var array=[1,2,3,4,5];
console.log(array.splice(2));


//Split
//To split string into substrings, use the split function and get an array as the result:

var s = "a|b|c|d|e|f|g|h".split("|");
console.log(s);

//indexOf
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);
/*JavaScript counts positions from zero.
0 is the first position in a string, 1 is the second, 2 is the third ...
*/

//lastIndeOf
var str2 = "Please locate where 'locate' occurs!";
var pos2 = str2.lastIndexOf("locate");
console.log(pos2);

//The search() method searches a string for a specified value and returns the position of the match:

var str3 = "Please locate where 'locate' occurs!";
var pos3 = str3.search("locate");
console.log(pos3);

/*
The two methods search() and indexOf() are NOT equal.

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/

//slice() extracts a part of a string and returns the extracted part in a new string.
var str4 = "hello chennai";
var res = str.slice(7, 13);
console.log(res);
/*
If a parameter is negative, the position is counted from the end of the string.

This example slices out a portion of a string from position -12 to position -6:
*/

var str5 = "hello bangalore";
var res2 = str5.slice(-12, -6);
console.log(res2);

//If you omit the second parameter, the method will slice out the rest of the string:

var res3 = str5.slice(7);
console.log(res3)
/*
substring() is similar to slice().

The difference is that substring() cannot accept negative indexes.
*/
var str6 = "hello hyderabad";
var res4 = str6.substring(7, 13);
console.log(res4);

//If you omit the second parameter, substring() will slice out the rest of the string.

//The replace() method replaces a specified value with another value in a string:

welcome = "welcome to india";
var n = welcome.replace("india", "hyderabad");
console.log(n);


//String.trim() removes whitespace from both sides of a string.

var hello = "       Hello World!        ";
console.log(hello);

//The charAt() method returns the character at a specified index (position) in a string:

var string = "HELLO WORLD";
console.log(string.charAt(0));

// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).

var character1 = "HELLO WORLD";
console.log(character1.charCodeAt(0));

/*
Output is
PS C:\Users\ANAND\9.String functions> node stringfunctions.js
11
[ 3, 4, 5 ]
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
7
21
7
locate
lo ban
angalore
yderab
welcome to hyderabad
       Hello World!
H
72
PS C:\Users\ANAND\9.String functions>
*/