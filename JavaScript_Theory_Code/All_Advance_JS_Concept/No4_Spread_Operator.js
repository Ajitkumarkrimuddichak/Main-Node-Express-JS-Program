/*function Spread_Operator(name, ...args) {
  //...args Rest Operator
  console.log(`Hello ${name}`);
  let sum = 0;
  for (let i in args) {
    sum = sum + args[i];
  }
  console.log(sum);
}
var arr = [10, 20, 30, 40];
Spread_Operator("Ajit kumar", ...arr); //...arr Sprad operator*/

/*
//Array using  ...arr Sprad operator
var arr1 = [10, 20, 30, 40];
let arr2 = [50, 60, 70, 80];
const arr3 = [...arr1, ...arr2];
console.log(arr3);*/

//Object using  ...arr Sprad operator
/*var obj1 = { A: 10, B: 20, C: 30 };
let obj2 = { D: 40, E: 50, F: 70 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);*/

//or thapa Normal js
/*function sum(a, b, c) {
  console.log(a + b + c);
}
var arrval = [1, 2, 3];
sum.apply(null, arrval);*/

//or ES6 js
/*function sum(a, b, c) {
  console.log(a + b + c);
}
var arrval = [4, 5, 10];
sum(...arrval);*/

//or normal js
/*let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
total = arr1.concat(arr2);
console.log(total);*/

//or ES6 js
/*let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
total = [...arr1, ...arr2, ...arr3];
console.log(total);*/

//or Replace copy() normal
/*let arrcop1 = [1, 2, 3];
let arrcop2 = arrcop1;
//console.log(arrcop2);
arrcop2.push(4, 5);
console.log(arrcop2);
console.log(arrcop1);*/

//or Replace copy() ES6
let arrc1 = [1, 2, 3];
let arrc2 = [...arrc1, 4, 5];
console.log(arrc2);
console.log(arrc1);
