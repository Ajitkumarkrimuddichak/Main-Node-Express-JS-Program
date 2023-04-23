var array1 = [5, 4, 8, 10, 9];
var array2 = [5, 10, 8, 9, 4];
const is_same =
  array1.length == array2.length &&
  array1.every((curElement) => {
    if (array2.indexOf(curElement) > -1) {
      return (curElement = array2[array2.indexOf(curElement)]);
    }
  });
console.log(is_same);
