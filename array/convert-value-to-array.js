let convertArray = (value) => {
  return Array.isArray(value) ? value : [value];
};

console.log(convertArray("Hello")); // [ 'Hello' ]
