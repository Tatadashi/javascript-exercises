const convertToCelsius = function(fahrenheitNum = 32) {
  let celsiusNum = (fahrenheitNum - 32) * (5 / 9);
  celsiusNum = Math.round(celsiusNum * 10) / 10;

  return celsiusNum;
};

const convertToFahrenheit = function(celsiusNum = 0) {
  let fahrenheitNum = (celsiusNum * (9 / 5)) + 32;
  fahrenheitNum = Math.round(fahrenheitNum * 10) / 10;

  return fahrenheitNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
