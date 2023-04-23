function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivot = arr[0];
  var left = [];
  var right = [];
  for (var i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quicksort(left).concat(pivot, quicksort(right));
}
const sort_result = quicksort((arr = [11, 4, 2, 5, 10, 8, 7, 9, 6]));
console.log("sort array = " + sort_result);
