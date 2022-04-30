let arr = [111, 22, 7, 10];

let sumOfArray = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev + curr;
  });
};

console.log(sumOfArray(arr)); // 150
