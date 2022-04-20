let numbers = ["1", "2", "3", "4", "5"];

let toNumbers = (arr) => {
  return arr.map((item) => parseInt(item));
};

console.log(toNumbers(numbers)); // [ 1, 2, 3, 4, 5 ]
