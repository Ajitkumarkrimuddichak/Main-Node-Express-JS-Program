//Syntex (promise :- (resolve -> then) and (reject -> catch) )

/*async function test() {
  return "Hello Ajit kumar";
}
console.log(test());*/

//or
async function test() {
  return "Hello Ajit kumar";
}
test().then((result) => {
  console.log(result);
});
