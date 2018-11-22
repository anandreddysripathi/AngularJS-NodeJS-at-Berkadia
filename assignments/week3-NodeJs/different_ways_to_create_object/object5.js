//using functions
 function Fullname(first,middle) {
     this.first = first
     this.middle=middle 
}
 let name1 = new Fullname('Sripathi', 'Anand')
 let name2 = new Fullname('Sripathi', 'Vivek')
 console.log(name1.middle);    //Output:Anand
 console.log(name2.middle);    //Output: Vivek
 
 /*
 Output is:
 ----------
 PS C:\Users\ANAND\object> node object5.js
Anand
Vivek
*/