//using classes
  class Fullname {
    constructor(first, middle, last) {
      this.first=first;
      this.middle=middle;
      this.last=last;
    }
  }
  let name1 = new Fullname('narkulla', 'vivek', 'chowdary');
  let name2 = new Fullname('sripathi', 'anand', 'reddy');
  console.log(name1.first);    //Output: narkulla
  console.log(name2.middle);   //Output: anand

/*
Output is:
---------
PS C:\Users\ANAND\object> node object4.js
narkulla
anand
*/