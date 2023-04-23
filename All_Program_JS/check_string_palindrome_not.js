function Palindrome(palindromenumber) {
  const len = palindromenumber.length;
  for (let i = 0; i < len / 2; i++) {
    if (palindromenumber[i] !== palindromenumber[len - 1 - i]) {
      return "Not palindrome";
    }
  }
  return "palindrome";
}
const palindromenumber = "aba";
const result = Palindrome(palindromenumber);
console.log(result);
