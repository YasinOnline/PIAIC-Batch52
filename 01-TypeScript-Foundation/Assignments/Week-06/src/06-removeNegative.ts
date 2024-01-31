// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let numbers: number[] = [5, -3, 8, -2, 10, -7, 4, -1];

// Using filter to remove negative numbers
numbers = numbers.filter((number) => number >= 0);

// Display the modified array
console.log("Array after removing negative numbers:", numbers);
