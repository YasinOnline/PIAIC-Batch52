// Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return the sum of all the numbers in the array.

// This function takes an array of numbers as parameter and returns the sum of all the numbers in the array

function sumArray(array: number[]): number {
  // Initialize the sum variable as 0
  let sum = 0;

  // Use a for loop to iterate over the array
  for (let i = 0; i < array.length; i++) {
    // Add the current element to the sum at each iteration
    sum = sum + array[i];
  }

  // Return the final sum
  return sum;
}
