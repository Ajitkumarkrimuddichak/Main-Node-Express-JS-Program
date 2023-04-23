//output 2,4,6,8,10=30
// sum = 0;
// var n = 5;
// for (var i = 2; i <= n * 2; i = i + 2) {
//   sum = sum + i;
// }
// console.log(sum);

var sum = 0,
  i = 2;
var n = 10;
while (i <= n * 2) {
  sum = sum + i;
  i = i + 2;
}
console.log(sum);
