//First n even natural number in Reverse Order output:-10,8,6,4,2
// var n = 5;
// while (n) {
//   console.log(2 * n);
//   n--;
// }

//or
// function naturalReverse(n) {
//   while (n) {
//     console.log(2 * n);
//     n--;
//   }
// }
// naturalReverse(5);

//Another program Print firest 10 even natural number print output:-2,4,6,8,...
// var n = 10;
// for (var i = 2; i <= 2 * n; i = i + 2) {
//   console.log(i);
// }

//or
function even(n) {
  let i = 2;
  while (i <= n * 2) {
    console.log(i);
    i = i + 2;
  }
}
even(10);
