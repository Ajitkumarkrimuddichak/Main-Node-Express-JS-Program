var str = "ajitkjjfdhaliehqjdjikjiji";
var letter = "j";
var strlen = str.length;
var counter = 0;
for (var i = 0; i < strlen; i++) {
  if (str[i] == letter) {
    counter++;
  }
}
console.log(`${str} ${letter} ${counter}`);
