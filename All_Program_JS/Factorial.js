// function factorial(n) {
//   let answer = 1;
//   if (n == 0 || n == 1) {
//     return answer;
//   } else if (n > 1) {
//     for (var i = n; i >= 1; i--) {
//       answer = answer * i;
//     }
//     return answer;
//   } else {
//     return "number has to be positive.";
//   }
// }
// let n = 4;
// answer = factorial(n);
// console.log("Factorial of " + n + " : " + answer);

//or
// function factorial(n) {
//   if (n < 0) {
//     return "number has to be positive.";
//   }
//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// let n = 4;
// answer = factorial(n);
// console.log("Factorial of " + n + " : " + answer);

//or not used loop
let num = 5;
function fact(number) {
  if (number == 1) return 1;
  else return number * fact(number - 1);
}
console.log(fact(num));
