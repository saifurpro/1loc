let formatDate = (date) => {
  return date.toISOString().slice(0, 10);
};
console.log(formatDate(new Date())); // 2022-05-04
