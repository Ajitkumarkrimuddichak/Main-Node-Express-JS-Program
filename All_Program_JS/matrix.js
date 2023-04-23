// var i, j;
// var firstarr = [
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
// ];
// var secondarr = [
//   [4, 4, 4],
//   [5, 5, 5],
//   [6, 6, 6],
// ];
// var addarr = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];
// console.log("First Matrix");
// for (i = 0; i <= 2; i++) {
//   for (j = 0; j <= 2; j++) {
//     console.log(firstarr[i][j]);
//   }
// }
// console.log("Second Matrix");
// for (i = 0; i <= 2; i++) {
//   for (j = 0; j <= 2; j++) {
//     console.log(secondarr[i][j]);
//   }
// }
// console.log("Additon of two Matrix");
// for (i = 0; i <= 2; i++) {
//   for (j = 0; j <= 2; j++) {
//     addarr[i][j] = firstarr[i][j] + secondarr[i][j];
//     console.log(addarr[i][j]);
//   }
//   console.log("<br>");
// }

//or
// Javascript program for addition of two matrices
let N = 4;
// This function adds A[][] and B[][], and stores the result in C[][]
function add(A, B, C) {
  let i, j;
  for (i = 0; i < N; i++) for (j = 0; j < N; j++) C[i][j] = A[i][j] + B[i][j];
}
// Driver code
let A = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

let B = [
  [1, 1, 1, 1],
  [2, 2, 2, 2],
  [3, 3, 3, 3],
  [4, 4, 4, 4],
];

// To store result
let C = new Array(N);
for (let k = 0; k < N; k++) C[k] = new Array(N);
let i, j;
add(A, B, C);
console.log("Result matrix is <br>");
for (i = 0; i < N; i++) {
  for (j = 0; j < N; j++) console.log(C[i][j] + " ");
  console.log("<br>");
}
