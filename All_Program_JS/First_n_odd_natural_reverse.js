//First n odd natural number in Reverse Order output:-5,3,1
// var n = 5;
// while (n) {
//   console.log(2 * n - 1);
//   n--;
// }

//or
// function naturalReverse(n) {
//   while (n) {
//     console.log(2 * n - 1);
//     n--;
//   }
// }
// naturalReverse(10);

//Another program Print firest 10 odd natural number print output:-1,3,5,...
// var n = 10;
// for (var i = 1; i <= 2 * n; i = i + 2) {
//   console.log(i);
// }

//or
function odd(n) {
  let i = 1;
  while (i <= n * 2) {
    console.log(i);
    i = i + 2;
  }
}
odd(10);
