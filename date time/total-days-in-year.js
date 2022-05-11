function totalNumberOfDaysInYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} year has 366 days`;
  } else {
    return `${year} year has 365 days`;
  }
}

console.log(totalNumberOfDaysInYear(2017)); // 2017 year has 365 days
console.log(totalNumberOfDaysInYear(2016)); // 2016 year has 366 days
