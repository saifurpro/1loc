let differentMonths = (startDate, endDate) => {
  let year = endDate.getFullYear() - startDate.getFullYear();
  let month = startDate.getMonth() + endDate.getMonth();

  return Math.max(year * 12 - month);
};
let date1 = new Date("2020-01-01");
let date2 = new Date("2021-01-01");
console.log(differentMonths(date1, date2)); // 12
