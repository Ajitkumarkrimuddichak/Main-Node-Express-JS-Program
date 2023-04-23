//Question No :- 1
//Ans:- Memory Location not same ( value False)
/*let a = [];
let b = [];
console.log(a == b);
console.log(a === b);*/

//Question No :- 2
//Ans:- Memory Location same (value True)
/*let a = [];
var b = a;
console.log(a == b);
console.log(a === b);*/

//Question No :- 3
//Ans:- Element (20) compare (value True)
/*let a = [20];
let b = [20];
console.log(a[0] == b[0]);
console.log(a[0] === b[0]);*/

//Question No :- 4
//Ans:-Dstructure
/*let z = [1, 2, 3, 4];
let a = { name: "ajit" };
console.log(...z);*/

//Question No :- 5
//Ans:- "ajit"/2 = number
/*console.log(typeof NaN);*/

//Question No :- 6
//Ans:-20
/*let data = 10 - -10;
console.log(data);*/

//Question No :- 7
//Ans:-duplicate value remove
/*let set = new Set([1, 2, 1, 4, 5]);
console.log(set);*/

//Question No :- 8
//Ans:-delete:- name ko delete ot value (true)
/*let data = { name: "Ajit" };
console.log(delete data.name);
console.log(data);*/

//Question No :- 8
//Ans:-delete:-se direct data ko delete nahi kar sake but property ko kar sakate hai(false)
/*let data = { name: "Ajit" };
console.log(delete data);
console.log(data);*/

//Question No :- 9
//Ans:-first element dega
/*const data = ["Ajit", "ram", "patna"];
const [y, x] = data;
console.log(y, x);*/

//Question No :- 10 how to get second value
//Ans:-just before , put
/*const data = ["Ajit", "ram", "patna"];
const [, y] = data;
console.log(y);*/

//Question No :- 11 how to get property  without . operator
//Ans:-
/*const data = { name: "Ajit", age: 25, skill: "JS" };
const { name } = data;
console.log(name);*/

//Question No :- 12 Merge two object
//Ans:-
/*const data1 = { name: "Ajit", age: 25, skill: "JS" };
const data2 = { city: "patna", maile: "ajit@gmai.com" };
data = { ...data1, ...data2 };
console.log(data);*/

//Question No :- 13
//Ans:-Internal object ban jayega
/*const data1 = { name: "Ajit", age: 25, skill: "JS" };
const data2 = { city: "patna", maile: "ajit@gmai.com" };
data = { data1, ...data2 };
console.log(data);*/

//Question No :- 14
//Ans:-skill value :- (Node) position same but value next
/*const data1 = { name: "Ajit", age: 25, skill: "JS" };
const data2 = { city: "patna", skill: "Node" };
data = { ...data1, ...data2 };
console.log(data);*/

//Question No :- 15
//Ans:-name is note a function
/*const name = "Ajit";
console.log(name());*/

//Question No :- 16
//Ans:-{}
/*const result = false || {} || null;
console.log(result);*/

//Question No :- 17
//Ans:-empty string(no output) last value dega
/*const data = null || false || "";
console.log(data);*/

//Question No :- 18
//Ans:-[]
/*const data = [] || 0 || true;
console.log(data);*/

//Question No :- 19
//Ans:-Promise{5}
/*console.log(Promise.resolve(5));*/

//Question No :- 20
//Ans:-true
/*console.log("image" === "image");*/

//Question No :- 21
//Ans:-Parses JSON to a JavaScript value
/*JSON.parse(); what thia methos will do */

//Question No :- 22
//Ans:- (Error) Blocal scope
/*let name = "Ajit";
function getname() {
  console.log(name);
  let name = "Mukul";
}
getname();*/

//Question No :- 23
//Ans:-(Ajit) baher se andar aa sakata hai but andar se bahe nahi ja sakata hai
/*let name = "Ajit";
function getname() {
  console.log(name);
}
getname();*/

//Question No :- 24
//Ans:-
//console.log(`${((x) => x)("I love")} to program`);

