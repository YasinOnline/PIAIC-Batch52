// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

// Define function for temperature conversion
function convertTemperature(value: number, scale: string) {
  if (scale.toLowerCase() === "c") {
    // Convert Celsius to Fahrenheit
    return (value * 9) / 5 + 32;
  } else if (scale.toLowerCase() === "f") {
    // Convert Fahrenheit to Celsius
    return ((value - 32) * 5) / 9;
  } else {
    // Invalid scale
    console.log(
      'Invalid temperature scale. Please use "C" for Celsius or "F" for Fahrenheit'
    );
    return NaN;
  }
}

// Assigning function parameters
let inputTemperature: number = 25;
let inputScale: string = "C"; // 'C' for Celsius, 'F' for Fahrenheit

// Calling the function
let convertedTemperature: number = convertTemperature(
  inputTemperature,
  inputScale
);

// Showing the converted temperature output.
if (!isNaN(convertedTemperature)) {
  console.log(
    `${inputTemperature} ${inputScale} is ${convertedTemperature.toFixed(2)} ${
      inputScale === "C" ? "Fahrenheit" : "Celsius"
    }.`
  );
}
