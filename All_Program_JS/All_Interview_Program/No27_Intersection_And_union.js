//find the Intersection
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
/*const inter = arr1.filter((cur) => {
  {
    return arr2.includes(cur);
  }
});
console.log(inter);*/

//find the Union
const union = [...new Set([...arr1, ...arr2])];
console.log(union);
