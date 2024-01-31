"use strict";
/*

Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/
Object.defineProperty(exports, "__esModule", { value: true });
let places = [
    "Saudi Arabia",
    "Singapore",
    "Tokyo",
    "Sydney",
    "Cairo",
];
console.log("Original order of the places:              ", places);
/*
Spread operator and its methods are used to manipulate the content of array without changing the content/order of original array.
The spread operator facilitates three common tasks:
    Copying the elements of one or more arrays into a new array
    Copying the properties of one or more objects into a new object
    Spreading an array when calling a function, where the function only accepts a comma-separated list of arguments
*/
console.log("Sorting array elements without effecting the original content of the array by using spread operators.");
console.log("=====================================================================================================");
let sortedPlaces = [...places].sort();
console.log("Alphabetical order of the places:          ", sortedPlaces);
console.log("Original order of the places:              ", places);
let reverseSortedPlaces = [...places].sort().reverse();
console.log("Reverse alphabetical order of the places:  ", reverseSortedPlaces);
console.log("Original order of the places:              ", places);
// Manipulating the array with its own methods. This will change the actual order of the elements in the array.
console.log("\nSorting the original content of the array by using array reverse() and sort() methods.");
console.log("======================================================================================");
places.reverse();
console.log("Reverse order of the places:               ", places);
places.reverse();
console.log("Original order of the places:              ", places);
places.sort();
console.log("Alphabetical order of the places:          ", places);
places.reverse();
console.log("Reverse order of the places:               ", places);
//# sourceMappingURL=Q18.js.map