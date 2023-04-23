const str = "This is javascript code";
const arrofstr = str.split(" ");
const reverstr = arrofstr
  .map((item) => item.split("").reverse().join(""))
  .join("");
console.log(reverstr);
