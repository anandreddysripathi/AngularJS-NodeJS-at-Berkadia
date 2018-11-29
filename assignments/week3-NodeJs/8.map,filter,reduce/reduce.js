/*
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
reduce() also runs a callback for each element of an array. 
reduces the array into one single value and returns it upon completion.
reduce() is used when you want derive a single value from multiple elements in an array.
*/
const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 0);
console.log("the sum is "+total);
/*
output is:
6
*/

var students = [
    {
      id: 48,
      name: "Anand",
      years: 20,
    },
    {
      id: 24,
      name: "Akshay",
      years: 21,
    },
    {
      id: 23,
      name: "vivek",
      years:20,
    }
  ];
  var years=0;
  var totalYears = students.reduce((accumulator, students)=> {
        years+=students.years;
    console.log(years);
  }, 0);

  /*
 Output is:
 20
41
61
*/