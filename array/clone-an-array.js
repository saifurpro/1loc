let arr = [5, 10, 15, 20];
let clone1 = (arr) => arr.slice(0);
console.log(clone1(arr)); // [ 5, 10, 15, 20 ]

// Or
let clone2 = (arr) => [...arr];
console.log(clone2(arr)); // [ 5, 10, 15, 20 ]

// Or
let clone3 = (arr) => Array.from(arr);
console.log(clone3(arr)); // [ 5, 10, 15, 20 ]

// Or
let clone4 = (arr) => {
  return arr.map((item) => {
    return item;
  });
};
console.log(clone4(arr)); // [ 5, 10, 15, 20 ]

// Or
let clone5 = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};
console.log(clone5(arr)); // [ 5, 10, 15, 20 ]

// Or
let clone6 = (arr) => {
  return arr.concat([]);
};
console.log(clone6(arr)); // [ 5, 10, 15, 20 ]
