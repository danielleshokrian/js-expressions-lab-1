const fahrenheitValues = [32, 70, 80, 72, 68, 75, 82, 65, 77, 78, 73, 79, 71, 74, 76]
const celsiusValues = [25, 18, 15, 28, 20, 23, 30, 22, 26, 24, 21, 27, 19, 17, 29]

let sumCelsius = 0;
let countCelsius = 0;

for (let i = 0; i < fahrenheitValues.length; i++) {
  const c = (fahrenheitValues[i] - 32) * 5 / 9;
  sumCelsius += c;
  countCelsius++;
}

for (let i = 0; i < celsiusValues.length; i++) {
  sumCelsius += celsiusValues[i];
  countCelsius++;
}

const avgCelsius = sumCelsius / countCelsius;
const avgFahrenheit = (avgCelsius * 9 / 5) + 32;

console.log("Average Temperature in Celsius:", avgCelsius);
console.log("Average Temperature in Fahrenheit:", avgFahrenheit);