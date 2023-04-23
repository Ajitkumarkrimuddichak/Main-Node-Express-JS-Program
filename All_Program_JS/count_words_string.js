function count_words(str1) {
  //exclude  start and end white-space
  str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
  //convert 2 or more spaces to 1
  str1 = str1.replace(/[ ]{2,}/gi, " ");
  // exclude newline with a start spacing
  str1 = str1.replace(/\n /, "\n");
  var str = str1.split(" ").length;
  console.log(str);
}
count_words("ajit kumar is the best ass f d");
