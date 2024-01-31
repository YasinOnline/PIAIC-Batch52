// Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.

// Importing prompt-sync library to get user input
import promptSync from "prompt-sync";
const prompt = promptSync();

/* IMPORTANT:
import * as promptSync form 'prompt-sync';  // this is not working in ES6, removed "* as". For details read https://stackoverflow.com/questions/49256040/a-namespace-style-import-cannot-be-called-or-constructed-and-will-cause-a-failu
*/

// A function that takes a positive integer n and returns n!
function factorial(n: number): number {
  // Initialize the result variable as 1
  let result = 1;
  // Use a for loop to iterate from 1 to n
  for (let i = 1; i <= n; i++) {
    // Multiply the result by i at each iteration
    result = result * i;
  }
  // Return the final result
  return result;
}

// Get the input from the user using prompt
let inputNumber = prompt("Enter a positive integer:");
// Parse the input as a number
let num = Number(inputNumber);
// Check if the input is valid
if (isNaN(num) || num < 0) {
  // Display an error message
  console.log("Invalid input. Please enter a positive integer.");
} else {
  // Call the factorial function with the input
  let output = factorial(num);
  // Display the output
  console.log("The factorial of " + num + " is " + output + ".");
}
