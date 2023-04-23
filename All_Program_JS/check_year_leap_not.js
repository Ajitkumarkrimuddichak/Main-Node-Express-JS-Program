// var year = 2010;
// if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//   console.log("Leap Year");
// } else {
//   console.log("not Leap year");
// }

var year = 2011;
if (year % 4) {
  console.log("not a leap year");
} else {
  if (year % 100) {
    console.log("Leap year");
  } else {
    if (year % 400) {
      console.log("not a leap year");
    } else {
      console.log("Leap year");
    }
  }
}
