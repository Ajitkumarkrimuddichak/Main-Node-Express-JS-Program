/* program to generate a multiplication table upto a range */
const number = 10;
const range = 5; //range 5 tak
for (let i = 1; i <= range; i++) {
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}
