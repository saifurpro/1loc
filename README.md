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

### 6. অবজেক্ট এর অ্যারেকে সিঙ্গেল অবজেক্টে কনভারর্ট করা

```
let arrayOfObjects = [
  { id: "1", name: "Saifur", gender: "Male" },
  { id: "2", name: "Rahman", gender: "Male" },
  { id: "3", name: "Liza", gender: "Female" },
];

let arrayToObject = (arr, key) => {
  return arr.reduce(
    (a, b) => {
      return {
        ...a,
        [b[key]]: b,
      };
    },

    {}
  );
};
console.log(arrayToObject(arrayOfObjects, "id"));

/*
Output:
{
  '1': { id: '1', name: 'Saifur', gender: 'Male' },
  '2': { id: '2', name: 'Rahman', gender: 'Male' },
  '3': { id: '3', name: 'Liza', gender: 'Female' }
}
*/
```

### 7. স্ট্রিং যুক্ত অ্যারেকে সংখ্যা যুক্ত অ্যারেতে রূপান্তর করা

```
let numbers = ["1", "2", "3", "4", "5"];

let toNumbers = (arr) => {
  return arr.map((item) => parseInt(item));
};

console.log(toNumbers(numbers));

```
