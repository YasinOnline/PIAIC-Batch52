// Exercise 1:  Write a program that calculates the area of a rectangle.

import * as readlineSync from "readline-sync";

function calculateRectangleArea(length: number, width: number): number {
  return length * width;
}

// Get user input
const length: number = parseFloat(
  readlineSync.question("Enter the length of the rectangle: ")
);
const width: number = parseFloat(
  readlineSync.question("Enter the width of the rectangle: ")
);

// Calculate area
const area: number = calculateRectangleArea(length, width);

// Display the result
console.log(`The area of the rectangle is: ${area.toFixed(2)}`);
