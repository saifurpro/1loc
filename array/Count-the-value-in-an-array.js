// Count the occurrences of a value in an array

let arr1 = [2, 1, 3, 3, 2, 3, 2, 3, 2];
let arr2 = ["a", "b", "a", "c", "a", "b"];

const countOccurrences = (arr, val) => {
  return arr.filter((item) => {
    return item === val;
  }).length;
};

console.log(countOccurrences(arr1, 2)); // 4
console.log(countOccurrences(arr2, "a")); // 3
