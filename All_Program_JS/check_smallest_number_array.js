let arr = [0, 10, 20, 3, 98, 95, 100];
let smallest = arr[0];
function smallestNumber() {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log(smallest);
}
smallestNumber();
