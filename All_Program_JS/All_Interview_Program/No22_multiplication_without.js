//not used *
var a = 5,
  b = 10,
  mul = 0,
  i;
if (b < 0) {
  b = -b;
  a = -a;
}
for (i = 1; i <= b; i++) {
  mul = mul + a;
}
console.log(mul);
