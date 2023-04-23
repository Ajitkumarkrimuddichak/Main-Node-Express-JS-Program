const ajit = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
var total = ajit(5)(4)(3)(2)(1);
console.log(total);
