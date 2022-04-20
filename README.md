## Favorite JavaScript Utilities in single line of code! No more!

### 1. একটি ভ্যালু কে অ্যারে তে কনভারর্ট করা

```
let convertArray = (value) => {
  return Array.isArray(value) ? value : [value];
};

console.log(convertArray("Hello")); // [ 'Hello' ]
```

### 2. অ্যারে টি ফাঁকা কি না চেক করা

```
let isEmptyArray = (value) => {
  return Array.isArray(value) && !value.length;
};
console.log(isEmptyArray([])); /* true */
console.log(isEmptyArray([12, 23])); /* false */
```

### 3. অ্যারে কপি করা

```
let arr = [5, 10, 15, 20];
let clone1 = (arr) => arr.slice(0);
console.log(clone1(arr)); // [ 5, 10, 15, 20 ]
```

```
// Or
let clone2 = (arr) => [...arr];
console.log(clone2(arr)); // [ 5, 10, 15, 20 ]
```

```
// Or
let clone3 = (arr) => Array.from(arr);
console.log(clone3(arr)); // [ 5, 10, 15, 20 ]
```

```
// Or
let clone4 = (arr) => {
  return arr.map((item) => {
    return item;
  });
};
console.log(clone4(arr)); // [ 5, 10, 15, 20 ]
```

```
// Or
let clone5 = (arr) => {
  return JSON.parse(JSON.stringify(arr));
};
console.log(clone5(arr)); // [ 5, 10, 15, 20 ]
```

```
// Or
let clone6 = (arr) => {
  return arr.concat([]);
};
console.log(clone6(arr)); // [ 5, 10, 15, 20 ]
```

### 4. অর্ডার ব্যাতিত দুটি অ্যারে তুলনা করা

```
let isEqual = (a, b) => {
  return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
};

let arr1 = [2, 3, 1];
let arr2 = [1, 2, 3];
console.log(isEqual(arr1, arr2)); // true
```

### 5. দুটি অ্যারে তুলনা করা

```
let isEqual = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};
console.log(isEqual([2, 3, 4], [4, 3, 2])); // false
console.log(isEqual([2, 3, 4], [2, 3, 4])); // true
```
