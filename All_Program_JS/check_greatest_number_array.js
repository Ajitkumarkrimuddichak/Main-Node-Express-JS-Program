let arr = [500, 10, 20, 3, 98, 95, 100];
let largest = arr[0];
function largestNumber() {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}
largestNumber();
