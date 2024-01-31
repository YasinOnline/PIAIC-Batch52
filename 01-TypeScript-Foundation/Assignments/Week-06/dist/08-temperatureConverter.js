"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}
let input = prompt("Enter a list of temperatures in Celsius, separated by commas:");
let celsiusArray = input.split(",").map(Number);
let fahrenheitArray = [];
for (let i = 0; i < celsiusArray.length; i++) {
    let celsius = celsiusArray[i];
    if (isNaN(celsius)) {
        console.log("Invalid input. Please enter only numbers separated by commas.");
        break;
    }
    else {
        let fahrenheit = celsiusToFahrenheit(celsius);
        fahrenheitArray.push(fahrenheit);
    }
}
console.log("The converted temperatures in Fahrenheit are: " + fahrenheitArray.join(", ") + ".");
