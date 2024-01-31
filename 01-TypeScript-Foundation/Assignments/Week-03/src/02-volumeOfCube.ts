// Exercise 2: Write a program that takes input and calculates the volume of a cube.

import * as readlineSync from "readline-sync";

function calculateCubeVolume(sideLength: number): number {
  return Math.pow(sideLength, 3);
}

// Get user input
const sideLength: number = parseFloat(
  readlineSync.question("Enter the side length of the cube: ")
);

// Calculate volume
const volume: number = calculateCubeVolume(sideLength);

// Display the result
console.log(
  `The volume of the cube with side length ${sideLength} is: ${volume.toFixed(
    2
  )}`
);
