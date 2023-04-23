const arr = [2, 7, 11, 4, -2];
function rotateArray(arr) {
  for (let i = 0; i < 2; i++) {
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
  }
  console.log(arr);
}
rotateArray(arr);
