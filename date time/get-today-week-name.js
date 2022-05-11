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
