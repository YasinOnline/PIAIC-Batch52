// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax. Where the tax amount will be calculated by the amount of bill.

import * as readlineSync from "readline-sync";

function calculateTax(unitsConsumed: number): number {
  let taxRate: number;

  if (unitsConsumed > 500) {
    taxRate = 0.25; // 25% tax
  } else if (unitsConsumed > 200) {
    taxRate = 0.15; // 15% tax
  } else if (unitsConsumed > 100) {
    taxRate = 0.1; // 10% tax
  } else {
    taxRate = 0; // No tax for units consumed <= 100
  }

  return unitsConsumed * taxRate;
}

// Get user input
const unitsConsumed: number = parseFloat(
  readlineSync.question("Enter the number of units consumed: ")
);

// Calculate tax
const taxAmount: number = calculateTax(unitsConsumed);

// Display the result
console.log(
  `The tax amount for ${unitsConsumed} units consumed is: $${taxAmount.toFixed(
    2
  )}`
);
