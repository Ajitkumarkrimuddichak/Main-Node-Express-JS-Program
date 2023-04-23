function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
const sort_result = insertionSort((arr = [10, 4, 15, 5, 6, 2, 3, 8, 9, 1]));
console.log("sorting Array = " + sort_result);
console.log(typeof sort_result);
