const arr1 = [1, 2, -2, 11, 6, 1];
const arr2 = [1, 4, 7, 2, 4, 7];
function secondLargest(arr1) {
  let arr = [...new Set(arr1)].sort((a, b) => a - b);
  return arr[arr.length - 2];
}
console.log(secondLargest(arr1));
console.log(secondLargest(arr2));