//Question No :- 25
//Ans:-6
/*function getname(x, y, z) {
  return x + y + z;
}
console.log(getname(...[1, 2, 3]));*/

//Question No :- 26
//Ans:-first operation perform (!) aftr === (L to R)
/*const name = "code Ajit kumar";
console.log(!typeof name === "object"); //False
console.log(!typeof name === "string"); //False
console.log(!typeof name === false) True*/

//Question No :- 27
//Ans:-
/*const name = "Ajit";
const age = 21;
console.log(isNaN(name));//T
console.log(isNaN(age));//F*/

//Question No :- 28
//Ans:-person.name = "mukul";
/*let person = { name: "Ajit" };
//what can modify person object
Object.seal(person);
person.name = "mukul";
console.log(person);*/

//Question No :- 29
//Ans:-data.shift();
/*let data = [2, 3, 4, 0];
//remove first element
data.shift();
console.log(data);*/

//Question No :- 30
//Ans:-data.pop();
/*let data = [2, 3, 4, 0];
//remove Last element
data.pop();
console.log(data);*/

//Question No :- 31
//Ans:-(typeof !data);
/*let data = "true";
//convert data to boolean false value
console.log(typeof data); //String
console.log(typeof !data);*/

//Question No :- 32
//Ans:-
/*let data = "true";
//convert data to boolean true value
console.log(!!data); //true
console.log(typeof !!data);//boolean*/

//Question No :- 33 fidderente between map vs forEach
//Ans:-Map methos return value but forEach no return value

//Question No :- 34
//Ans:
//merge array
/*let a = [1, 2, 3, 4];
let b = [5, 6, 7, 8];
let c = [...a, ...b];
console.log(c);*/

//Question No :- 35
//Ans:-100
/*let a = 2;
setTimeout(() => {
  console.log(a);
}, 0);
a = 100;*/

//Question No :- 36
//Ans:-first compare (true) after value (boolean) isi liye value false
/*let a = 1;
let b = 1;
let c = 2;
console.log((a === b) === --c);*/

//Question No :- 37
//Ans:-
/*console.log(b);//not defined
console.log(a);//undefined
var a;*/

//Question No :- 38
//Ans:-[[[[]]]]
//console.log([[[[]]]]);

//Question No :- 39
//Ans:-navigater.platform
//How to find OS name

//Question No :- 40
//Ans:-Hosting Rule before declaration after console.log
/*function shoe() {
  console.log(name);
  console.log(price);
  var name = "ajit";
  let price = 20;
}*/

//Question No :- 41
//Ans:-3,3,3
/*for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}*/

//Question No :- 42
//Ans:-har time alag alag value gaya settimeout me
/*for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}*/

//Question No :- 43
//Ans:-+true:-Number me convert
/*console.log(+true);
console.log(typeof +true);*/

//Question No :- 43
//Ans:-
/*console.log(!"ajit");//false
console.log(typeof "ajit");//String*/

//Question No :- 44
//Ans:-
/*let data = "Ajit";
const bird = {
  size: "kumar",
};
console.log(bird[data]);//undefined
console.log(bird["size"]);//kumar
console.log(bird.size);//kumar
console.log(bird.data);//undefined*/

//Question No :- 45
//Ans:-mukul
/*let a = { name: "Ajit" };
let b;
b = a;
a.name = "mukul";
console.log(b.name);*/

//Question No :- 46
//Ans:-'x' has already been declared
/*var x;
let x = 10;
console.log(x);*/

//Question No :- 47
//Ans:-
/*let a = 3;
let b = new Number(3);
console.log(a == b);//T
console.log(a === b);//F object type*/

//Question No :- 48
//Ans:-hi
/*function show() {
  console.log("hi");
}
show.name = "mukul";
show();*/

//Question No :- 49
//Ans:-12
/*function show(a, b) {
  return a + b;
}
console.log(show(1, "2"));*/

