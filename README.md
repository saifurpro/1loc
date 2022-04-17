## Favorite JavaScript Utilities in single line of code! No more!

### একটি ভ্যালু কে অ্যারে তে কনভারর্ট করা

```
let convertArray = (value) => {
  return Array.isArray(value) ? value : [value];
};

console.log(convertArray("Hello")); // [ 'Hello' ]
```

### অ্যারে টি ফাঁকা কি না চেক করা

```
let isEmptyArray = (value) => {
  return Array.isArray(value) && !value.length;
};
console.log(isEmptyArray([])); /* true */
console.log(isEmptyArray([12, 23])); /* false */
```
