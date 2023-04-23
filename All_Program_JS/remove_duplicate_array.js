// //var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
// var arr = [1, 2, 3, 4, 5, 1, 2, 3];
// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));

//or
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates(arr));
