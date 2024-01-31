// Write a program that checks if the given year is leap year or not.

import * as readlineSync from "readline-sync";

function isLeapYear(year: number): boolean {
  // Leap years are divisible by 4, but not divisible by 100 unless divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Get user input
const userYear: number = parseInt(readlineSync.question("Enter a year: "), 10);

if (isLeapYear(userYear)) {
  console.log(`${userYear} is a leap year.`);
} else {
  console.log(`${userYear} is not a leap year.`);
}
