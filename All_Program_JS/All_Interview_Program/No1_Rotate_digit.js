function arrayRotate(arr, reverse) {
  if (reverse) arr.unshift(arr.pop());
  else arr.push(arr.shift());
  return arr;
}

var newval = arrayRotate([1, 2, 3, 4, 5]); // [2, 3, 4, 5, 1];
console.log(newval);
var secon = arrayRotate([1, 2, 3, 4, 5], true); // [5, 1, 2, 3, 4];
console.log(secon);
