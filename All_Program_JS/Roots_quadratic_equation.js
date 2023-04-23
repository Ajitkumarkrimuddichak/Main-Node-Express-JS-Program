// //JavaScript program to find roots of a quadratic equatio
// function solve(a, b, c) {
//   var result = (-1 * b + Math.sqrt(Math.pow(b, 2)) - 4 * a * c) / (2 * a);
//   var result2 = (-1 * b - Math.sqrt(Math.pow(b, 2)) - 4 * a * c) / (2 * a);
//   return result + "<br>" + result2;
// }
// console.log(solve(1, 12, -7));

//or
function solveQuadratic(a, b, c) {
  // Calculate the discriminant
  const discriminant = b * b - 4 * a * c;
  // Return null if the discriminant is negative, as there are no real roots
  if (discriminant < 0) {
    return null;
  }
  // Calculate the roots using the formula above
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  // Return the roots as an array
  return [x1, x2];
}
// Test the function with a quadratic equation
console.log(solveQuadratic(1, -7, 12));
