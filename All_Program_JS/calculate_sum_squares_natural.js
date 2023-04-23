// JavaScript program to calculate :- 1^2+2^2+3^2+...
function summation(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum += i * i;
  return sum;
}
let n = 5;
console.log(summation(n));
