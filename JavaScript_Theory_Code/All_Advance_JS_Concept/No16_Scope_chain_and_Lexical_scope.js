//Lexical scoping
/*let name = "Ajit kumar";
function b() {
  var age = 25;
  console.log(`student name ${name} and Age ${age}`);
}
b();*/

//(1)Block level Scope chain
/*let x = 40;
{
  let x = 30;
  {
    let = 20;
    {
      let x = 10;
      console.log(x);
    }
  }
}*/

//(2)function level Scope chain
/*let x = 40;
function a() {
  let x = 30;
  b();
  function b() {
    let x = 20;
    c();
    function c() {
      let x = 10;
      console.log(x);
    }
  }
}
a();*/

//(2)function level Scope chain
var a = " Ajit kumar";
function first() {
  var b = " How are you";
  second();
  function second() {
    var c = " my name is mukul kumar";
    console.log(a + b + c);
  }
}
first();
