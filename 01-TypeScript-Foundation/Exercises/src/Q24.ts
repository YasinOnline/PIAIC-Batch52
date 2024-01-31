/* 

More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array

*/

let name: string = "Ali";
console.log("Is name == 'Ali'? I predict True.");
console.log(name == "Ali");

console.log("Is name == 'Zara'? I predict False.");
console.log(name == "Zara");

console.log("Is name.toLowerCase() == 'ali'? I predict True.");
console.log(name.toLowerCase() == "ali");

console.log("Is name.toLowerCase() == 'zara'? I predict False.");
console.log(name.toLowerCase() == "zara");

let age: number = 25;
console.log("Is age == 25? I predict True.");
console.log(age == 25);

console.log("Is age == 30? I predict False.");
console.log(age == 30);

console.log("Is age > 20? I predict True.");
console.log(age > 20);

console.log("Is age > 30? I predict False.");
console.log(age > 30);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age >= 30? I predict False.");
console.log(age >= 30);

console.log("Is age < 30? I predict True.");
console.log(age < 30);

console.log("Is age < 20? I predict False.");
console.log(age < 20);

console.log("Is age <= 25? I predict True.");
console.log(age <= 25);

console.log("Is age <= 20? I predict False.");
console.log(age <= 20);

console.log("Is name == 'Ali' and age == 25? I predict True.");
console.log(name == "Ali" && age == 25);

console.log("Is name == 'Ali' and age == 30? I predict False.");
console.log(name == "Ali" && age == 30);

console.log("Is name == 'Ali' or age == 25? I predict True.");
console.log(name == "Ali" || age == 25);

console.log("Is name == 'Zara' or age == 30? I predict False.");
console.log(name == "Zara" || age == 30);

let fruits: string[] = ["apple", "banana", "orange"];
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes("apple"));

console.log("Is 'mango' in fruits? I predict False.");
console.log(fruits.includes("mango"));

console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits.includes("apple"));

console.log("Is 'mango' not in fruits? I predict True.");
console.log(!fruits.includes("mango"));

// Each console.log statement will print the prediction and the actual result of the comparison. The == operator checks if the two values are equal, while the > and < operators check if one value is greater than or less than the other, respectively. The >= and <= operators check if one value is greater than or equal to or less than or equal to the other, respectively. The && and || operators check if both or either of the conditions are true, respectively. The includes method checks if an item is in an array, while the ! operator negates the result. The results should match the predictions if the conditions are correctly understood.
