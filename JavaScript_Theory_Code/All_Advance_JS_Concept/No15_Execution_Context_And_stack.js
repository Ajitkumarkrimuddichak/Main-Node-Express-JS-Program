//var thi = "Windows";
function a() {
  var fa = "1st function";
  console.log(fa);
  b();
  console.log("let's see when i will be on console");
}
function b() {
  console.log("2nd function");
  c();
}
function c() {
  console.log("3rd function");
}
debugger;
a();
