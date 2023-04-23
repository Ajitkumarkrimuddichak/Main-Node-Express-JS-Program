// const areCoprimes = (num1, num2) => {
//   const smaller = num1 > num2 ? num1 : num2;
//   for (let ind = 2; ind < smaller; ind++) {
//     const condition1 = num1 % ind === 0;
//     const condition2 = num2 % ind === 0;
//     if (condition1 && condition2) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(areCoprimes(3, 5));
// console.log(areCoprimes(2, 10));

//or
// Javascript program to check if two
// numbers are co-prime or not// Recursive function to// return gcd of a and b
function __gcd(a, b) {
  // Everything divides 0
  if (a == 0 || b == 0) return 0;
  // Base case
  if (a == b) return a;
  // a is greater
  if (a > b) return __gcd(a - b, b);
  return __gcd(a, b - a);
}
// Function to check and print if two numbers are co-prime or not
function coprime(a, b) {
  if (__gcd(a, b) == 1) console.log(`Co-Prime = ${a},${b}`);
  else console.log(`Not Co-Prime = ${a},${b}`);
}
// Driver Code
var a = 5,
  b = 6;
coprime(a, b);
a = 8;
b = 16;
coprime(a, b);
