let isEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};
console.log(isEqual([2, 3, 4], [4, 3, 2])); // false
console.log(isEqual([2, 3, 4], [2, 3, 4])); // true
