// Function to check whether a number is prime or not
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
// Function to check a prime number
function isPossible(N) {
  if (isPrime(N) && isPrime(N - 2)) {
    return true;
  } else {
    return false;
  }
}
let n = 13;
if (isPossible(n)) console.log("Yes");
else console.log("No");
