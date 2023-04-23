//Single line swaping program
// var a = 10,
//   b = 20;
// console.log("Before=" + a, b);
// b = a + b - (a = b);
// console.log(`After = ${a} and ${b}`);

//or without used third veriable
// var x = 10,
//   y = 20;
// x = x + y;
// y = x - y;
// x = x - y;
// console.log(`swap value = ${x} and ${y}`);

//or
var z,
  x = 10,
  y = 20;
z = x;
x = y;
y = z;
console.log(`swap two number = ${x} and ${y}`);
