let arr = [1, 5, 2, 4, 3];

let sortArrToASC = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};
console.log(sortArrToASC(arr)); // [ 1, 2, 3, 4, 5 ]

let sortArrToDEC = (arr) => {
  return arr.sort((a, b) => {
    return b - a;
  });
};
console.log(sortArrToDEC(arr)); // [ 5, 4, 3, 2, 1 ]
