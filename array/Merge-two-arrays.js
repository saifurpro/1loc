let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3];

let marge1 = arr1.concat(arr2);
console.log(marge1); // [ 1, 2, 3, 4, 1, 2, 3]

// OR
let marge2 = [...arr1, ...arr2];
console.log(marge2); // [ 1, 2, 3, 4, 1, 2, 3]

// Merge and remove the duplications
let marge3 = (a, b) => [...new Set(a.concat(b))];
console.log(marge3(arr1, arr2)); // [ 1, 2, 3, 4 ]

// Or,
let marge4 = (a, b) => [...new Set([...a, ...b])];
console.log(marge4(arr1, arr2)); // [ 1, 2, 3, 4 ]
