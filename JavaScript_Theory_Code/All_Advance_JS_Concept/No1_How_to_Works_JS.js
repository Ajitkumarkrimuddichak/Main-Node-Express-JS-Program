//Create an Abstract syntax Tree(AST)
function howToworkInJs(x) {
  if (x > 10) {
    var a = 2;
    return a * x;
  }
  return x + 10;
}
console.log(howToworkInJs(20));
console.log(howToworkInJs(2));
