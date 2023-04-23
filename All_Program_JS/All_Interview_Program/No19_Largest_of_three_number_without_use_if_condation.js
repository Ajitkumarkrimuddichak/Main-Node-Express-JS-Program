var a = 10,
  b = 20,
  c = 30,
  max;
max = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log("Largest number = " + max);
