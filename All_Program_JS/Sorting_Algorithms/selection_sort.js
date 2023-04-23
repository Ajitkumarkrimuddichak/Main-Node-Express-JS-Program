function selectionsort(a) {
  for (let i = 0; i < a.length; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) {
        min = j;
        let temp = a[j];
      }
    }
    if (min < a[i]) {
      let tem = a[i];
      a[i] = a[min];
      a[min] = tem;
    }
  }
  return a;
}
const sort_result = selectionsort((arr = [34, 15, 28, 8, 5]));
console.log("sorting Array = " + sort_result);
