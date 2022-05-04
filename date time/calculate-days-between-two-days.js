let today = new Date();

let thatDay = new Date("2022-05-03");

function differentDays(today, thatDay) {
  return Math.ceil(Math.abs(today - thatDay) / (1000 * 60 * 60 * 24));
}

console.log(differentDays(today, thatDay)); // 2
