/*var user = "Ajit kumar";
let marks = 500;
const Total_result = `hello ${user} your markes ${marks}`;
console.log(Total_result);*/

let first = "Ajit kumar";
var last = "singh";
function template(first, last) {
  return `${first} ${last}`;
}
const total_result = `Hello ${template(first, last)}`;
console.log(total_result);
