//Convert Binary To Decimal
// function bin_to_dec(bstr) {
//   return parseInt(bstr.replace(/[^01]/gi), 2);
// }
// var result = bin_to_dec("10101");
// console.log(`convert Binary to Decimal Number :- ${result}`);

//Convert Decimal To Binary
// decimal_to_binart_hehx_octal = function (n, base) {
//   if (n < 0) {
//     n = 0xffffffff + n + 1;
//   }
//   switch (base) {
//     case "Binary":
//       return parseInt(n, 10).toString(2);
//       break;
//     case "Hexa":
//       return parseInt(n, 10).toString(16);
//       break;
//     case "Octal":
//       return parseInt(n, 10).toString(8);
//       break;
//     default:
//       return "Wrong input.........";
//   }
// };

// console.log(
//   "Decimal to Binary :- " + decimal_to_binart_hehx_octal(67, "Binary")
// );
// console.log(
//   "Decimal to Hexa Decimal :- " + decimal_to_binart_hehx_octal(976, "Hexa")
// );
// console.log(
//   "Decimal to Ocatal :- " + decimal_to_binart_hehx_octal(128, "Octal")
// );

//Binary to decimal octal and Hexa decimal
// Binary_to_decimal_hexxa_Octal = function (n, base) {
//   if (n < 0) {
//     n = 0xffffffff + n + 1;
//   }
//   switch (base) {
//     case "Decimal":
//       return parseInt(n, 2).toString(10);
//       break;
//     case "Hexa":
//       return parseInt(n, 2).toString(16);
//       break;
//     case "Octal":
//       return parseInt(n, 2).toString(8);
//       break;
//     default:
//       return "Wrong input.........";
//   }
// };

// console.log(
//   "Binary to Decimal :- " + Binary_to_decimal_hexxa_Octal(101101, "Decimal")
// );
// console.log(
//   "Binary to Hexa Decimal :- " + Binary_to_decimal_hexxa_Octal(11011, "Hexa")
// );
// console.log(
//   "Binary to Ocatal :- " + Binary_to_decimal_hexxa_Octal(101101, "Octal")
// );

//Octal To Decimal Binary and Hexa decilmal convert
// Octal_to_decimal_hexxa_Binary = function (n, base) {
//   if (n < 0) {
//     n = 0xffffffff + n + 1;
//   }
//   switch (base) {
//     case "Decimal":
//       return parseInt(n, 8).toString(10);
//       break;
//     case "Hexa":
//       return parseInt(n, 8).toString(16);
//       break;
//     case "Binary":
//       return parseInt(n, 8).toString(2);
//       break;
//     default:
//       return "Wrong input.........";
//   }
// };

// console.log(
//   "Octal to Decimal :- " + Octal_to_decimal_hexxa_Binary(677, "Decimal")
// );
// console.log(
//   "Octal to Hexa Decimal :- " + Octal_to_decimal_hexxa_Binary(7665, "Hexa")
// );
// console.log(
//   "Octal to Binary :- " + Octal_to_decimal_hexxa_Binary(531, "Binary")
// );

//HexaDecimal to Decimal Binary and Octal convert
HexaDecimal_to_decimal_octal_Binary = function (n, base) {
  //console.log(n);
  // console.log(base);
  if (n < 0) {
    n = 0xffffffff + n + 1;
  }
  // console.log(n);
  switch (base) {
    case "Decimal":
      return parseInt(n, 16).toString(10);
      break;
    case "Octal":
      return parseInt(n, 16).toString(8);
      break;
    case "Binary":
      return parseInt(n, 16).toString(2);
      break;
    default:
      return "Wrong input.........";
  }
};

console.log(
  "Hexa Decimal to Decimal :- " +
    HexaDecimal_to_decimal_octal_Binary(88, "Decimal")
);
console.log(
  "Hexa Decimal to Octal :- " + HexaDecimal_to_decimal_octal_Binary(12, "Octal")
);
console.log(
  "Hexa Decimal to Binary :- " +
    HexaDecimal_to_decimal_octal_Binary(12, "Binary")
);
