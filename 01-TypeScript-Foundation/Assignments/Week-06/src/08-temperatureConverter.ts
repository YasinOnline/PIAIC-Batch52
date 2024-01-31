// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a for loop to perform the conversion for each temperature.

// Importing prompt-sync library to get user input
import promptSync from "prompt-sync";
const prompt = promptSync();

/* IMPORTANT:
import * as promptSync form 'prompt-sync';  // this is not working in ES6, removed "* as". For details read https://stackoverflow.com/questions/49256040/a-namespace-style-import-cannot-be-called-or-constructed-and-will-cause-a-failu
*/

// This function takes a temperature in Celsius and returns the equivalent in Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
  
  // Use the formula F = (C * 9/5) + 32
  let fahrenheit = (celsius * 9) / 5 + 32;
  
  // Return the result
  return fahrenheit;
}

// Get the input from the user using prompt
let input = prompt(
  "Enter a list of temperatures in Celsius, separated by commas:"
);

// Split the input by commas and parse each element as a number
let celsiusArray = input.split(",").map(Number);

// Initialize an empty array to store the converted temperatures
let fahrenheitArray = [];

// Use a for loop to iterate over the celsius array
for (let i = 0; i < celsiusArray.length; i++) {

  // Get the current element
  let celsius = celsiusArray[i];

  // Check if the element is valid
  if (isNaN(celsius)) {

    // Display an error message
    console.log("Invalid input. Please enter only numbers separated by commas.");

    // Exit the loop
    break;

  } else {

    // Call the celsiusToFahrenheit function with the element
    let fahrenheit = celsiusToFahrenheit(celsius);

    // Push the result to the fahrenheit array
    fahrenheitArray.push(fahrenheit);
  }
}

// Display the output
console.log(
  "The converted temperatures in Fahrenheit are: " + fahrenheitArray.join(", ") + "."
);