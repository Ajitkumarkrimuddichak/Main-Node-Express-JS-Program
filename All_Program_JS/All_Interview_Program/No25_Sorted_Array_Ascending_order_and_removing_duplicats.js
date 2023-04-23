//Sorted array
/*let arr1 = [1, 3, 5, 4, 6],
  arr2 = [2, 4, 4, 7, 8];
let arr3 = [...arr1, ...arr2];
arr3.sort((a, b) => a - b);
console.log(arr3);*/

//sorted Array in Ascending order by Removing Duplicates
/*let arr1 = [1, 3, 5, 4, 6],
  arr2 = [2, 4, 4, 7, 8];
let arr3 = [...arr1, ...arr2];
arr3.sort((a, b) => a - b);
console.log(arr3);

arr3.sort((a, b) => a - b);
arr3 = [...new Set(arr3)];
console.log(arr3);*/

//sorted Array in Descending order by Removing Duplicates
let arr1 = [1, 3, 5, 4, 6],
  arr2 = [2, 4, 4, 7, 8];
let arr3 = [...arr1, ...arr2];
arr3.sort((a, b) => a - b);
console.log(arr3);

arr3.sort((a, b) => b - a);
arr3 = [...new Set(arr3)];
console.log(arr3);
