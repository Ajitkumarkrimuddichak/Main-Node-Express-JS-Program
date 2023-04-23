function lettersNumbersCheck(name) {
  var regEx = /^[0-9a-zA-Z]+$/;
  if (name.match(regEx)) {
    return true;
  } else {
    return false;
  }
}
var value = lettersNumbersCheck("ajit122");
console.log(value);
