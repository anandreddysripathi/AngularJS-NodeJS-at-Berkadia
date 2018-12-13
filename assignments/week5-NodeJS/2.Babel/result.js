"use strict";

var name = "anand";

(function () {
  console.log("my name is:" + name);
});

var odds = evens.map(function (v) {
  return v + 1;
});
var nums = evens.map(function (v, i) {
  return v + i;
});

nums.forEach(function (v) {
  if (v % 5 === 0) fives.push(v);
});
