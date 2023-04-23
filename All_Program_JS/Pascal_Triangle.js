// const pascalTriangle = (n) => {
//   const arr = [];
//   for (let i = 0; i < n; i++) {
//     const row = [1];
//     for (let j = 1; j < i; j++) {
//       row.push(arr[i - 1][j - 1] + arr[i - 1][j]);
//     }
//     if (i > 0) row.push(1);
//     arr.push(row);
//   }
//   return arr;
// };
// console.log(pascalTriangle(6));

//or
let pascalTriangle = (rows) => {
  for (let i = 0; i < rows; i++) {
    let str = "";
    let number = 1;

    //Add the white space to the left
    for (let k = 1; k <= rows - i; k++) {
      str += " ";
    }

    //Add the numbers sequence for each row
    for (let j = 0; j <= i; j++) {
      str += number + " ";

      //Formula to calculate the pascal triangle
      number = (number * (i - j)) / (j + 1);
    }

    //Add the white space to the right
    for (let k = i + 1; k <= rows; k++) {
      str += " ";
    }

    //Print the pattern for each row
    console.log(str);
  }
};
pascalTriangle(8);
