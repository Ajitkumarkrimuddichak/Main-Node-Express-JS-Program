/*let fname = "Ajit kumar";
const cou = "B.Tech";
var obj = {
  fname,
  cou,
};
console.log(obj);*/

/*let n = "name";
var obj = {
  [n]: "Ajit kumar",
  cou: "MERN",
};
console.log(obj);
console.log(obj.name);*/

let fname = "Ajit";
const lname = "kumar";
var cou = "mern";
function student(fname, lname, cou) {
  let fullname = fname + " " + lname;
  return { fullname, cou };
}
console.log(student(fname, lname, cou));
