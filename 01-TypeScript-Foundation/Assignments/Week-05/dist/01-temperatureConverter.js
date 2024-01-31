"use strict";
function convertTemperature(value, scale) {
    if (scale.toLowerCase() === "c") {
        return (value * 9) / 5 + 32;
    }
    else if (scale.toLowerCase() === "f") {
        return ((value - 32) * 5) / 9;
    }
    else {
        console.log('Invalid temperature scale. Please use "C" for Celsius or "F" for Fahrenheit');
        return NaN;
    }
}
let inputTemperature = 25;
let inputScale = "C";
let convertedTemperature = convertTemperature(inputTemperature, inputScale);
if (!isNaN(convertedTemperature)) {
    console.log(`${inputTemperature} ${inputScale} is ${convertedTemperature.toFixed(2)} ${inputScale === "C" ? "Fahrenheit" : "Celsius"}.`);
}
