// 1. Create a variable named "name" and assign it a string.
let name: string = "PIAIC";

// 2. Write a function that takes two numbers as parameters and return their sum.

function doSum(num1: number, num2: number) {
  let result = num1 + num2;
  console.log(result);
}
doSum(3, 5);

// 3. Even and Odd Check: Implement a conditional statement to check if a given number is even or odd.
let checkNumber: number = 10;
if (checkNumber / 2) {
  console.log(`${checkNumber} is an even number`);
} else {
  console.log(`${checkNumber} is an odd number`);
}

// 4. String Concatenation
function joinString(a: string, b: string) {
  let newString: string = a + " " + b;
  console.log(newString);
}
joinString("Jahanzaib", "Tayyab");

// 5. Rectangle Area Calculation: area = width * height
function areaCal(width: number, height: number) {
  let result = width * height;
  return result;
}
let area = areaCal(5, 3);
console.log(area);

// 6. Palindrome Check: Write a function to check if a given string is a palindrome. Consider reversing the string and comparing it with the original.

// 7. Book Object: Define an object representing a book with properties like title and author.
let book = {
  title: "TypeScript Basic",
  author: "Book is under development",
};

// 8. Display Book Details Method: Add a method to the book object to display its details. You can use string formatting to present the information neatly.
console.log(book);
console.log(book.author);

// 9. Person Object: Create an object representing a person with properties for name, age, and address.
let person = {
  name: "Yasin",
  age: 55,
  address: "Lahore",
};
console.log(person);

// 10. Fruits Array and Loop: Declare an array of fruits and print each one using a loop. You can use a for loop to iterate through the array.
let fruits: string[] = ["Apple", "Banana", "Mango", "Cheery", "Peach"];
for (let fruit of fruits) {
  console.log(fruit);
}

// 11. Average of Numbers in Array: Write a function to find the average value of numbers in an array. Sum the elements and divide by the length of the array.
function average(array: number[]): number {
  let sum = array.reduce((a, b) => a + b, 0); // reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.

  return sum / array.length;
}
let avg: number = average([2, 3, 4, 5, 6]);
console.log("Average of the numbers: ", avg);

// 12. Concatenate Arrays: Concatenate two arrays without modifying the original arrays. You can use the + operator for concatenation.

let array1 = [10, "aba", 3, 5, "jsd"];
let array2 = [34, 56, 23, 55, "tywed"];
console.log("Concatenation of array: ", array1.concat(array2));

// 13. Filter Even Numbers: Use the filter method to get an array of even numbers from a given array. Utilize a lambda function as the filtering condition.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num % 2 == 0);
console.log("Even numbers in the array: ", filteredNumbers);

// 14. Transform Words to Lengths: Transform an array of words into a new array with the lengths of each word. The map function might be useful here.

export {};
