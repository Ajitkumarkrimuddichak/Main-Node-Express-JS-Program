// function sum_Of_Cubes(n) {
//   var sumn = 0;

//   for (var i = 1; i <= n; i++) {
//     sumn += Math.pow(i, 3);
//   }
//   return sumn;
// }
// console.log(sum_Of_Cubes(2));
// console.log(sum_Of_Cubes(4));

// //or
// function sumCube(n) {
//   return Math.pow((n * n + n) / 2, 2);
// }
// const va = sumCube(2);
// console.log(va);

//or
const x = (function sumation(n) {
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
})(3);
console.log("sumation value", x);
