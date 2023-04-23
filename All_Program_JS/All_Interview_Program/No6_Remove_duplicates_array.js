let a = ["ram", "patna", 12, "ram", "ajit", "ajit", "patna", 12];
let d = [];
let len = a.length;
for (let i = 0; i < len; i++) {
  if (d.indexOf(a[i]) === -1) {
    d.push(a[i]);
  }
}
console.log(d);
