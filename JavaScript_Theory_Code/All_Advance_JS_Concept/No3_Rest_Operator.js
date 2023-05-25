/*function Rest_Operator(name, ...args) {
  let sum = 0;
  for (let i in args) {
    sum = sum + args[i];
  }
  console.log(sum);
  console.log(name);
}
Rest_Operator("Ajit kumar", 10, 20, 30);*/

//or
/*function sum(a, b) {
  console.log(a + b);
}
sum(1, 2, 3, 4, 5, 6);*/

//or
/*function sum(...kuchhbhi) {
  console.log(kuchhbhi);
}
sum(1, 2, 3, 4, 5, 6);*/

//or
/*function sum(...kuchhbhi) {
  console.log(...kuchhbhi);
}
sum(1, 2, 3, 4, 5, 6);*/

function sum(...inputs) {
  let total = 0;
  for (let i of inputs) {
    total += i;
  }
  console.log(total);
}
sum(1, 2, 3, 4, 5, 6);
