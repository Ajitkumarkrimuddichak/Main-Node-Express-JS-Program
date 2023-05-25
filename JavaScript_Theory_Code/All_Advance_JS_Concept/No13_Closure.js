/*const outerfun = (a) => {
  let b = 10;
  const innerfun = () => {
    let sum = a + b;
    console.log(`The sum of two no is = ${sum}`);
  };
  innerfun();
};
outerfun(5);*/

//or
const outerfun = (a) => {
  let b = 100;
  const innerfun = () => {
    let sum = a + b;
    console.log(`The sum of two no is = ${sum}`);
  };
  return innerfun;
};
let inner = outerfun(10);
console.dir(inner);
inner();
