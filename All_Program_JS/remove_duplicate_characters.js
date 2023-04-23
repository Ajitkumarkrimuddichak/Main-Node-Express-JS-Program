const str = "kkmk";
const removeDuplicates = (str = "") => {
  const arr = [];
  for (const char of str) {
    if (char === arr[arr.length - 1]) {
      while (arr[arr.length - 1] === char) {
        arr.pop();
      }
    } else {
      arr.push(char);
    }
  }
  return arr.join("");
};
console.log(removeDuplicates(str));
