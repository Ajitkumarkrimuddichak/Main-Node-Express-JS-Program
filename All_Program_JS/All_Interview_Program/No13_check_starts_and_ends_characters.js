var str = "ajit kumar is the best student";
var teststr = str.startsWith("a");
var testEnd = str.endsWith("t");
if (teststr == true && testEnd == true) {
  console.log(`${str} start with A and ends with T`);
} else if (teststr == true && testEnd == false) {
  console.log(`${str} starts with A`);
} else if (teststr == false && testEnd == true) {
  console.log(`${str} End with T`);
} else {
  console.log(`${str} neither starts with A not end with T`);
}
