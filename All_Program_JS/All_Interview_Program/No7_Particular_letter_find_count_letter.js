var string = "ajit KUMAR patna is the isbb";
var upper = string.toUpperCase();
const reg = /[ab]/gi;
var test = upper.match(reg);
var leng = test.length;
console.log(leng);
console.log(string);
console.log(test);
