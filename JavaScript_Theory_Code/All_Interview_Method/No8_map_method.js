const oldarr = ["Ajit", "kumar", "singh"];
/*const newarr = oldarr.map(function (cvalue) {
  return cvalue;
});
console.log(newarr);
console.log(oldarr);*/

//or
const newarr = oldarr.map(function (cvalue, i, arr) {
  return i + " : " + cvalue + "patna";
});
console.log(newarr);
