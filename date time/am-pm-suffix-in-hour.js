function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let hour = hours % 12 < 10 ? "0" + (hours % 12) : hours % 12;

  let minutes = date.getMinutes();
  let minute = minutes < 10 ? "0" + minutes : minutes;

  let seconds = date.getSeconds();
  let second = seconds < 10 ? "0" + seconds : seconds;

  if (hours % 12 === 0) {
    return `12 : ${minute} : ${second} PM`;
  } else if (hours < 12) {
    return `${hour} : ${minute} : ${second} AM`;
  } else if (hours > 12) {
    return `${hour} : ${minute} : ${second} PM`;
  }
}

console.log(showTime());
