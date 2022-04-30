let arr = [1, 2, 3, 4, 5, 6, 33, 99, 101, 34];

let findMaxItemFromArray = (arr) => {
  return Math.max(...arr);
};

console.log(findMaxItemFromArray(arr)); // 101
