let arr = ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"];
let uniqueArr = (arr) => {
  return [...new Set(arr)];
};
console.log(uniqueArr(arr)); // ["h", "e", "l", "o", "w", "r", "d"];

let removeDuplicate = (arr) => {
  return arr.filter((item) => {
    return arr.indexOf(item) === arr.lastIndexOf(item);
  });
};
console.log(removeDuplicate(arr)); // [ 'h', 'e', 'w', 'r', 'd' ]
