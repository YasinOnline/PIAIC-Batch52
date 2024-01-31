"use strict";
/*

Unchanged Magicians: Start with your work from Exercise 42 Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Harry Houdini", "David Copperfield", "Dynamo"];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
console.log("Name of Magicians:");
show_magicians(magicians);
function make_great(magicians) {
    return magicians.map((magician) => magician + " the Great");
}
let greatMagicians = make_great([...magicians]); // In TypeScript (and JavaScript), the spread operator (...) is used to create a shallow copy of an array or object. When used with an array, it essentially “spreads” out the elements of the array into a new array. In the context of the code snippet, let greatMagicians = make_great([...magicians]);, the spread operator is used to create a copy of the magicians array. This copy is then passed to the make_great() function. The make_great() function modifies this copy by adding ’ the Great’ to each magician’s name, and then returns the modified array. This returned array is stored in greatMagicians. The key point here is that the original magicians array remains unchanged because we passed a copy of it (not the original array itself) to the make_great() function. This is a common use case for the spread operator - to prevent mutation (In programming, mutation refers to the process of changing the state or content of an object or variable after it has been created) of the original array when you want to apply some transformations to its elements.
console.log("\nName of Great Magicians:");
show_magicians(greatMagicians);
console.log("\nUnchanged Magicians:");
show_magicians(magicians);
/*

In this code:

show_magicians() is a function that prints each name in the list of magicians.
make_great() is a function that modifies a copy of the list of magicians by adding ’ the Great’ to each magician’s name.
We first create a list of magicians and print their names using show_magicians().
Then we create a copy of the list of magicians, modify it using make_great(), and store the result in greatMagicians.
Finally, we print the names in both the original magicians array and the modified greatMagicians array using show_magicians(). The output will be the names of the magicians in the original list, followed by the names in the modified list with ’ the Great’ added to each name. The original list remains unchanged.

*/
//# sourceMappingURL=Q43.js.map