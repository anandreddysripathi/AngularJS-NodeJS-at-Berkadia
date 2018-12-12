let name="anand";

()=>{
  console.log("my name is:"+name);
};

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});
