// const numberArr = [23, 122, 1, 23, 4, 56];
// const highest = Math.max(...numberArr);
// const lowest = Math.min(...numberArr);
// console.log("Highest Number: " + highest);
// console.log("Lowest Number: " + lowest);

//or
const arr = [112, 24, 31, 44, 101, 203, 33, 56, 1];
const findMaxMin = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return {
    min,
    max,
  };
};
console.log(findMaxMin(arr));
