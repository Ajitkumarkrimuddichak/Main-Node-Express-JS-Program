/*function* test() {
  yield "first";
  yield "second";
  yield "third";
}
let g = test();
console.log(g.next());
console.log(g.next());
console.log(g.next());*/

//or
function* generateit() {
  console.log("First message");
  yield "yield No 1";
  console.log("second message");
  yield "yield No 2";
}
let g = generateit();
console.log(g.next());
console.log(g.next());
