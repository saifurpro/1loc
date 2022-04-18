let isEqual = (a, b) => {
  return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
};

let arr1 = [2, 3, 1];
let arr2 = [1, 2, 3];
console.log(isEqual(arr1, arr2)); // true
