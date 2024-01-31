"use strict";
/*

Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

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
magicians = make_great(magicians);
console.log("\nName of Great Magicians:");
show_magicians(magicians);
/*

In this code:

show_magicians() is a function that prints each name in the list of magicians.
make_great() is a function that modifies the list of magicians by adding ’ the Great’ to each magician’s name.
We first create a list of magicians and print their names using show_magicians().
Then we modify the list of magicians using make_great() and print the modified names using show_magicians(). The output will be the names of the magicians with ’ the Great’ added to each name.

*/
//# sourceMappingURL=Q42.js.map