let arr = [0, "a string", "", NaN, true, 5, undefined, "another string", false];

let removeFalsy = (arr) => {
  return arr.filter(Boolean);
};
console.log(removeFalsy(arr)); // [ 'a string', true, 5, 'another string' ]
