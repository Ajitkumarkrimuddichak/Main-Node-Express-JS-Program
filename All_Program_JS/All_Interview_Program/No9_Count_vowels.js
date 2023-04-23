var str = "hasdkjghhnfakjhkeioujn";
const reg = /[aeiou]/gi;
var chars = str.match(reg);
console.log(chars);
console.log(chars.join(","));
console.log(chars.length);
