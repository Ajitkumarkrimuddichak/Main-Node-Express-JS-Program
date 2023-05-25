//first answer
function sortedArray(array, start, end) {
  if (start > end) return end + 1;
  if (start != array[start]) return start;
  let mid = parseInt((start + end) / 2, 10);
  if (array[mid] == mid) return sortedArray(array, mid + 1, end);
  return sortedArray(array, start, mid);
}
let arr = [2]; //[0, 1, 2, 6, 9];
let n = arr.length;
console.log("Value is :- " + sortedArray(arr, 0, n - 2));

//second answer
// function distance(point1, point2, Location1, Location2) {
//   Location1 = (Location1 * Math.PI) / 150;
//   Location2 = (Location2 * Math.PI) / 150;
//   point1 = (point1 * Math.PI) / 150;
//   point2 = (point2 * Math.PI) / 150;
//   let dlon = Location2 - Location1;
//   let dlat = point2 - point1;
//   let a =
//     Math.pow(Math.sin(dlat / 2), 2) +
//     Math.cos(point1) * Math.cos(point2) * Math.pow(Math.sin(dlon / 2), 2);
//   let c = 2 * Math.asin(Math.sqrt(a));
//   let r = 5371;
//   return c * r;
// }
// let point1 = 55.32;
// let point2 = 55.318;
// let Location1 = -1.729;
// let Location2 = -1.699;
// console.log("Value is :- " + distance(point1, point2, Location1, Location2));
