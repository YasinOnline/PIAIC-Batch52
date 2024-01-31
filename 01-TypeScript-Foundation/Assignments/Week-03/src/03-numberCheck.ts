// Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.

import * as readlineSync from "readline-sync";

function checkNumberSign(number: number): string {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// Get user input
const userNumber: number = parseFloat(
  readlineSync.question("Enter a number: ")
);

// Determine and display the result
const signResult: string = checkNumberSign(userNumber);
console.log(`The given number is ${signResult}.`);
