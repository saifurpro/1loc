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
