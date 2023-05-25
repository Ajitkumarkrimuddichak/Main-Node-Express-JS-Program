/*const user = ["Ajit", 22, "patna"];
let [fname, age = 25, city] = user;
console.log(fname);
console.log(age);*/

/*const user = ["Ajit kumar", 22, "Deharadun", "patna"];
let [fname, ...args] = user;
console.log(fname, args);*/

/*function user([name, age, city]) {
  console.log(name);
  console.log(age);
  console.log(city);
}
user(["AJit kumar", 25, "patna"]);*/

function user() {
  return ["Ajit kumar", 25, "Patna"];
}
let [name, age, city] = user();
console.log(city);
