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
