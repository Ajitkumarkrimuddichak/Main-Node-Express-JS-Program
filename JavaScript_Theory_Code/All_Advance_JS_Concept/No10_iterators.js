/*var x = ["apple", "orange", "grapes"];
let y = x[Symbol.iterator]();
y.next();
y.next();
y.next();*/

//or
/*let numbers = [10, 20, 30, 40, 50];
let iter = numbers[Symbol.iterator]();
let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}*/

//or own iterator function
function numberIterator(arr) {
  var nextNum = 0;
  return {
    next() {
      if (nextNum < arr.length) {
        return {
          value: arr[nextNum++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}
let numbers = [10, 20, 30, 40];
let num = numberIterator(numbers);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
