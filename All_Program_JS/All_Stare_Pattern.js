var i, j;
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    if (j <= i) console.log("*");
    else console.log(" ");
  }
}

//or
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
