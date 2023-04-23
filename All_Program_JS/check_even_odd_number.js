// A simple Javascript program to check for even or odd
// function isEven(n) {
//   if (parseInt(n / 2) * 2 == n) {
//     console.log(n + " is an Even number.");
//   } else {
//     console.log(n + " is Odd.");
//   }
// }
// isEven(0);
// isEven(1);

//or
function Even_odd(n) {
  if (parseInt(n % 2) == 0) {
    console.log(n + " is an Even number.");
  } else {
    console.log(n + " is Odd.");
  }
}
Even_odd(1);
Even_odd(0);
