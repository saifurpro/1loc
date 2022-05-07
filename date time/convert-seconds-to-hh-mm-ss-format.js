const formatSeconds = function (second) {
  return new Date(second * 1000).toISOString().substr(11, 8);
};

console.log(formatSeconds(60)); // 00:01:00
