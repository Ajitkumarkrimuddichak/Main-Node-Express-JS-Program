/*let user = {
  name: "Ajit kumar",
  age: 25,
  city: "patna",
};
let { name, age, city } = user;
console.log(city);*/

/*const user = { fname: "Ajit kumar", age: 22, city: "patna" };
let { fname, ...args } = user;
console.log(fname, args);*/

/*function user({ name, age, city }) {
  console.log(name);
  console.log(age);
  console.log(city);
}
user({ name: "AJit kumar", age: 25, city: "patna" });*/

function user() {
  return { name: "Ajit kumar", age: 25, city: "Patna" };
}
let { name, age, city } = user();
console.log(age);
