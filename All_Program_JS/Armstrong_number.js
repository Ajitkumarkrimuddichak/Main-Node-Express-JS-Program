// function three_digit_armstrong_number() {
//   for (var i = 1; i < 10; ++i) {
//     for (var j = 0; j < 10; ++j) {
//       for (var k = 0; k < 10; ++k) {
//         var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
//         var plus = i * 100 + j * 10 + k;
//         if (pow == plus) {
//           console.log(pow);
//         }
//       }
//     }
//   }
// }
// three_digit_armstrong_number();

//or
function armstrong() {
  for (let i = 100; i <= 1000; i += 1) {
    let str = i.toString();
    let a = str[0] * 1;
    let b = str[1] * 1;
    let c = str[2] * 1;
    let check = a * a * a + b * b * b + c * c * c;
    if (check === i) {
      console.log(i);
    }
  }
}
armstrong();
