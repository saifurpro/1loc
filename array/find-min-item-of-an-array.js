let arr = [21, 2, 3, 4, 5, 6, 33, 99, 101, 34];

let findMinItemFromArray = (arr) => {
  return Math.min(...arr);
};

console.log(findMinItemFromArray(arr)); // 2
