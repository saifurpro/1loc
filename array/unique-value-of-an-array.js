let arr1 = [1, 2, 3, 1, 2, 3, 2];

let uniqueArr1 = (arr) => {
  return [...new Set(arr)];
};
console.log(uniqueArr1(arr1)); // [1, 2, 3]

// OR,
let arr2 = [5, 6, 5, 6, 6, 7];
let uniqueArr2 = (arr) => {
  return arr.filter((el, index, array) => {
    return array.indexOf(el) === index;
  });
};
console.log(uniqueArr2(arr2)); // [5, 6, 7];