//Question No :- 50
//Ans:-0,2,2
/*let number = 0;
console.log(number++);
console.log(++number);
console.log(number);*/

//Question No :- 51
//Ans:-ReferenceError: age is not defined
/*function show() {
  "use strict";
  age = 11;
  console.log(age);
}
show();*/

//Question No :- 52
//Ans:-110
/*const sum = eval("10*10+10");
console.log(sum);*/

//Question No :- 53
//Ans:-T,T
/*const obj = { 1: "a", 2: "b", 3: "c" };
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));*/

//Question No :- 54
//Ans:-repeat,two
/*const obj = { a: "one", b: "two", a: "repeat" };
console.log(obj);*/

//Question No :- 55
//Ans:- 3 not console.log
/*for (let i = 0; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}*/

//Question No :- 56
//Ans:-function kis tarah se define karete ho koi matter nahi karata but call pe depend seereal wise console.log
/*const foo1 = () => console.log("first");
const foo2 = () => setTimeout(() => console.log("second")); //Last console.log
const foo3 = () => console.log("Third");
foo1();
foo2();
foo3();*/

//Question No :- 57
//Ans:-(1 call)button,(2 call)second,first
/*<div onclick="console.log('First')">
  <div onclick="console.log('Second')">
    <button onclick="console.log('button')">click</button>
  </div>
</div>*/

//Question No :- 58
//Ans:-Ajit is 21,Ajit is 21
/*const person = { name: "Ajit" };
function sayhi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayhi.call(person, 21));
console.log(sayhi.bind(person, 21)());*/

//Question No :- 59
//Ans:-Number
/*function sahw() {
  return (() => 0)();
}
console.log(typeof sahw());*/

//Question No :- 60
//Ans:-function
/*function sahw() {
  return () => 0;
}
console.log(typeof sahw());*/

//Question No :- 61
//Ans:-number
/*function sahw() {
  return () => 0;
}
console.log(typeof sahw()());*/

//Question No :- 62
//Ans:-string
//console.log(typeof typeof 1);

//Question No :- 63
//Ans:-har 8 position pe dalata hi jayega
/*const number = [1, 2, 3, 4];
number[8] = number;
console.log(number);*/

//Question No :- 64 :- Everything in javascript is either a...
//Ans:-primitive or object

//Question No :- 65
//Ans:-F,F,T
/*console.log(!!null);
console.log(!!"");
console.log(!!1);*/

//Question No :- 66
//Ans:-alag-alag ID dega
/*console.log(setInterval(() => console.log("HI"), 1000));
console.log(setInterval(() => console.log("HI"), 1000));
console.log(setInterval(() => console.log("HI"), 1000));
*/

//Question No :- 67
//Ans:-string ban jayega
/*console.log([..."Ajit"]);*/

//Question No :- 68
//Ans:-two pahale and one
/*const first = new Promise((res, rej) => {
  setTimeout(res, 150, "one");
});
const secnd = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});
Promise.race([first, secnd]).then((res) => console.log(res));
*/

//Question No :- 69
//Ans:-[ { name: 'Ajit' } ]
/*let persion = { name: "Ajit" };
const member = [persion];
persion = null;
console.log(member);*/

//Question No :- 70
//Ans:-key :- name,age console.log
/*let persion = { name: "Ajit", age: 22 };
for (const item in persion) {
  console.log(item);
}*/

//Question No :- 71
//Ans:-memory location different value (F)
/*console.log([] == []);*/

//Question No :- 72
//Ans:-undefined,undefined,undefined
/*let data = [1, 2, 3].map((num) => {
  if (typeof num === "number") return;
  return num * 2;
});
console.log(data);*/

//Question No :- 73
//Ans:-{ name: 'Ajit' }
/*function shor(member) {
  member.name = "Ajit";
}
const persion = { name: "mukul" };
shor(persion);
console.log(persion);*/

//Question No :- 74
//Ans:-Farchunr
/*function car() {
  this.make = "tata";
  return { make: "Farchunr" };
}
const mycar = new car();
console.log(mycar.make);*/

