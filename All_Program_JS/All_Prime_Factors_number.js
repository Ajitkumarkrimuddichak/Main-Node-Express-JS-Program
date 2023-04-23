// function findAllPrime(num) {
//   let d = 2;
//   let factor = [];
//   while (num > 2) {
//     if (num % d === 0) {
//       factor.push(d);
//       num /= d;
//     } else {
//       d++;
//     }
//   }
//   return [...new Set(factor)];
// }

// console.log(findAllPrime(100)); // [2, 5]

//or
// function check(num) {
//   arr = [];
//   for (let i = 2; i <= num; i++) {
//     if (num % i == 0) {
//       if (i == 2 || i % 2) {
//         arr.push(i);
//       }
//       num /= i;
//     }
//   }
//   return arr;
// }
// console.log(check(100));
// console.log(check(18));
// console.log(check(103));
// console.log(check(104));
// console.log(check(105));

//or
const num = 18;
const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
const findPrimeFactors = (num) => {
  const res = num % 2 === 0 ? [2] : [];
  let start = 3;
  while (start <= num) {
    if (num % start === 0) {
      if (isPrime(start)) {
        res.push(start);
      }
    }
    start++;
  }
  return res;
};
console.log(findPrimeFactors(18));
