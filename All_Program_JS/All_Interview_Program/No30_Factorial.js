let num = 5;
for (let i = num; i > 1; ) {
  i = i - 1;
  var fact = num * i;
  num = fact;
}
console.log(fact);