//Question No :- 75
//Ans:-undefind (block lavel)
/*(() => {
  let x = (y = 10);
})();
console.log(typeof x);*/

//Question No :- 76
//Ans:-number (y is globle veriable)
/*(() => {
  let x = (y = 10);
})();
console.log(typeof y);*/

//Question No :- 77
//Ans:-undefind
/*(() => {
  let x = 10;
})();

(() => {
  let x = 10;
})();
console.log(typeof x);*/

//Question No :- 78
//Ans:-20
/*(() => {
  let x = (y = 10);
})();

(() => {
  let x = (y = 20);
})();
console.log(y);*/

//Question No :- 79
//Ans:-21 :-Even though a is defined in the outer function, due to closure, inner functions have access to it.
/*(function (a) {
  return (function () {
    console.log(a);
    a = 6;
  })();
})(21);*/

//Question No :- 80
//Ans:-[ 111, 44, 1, 22 ] The above code snippets rotate an array to its right by some specified number of times(here 3).
/*function solve(arr, rotations) {
  if (rotations == 0) return arr;
  for (let i = 0; i < rotations; i++) {
    let element = arr.pop();
    arr.unshift(element);
  }
  return arr;
}
const value = solve([44, 1, 22, 111], 5);
console.log(value);*/

//Question No :- 81
//Ans:-4,10,18
//The loop will run 3 times, before meeting the exit condition. First value of b will be 2 * 2 = 4, followed by 4 + 3 * 2 = 10, and then value of 10 + 4 * 2 = 18.
/*var a = 1;
var b = 0;
while (a <= 3) {
  a++;
  b += a * 2;
  console.log(b);
}*/

//Question No :- 81
//Ans:-T,F
/*var a = Math.max() < Math.min();
var b = Math.max() > Math.min();
console.log(a);
console.log(b);*/

//Question No :- 82
//Ans:-5
/*var a = true + true + true * 3;
console.log(a);*/

//Question No :- 83
//Ans:-6 The above code snippet calculates the sum of numbers in an array, by using the forEach loops method
/*let sum = 0;
const a = [1, 2, 3];
a.forEach(getSum);
console.log(sum);
function getSum(ele) {
  sum += ele;
}*/

//Question No :- 84
//Ans:-
/*const set = new Set();
set.add(5);
set.add("Hello");
set.add({ name: "Scaler" });
for (let item of set) {
  console.log(item + 6);
}*/

//Question No :- 85
//Ans:-Since we are passing individual numbers rather than a single object to the function, Javascript will initialize the object parameters with their default value of undefined.
/*const example = ({ a, b, c }) => {
  console.log(a, b, c);
};
example(0, 1, 2);*/

//Question No :- 86
//Ans:-Yes
/*let a = [1, 2, 3, 4, 5, 6];
var left = 0,
  right = 5;
var found = false;
var target = 5;
while (left <= right) {
  var mid = Math.floor((left + right) / 2);
  if (a[mid] == target) {
    found = true;
    break;
  } else if (a[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
if (found) {
  console.log("YES");
} else {
  console.log("NO");
}*/

//Question No :- 87
//Ans:-7
/*let s = "00000001111111";
let l = 0,
  r = s.length - 1,
  ans = -1;
while (l <= r) {
  var mid = Math.floor((l + r) / 2);
  if (s[mid] == "1") {
    ans = mid;
    r = mid - 1;
  } else {
    l = mid + 1;
  }
}
console.log(ans);*/

//Question No :- 88
//Ans:-4
/*let n = 24;
let l = 0,
  r = 100,
  ans = n;
while (l <= r) {
  let mid = Math.floor((l + r) / 2);
  if (mid * mid <= n) {
    ans = mid;
    l = mid + 1;
  } else {
    r = mid - 1;
  }
}
console.log(ans);*/

//Question No :- 89
//Ans:-
var count = 1;
while (count < 10) {
  console.log(count);
  count++;
}
