// Exercise 4:   Write a program that checks if a given number is even or odd.

import * as readlineSync from "readline-sync";

function checkEvenOrOdd(number: number): string {
  return number % 2 === 0 ? "Even" : "Odd";
}

// Get user input
const userNumber: number = parseInt(
  readlineSync.question("Enter a number: "),
  10
);

// Determine and display the result
const evenOrOddResult: string = checkEvenOrOdd(userNumber);
console.log(`The given number is ${evenOrOddResult}.`);
