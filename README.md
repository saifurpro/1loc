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

console.log(toNumbers(numbers)); // [ 1, 2, 3, 4, 5 ]

```

### 8. একটি অ্যারের মধ্যে একই মান কতবার পাওয়া গেছে তা গণনা করা

```
let arr1 = [2, 1, 3, 3, 2, 3, 2, 3, 2];
let arr2 = ["a", "b", "a", "c", "a", "b"];

const countOccurrences = (arr, val) => {
  return arr.filter((item) => {
    return item === val;
  }).length;
};

console.log(countOccurrences(arr1, 2)); // 4
console.log(countOccurrences(arr2, "a")); // 3
```

### 9. একটি অ্যারেকে খালি করে ফেলা

```
let arr = [1, 2, 3, 4, 5];

let empty = (arr) => {
  return (arr.length = 0);
};

console.log(empty(arr)); // 0
```

### 10. একটি অ্যারের মধ্যে সবচেয়ে বড় স্ট্রিংয়ের দৈর্ঘ্য খুঁজে বের করা:

```
let arr = ["Saifur Rahman", "look", "on", "the", "bright", "side", "of", "life"];

let findLongTextFromArray = (arr) => {
  return Math.max(
    ...arr.map((el) => {
      return el.length;
    })
  );
};

console.log(findLongTextFromArray(arr)); // 13
```

### 11. একটি অ্যারের সবচেয়ে বড় আইটেম খুঁজে বের করা

```
let arr = [1, 2, 3, 4, 5, 6, 33, 99, 101, 34];

let findMaxItemFromArray = (arr) => {
  return Math.max(...arr);
};

console.log(findMaxItemFromArray(arr)); // 101
```

### 12. একটি অ্যারের সবচেয়ে ছোট আইটেম খুঁজে বের করা

```
let arr = [21, 2, 3, 4, 5, 6, 33, 99, 101, 34];

let findMinItemFromArray = (arr) => {
  return Math.min(...arr);
};

console.log(findMinItemFromArray(arr)); // 2
```

### 13. বর্ণমালার অক্ষর থেকে অ্যারে তৈরি করা

```
let alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet.split(""));

// OR,
console.log([...alphabet]);

/*
Output:
[
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]
*/
```

### 14. সংখ্যাযুক্ত একটি অ্যারের যোগফল বের করা

```
let arr = [111, 22, 7, 10];

let sumOfArray = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev + curr;
  });
};

console.log(sumOfArray(arr)); // 150
```

### 15. একটি অ্যারের ইউনিক ভ্যালু খুঁজে বের করা

```
let arr1 = [1, 2, 3, 1, 2, 3, 2];

let uniqueArr1 = (arr) => {
  return [...new Set(arr)];
};
console.log(uniqueArr1(arr1)); // [1, 2, 3]

// OR,
let arr2 = [5, 6, 5, 6, 6, 7];
let uniqueArr2 = (arr) => {
  return arr.filter((el, index, array) => {
    return array.indexOf(el) === index;
  });
};
console.log(uniqueArr2(arr2)); // [5, 6, 7];
```

### 16. দুটি অ্যারে মার্জ করা এবং ডুপ্লিকেট আইটেম রিমুভ করা

```
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
```

### 17. একটি অ্যারেতে ডুপ্লিকেট ভ্যালু রিমুভ করা

```
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
```

### 18. একটি অ্যারে থেকে ফলসি ভ্যালু রিমোভ করা

```
let arr = [0, "a string", "", NaN, true, 5, undefined, "another string", false];

let removeFalsy = (arr) => {
  return arr.filter(Boolean);
};
console.log(removeFalsy(arr)); // [ 'a string', true, 5, 'another string' ]
```

### 19. সংখ্যাযুক্ত একটি অ্যারেকে সাজানো

```
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
```

### 20. এ.এম পি.এম যোগ করা

```
function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let hour = hours % 12 < 10 ? "0" + (hours % 12) : hours % 12;

  let minutes = date.getMinutes();
  let minute = minutes < 10 ? "0" + minutes : minutes;

  let seconds = date.getSeconds();
  let second = seconds < 10 ? "0" + seconds : seconds;

  if (hours % 12 === 0) {
    return `12 : ${minute} : ${second} PM`;
  } else if (hours < 12) {
    return `${hour} : ${minute} : ${second} AM`;
  } else if (hours > 12) {
    return `${hour} : ${minute} : ${second} PM`;
  }
}

console.log(showTime());
```

### 21. দুটি তারিখের মধ্যে দিনের পার্থক্য গণনা করা

```
let day1 = new Date("2022-05-04");

let day2 = new Date("2022-05-02");

function differentDays(day1, day2) {
  return Math.ceil(Math.abs(day1 - day2) / (1000 * 60 * 60 * 24));
}

console.log(differentDays(day1, day2)); // 2

```

### 22. দুটি তারিখের মধ্যে মাসের ব্যবধান গণনা করা

```
let differentMonths = (startDate, endDate) => {
  let year = endDate.getFullYear() - startDate.getFullYear();
  let month = startDate.getMonth() + endDate.getMonth();

  return Math.max(year * 12 - month);
};
let date1 = new Date("2020-01-01");
let date2 = new Date("2021-01-01");
console.log(differentMonths(date1, date2)); // 12
```

### 23. একটি তারিখকে YYYY-MM-DD ফর্ম্যাটে রূপান্তর করা

```
let formatDate = (date) => {
  return date.toISOString().slice(0, 10);
};
console.log(formatDate(new Date())); // 2022-05-04
```

### 24. সেকেন্ডকে hh:mm:ss ফরম্যাটে রূপান্তর করা

```
const formatSeconds = function (second) {
  return new Date(second * 1000).toISOString().substr(11, 8);
};

console.log(formatSeconds(60)); // 00:01:00
```

### 25. একটি তারিখ থেকে বছর, মাস, দিন, ঘন্টা, মিনিট, সেকেন্ড এবং মিলিসেকেন্ড বের করা

```

const d = new Date();

function extractDate(date) {
  let d = date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1);

  return `Year: ${d[0]} Month: ${d[1]} Day: ${d[2]} Hour: ${d[3]} Minute: ${d[4]} Second: ${d[5]} Millisecond ${d[6]}`;
}
console.log(extractDate(d)); //Year: 2022 Month: 05 Day: 11 Hour: 03 Minute: 24 Second: 03 Millisecond 587
```

### 26. মাসের নাম বের করা

```
function getMonthName(date) {
let months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
" November",
"December",
];
return months[date.getMonth()];
}
console.log(getMonthName(new Date())); // May

```

### 27. এক বছরে মোট দিনের সংখ্যা বের করা

```
function totalNumberOfDaysInYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} year has 366 days`;
  } else {
    return `${year} year has 365 days`;
  }
}

console.log(totalNumberOfDaysInYear(2017)); // 2017 year has 365 days
console.log(totalNumberOfDaysInYear(2016)); // 2016 year has 366 days
```

### 28. সপ্তাহের আজ কি বার সেটা বাহির করা

```
const getWeekday = (date) => {
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `Today is: ${week[date.getDay()]}`;
};
console.log(getWeekday(new Date())); // Today is: Wednesday
```

### 29. কারেন্ট পেইজ পুনরায় লোড করা

```
const reload = () => location.reload();
```

### 30. স্ক্রল টু টপ

```
const goToTop = () => {
  return window.scrollTo(0, 0);
};
```

### 31. টুগল এলিমেন্ট

```
let heading = document.querySelector(".heading");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  heading.style.display =
    heading.style.display === "none" ? "block" : "none";
});
```
