// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

import * as readlineSync from "readline-sync";

function checkNumber(divisible: number): string {
  if (divisible % 3 == 0 && divisible % 5 == 0) {
    return "This number is divisible by both (3 and 5)";
  } else if (divisible % 3 == 0) {
    return "This number is divisible by 3";
  } else if (divisible % 5 == 0) {
    return "This number is divisible by 5";
  } else {
    return "This number is neither divisible by 3 nor divisible by 5.";
  }
}

// Get user input
const userDivisibleNumber: number = parseFloat(
  readlineSync.question("Enter a number to check divisibility: ")
);

const divisibleOrNot: string = checkNumber(userDivisibleNumber);
console.log(divisibleOrNot);
