"use strict";
/*

More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.

*/
Object.defineProperty(exports, "__esModule", { value: true });
let guests = [
    "Ebbad Asghar",
    "Malik Mazher Qayyum",
    "Pervaiz Iqbal",
    "Umair Shabbir",
];
console.log("I just found a bigger dining table. I would like invite you to the dinner.\n"); // \n add an empty line to give a space for new invitation list.
guests.unshift("Syed Husnain Ali"); // The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array..
guests.splice(guests.length / 2, 0, "Muhammad Anwar"); // The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements and returns a new array.
guests.push("Syed Husnain Ali"); // The push() method adds one or more elements to the end of the array and returns the new length array after adding elements.
console.log("New Guests List:");
// forEach loop and arrow function is used to display the name of guests.
guests.forEach((guest) => console.log(`${guest}`));
//# sourceMappingURL=Q16.js.map