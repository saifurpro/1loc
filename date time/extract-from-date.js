// Extract year, month, day, hour, minute, second and millisecond from a date

const d = new Date();

function extractDate(date) {
  let d = date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1);

  return `Year: ${d[0]} Month: ${d[1]} Day: ${d[2]} Hour: ${d[3]} Minute: ${d[4]} Second: ${d[5]} Millisecond ${d[6]}`;
}
console.log(extractDate(d)); //Year: 2022 Month: 05 Day: 11 Hour: 03 Minute: 24 Second: 03 Millisecond 587
