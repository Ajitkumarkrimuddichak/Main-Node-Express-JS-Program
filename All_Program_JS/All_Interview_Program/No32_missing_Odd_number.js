//Missing Odd Number
/*const arr = [5, 7, 9, 11, 15, 17];
for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  let next = current + 2;
  if (arr[i + 1] !== next) {
    console.log(next);
    break;
  }
}*/

//Missing Even Number
const arr = [2, 4, 6, 10, 12, 14];
for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  let next = current + 2;
  if (arr[i + 1] !== next) {
    console.log(next);
    break;
  }
}
