var str = "121";
var strArray = str.split("");
var strArrayRev = strArray.reverse();
var revStr = strArrayRev.join("");
if (str === revStr) {
  console.log(`${str}: is Palindrom`);
} else {
  console.log(`${str};is not Palindrom`);
}
