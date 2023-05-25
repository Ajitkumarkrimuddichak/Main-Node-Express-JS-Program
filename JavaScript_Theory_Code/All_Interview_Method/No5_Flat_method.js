/*const array = [
  [1, 2, 4],
  [5, 6, 8],
];
const flaarray = array.flat(Infinity);
console.log(flaarray);*/

//or
/*const array = [[1, 2, 3], [4, 5, 6], [[[[10, 20]]]]];
const flaarray = array.flat(Infinity);
console.log(flaarray);*/

//or
const matrix = [[1, 2, 3], [4, 5, 6], [[[[[[11, 12]]]]]]];
const total = matrix.flat(Infinity).reduce((a, v) => a + v, 0);
console.log(total);
