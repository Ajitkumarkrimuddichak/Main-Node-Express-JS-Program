// const rotateArr = (arr) => {
//   const first = arr.shift();
//   arr.push(first);
//   return arr;
// };

// console.log(rotateArr([3, 4, 5, 6]));

//or
function rotate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let save = arr[0];
    let j = 1;
    for (j; j < arr.length; j++) {
      arr[j - 1] = arr[j];
    }
    arr[j - 1] = save;
    console.log(arr);
  }
}
rotate([10, 20, 30, 40, 50, 60]);
/*
    [20, 30, 40, 50, 60, 10]
    [30, 40, 50, 60, 10, 20]
    [40, 50, 60, 10, 20, 30]
    [50, 60, 10, 20, 30, 40]
    [60, 10, 20, 30, 40, 50]
    [10, 20, 30, 40, 50, 60]
    */
