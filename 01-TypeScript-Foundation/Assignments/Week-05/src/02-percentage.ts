// Write a program that calculates the percentage.

// This function takes a number and a percentage as parameters and returns the percentage of the number
function percentageOf(number: number, percentage: number): number {
  // Divide the percentage by 100 and multiply it by the number
  return (percentage / 100) * number;
}

// Calling of "percentageOf()" function
console.log(percentageOf(120, 50)); // 60
console.log(percentageOf(200, 10)); // 20
console.log(percentageOf(600, 33.333)); // 199.998
