// // Javascript program to find GCD of two numbers
// // Recursive function to return gcd of a and b
// function gcd(a, b) {
//   // Everything divides 0
//   if (a == 0 && b == 0) return 0;
//   if (a == 0) return b;
//   if (b == 0) return a;
//   // Base case
//   if (a == b) return a;
//   // a is greater
//   if (a > b) return gcd(a - b, b);
//   return gcd(a, b - a);
// }
// var a = 98,
//   b = 56;
// console.log("GCD of " + a + " and " + b + " is = " + gcd(a, b));

//or
function HCF(x, y) {
  if (!y) return y === 0 ? x : NaN;
  return HCF(y, x % y);
}
console.log(HCF(98, 56));
