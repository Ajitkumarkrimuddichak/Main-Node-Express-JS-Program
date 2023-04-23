// function vowel_Count(str) {
//   return str.replace(/[^aeiou/AIOUE]/g, "").length;
// }
// console.log(vowel_Count("ajitKUMAR"));

// or
// function countVowel(str) {
//   const count = str.match(/[aeiou]/gi).length;
//   return count;
// }
// const string = "ajit";
// const result = countVowel(string);
// console.log(result);

//or
function vowel_count(str1) {
  var vowel_list = "aeiouAEIOU";
  var vcount = 0;
  for (var x = 0; x < str1.length; x++) {
    if (vowel_list.indexOf(str1[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
console.log(vowel_count("Ajit the best student in the world"));
