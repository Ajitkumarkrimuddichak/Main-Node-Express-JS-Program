const obj = {
  a: 1,
  b: null,
  c: undefined,
  d: "ajit",
};
//array
/*const newobj = Object.entries(obj).filter(([_, val]) => val != null);
console.log(newobj);*/

//Object
const newobj = Object.fromEntries(
  Object.entries(obj).filter(([_, val]) => val != null)
);
console.log(newobj);
