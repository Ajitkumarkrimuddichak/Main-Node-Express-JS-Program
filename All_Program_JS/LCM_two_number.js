function LCM(x, y) {
  if (!y) return y === 0 ? x : NaN;
  return LCM(y, x % y);
}

function LCM2(x, y) {
  return (x * y) / LCM(x, y);
}
console.log(LCM2(3, 15));
console.log(LCM2(10, 15));
