let arr = [
  "Saifur Rahman",
  "look",
  "on",
  "the",
  "bright",
  "side",
  "of",
  "life",
];

let findLongTextFromArray = (arr) => {
  return Math.max(
    ...arr.map((el) => {
      return el.length;
    })
  );
};

console.log(findLongTextFromArray(arr));
