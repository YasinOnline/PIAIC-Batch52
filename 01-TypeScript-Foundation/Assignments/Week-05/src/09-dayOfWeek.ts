// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

import * as readlineSync from "readline-sync";

function getDayOfWeek(dayNumber: number): string {
  if (dayNumber >= 1 && dayNumber <= 7) {
    if (dayNumber === 1) {
      return "Sunday";
    } else if (dayNumber === 2) {
      return "Monday";
    } else if (dayNumber === 3) {
      return "Tuesday";
    } else if (dayNumber === 4) {
      return "Wednesday";
    } else if (dayNumber === 5) {
      return "Thursday";
    } else if (dayNumber === 6) {
      return "Friday";
    } else {
      return "Saturday";
    }
  } else {
    return "Invalid input. Please enter a number between 1 and 7.";
  }
}

// Get user input
const userDayNumber: number = parseInt(
  readlineSync.question(
    "Enter a number (1-7) to represent the day of the week: "
  ),
  10
);

const dayOfWeek: string = getDayOfWeek(userDayNumber);
console.log(`The corresponding day of the week is: ${dayOfWeek}`);
