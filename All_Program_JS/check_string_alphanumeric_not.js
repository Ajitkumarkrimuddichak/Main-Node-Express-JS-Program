function Alphanumeric(str) {
  //return str.match(/^[a-zA-Z0-9]+$/) !== null;
  return str.search(/^[a-zA-Z0-9]+$/) !== -1;
}
console.log(Alphanumeric("abc")); // false
var result = Alphanumeric("Ajit804453"); //true
console.log(`This value is Alphanumeric value 👍 ${result}`);
