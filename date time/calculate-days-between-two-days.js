let day1 = new Date("2022-05-04");

let day2 = new Date("2022-05-02");

function differentDays(day1, day2) {
  return Math.ceil(Math.abs(day1 - day2) / (1000 * 60 * 60 * 24));
}

console.log(differentDays(day1, day2)); // 2
