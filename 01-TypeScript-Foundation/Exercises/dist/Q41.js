"use strict";
/*

Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

*/
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = [
    "David Copperfield",
    "Harry Houdini",
    "Penn & Teller",
];
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicians);
//# sourceMappingURL=Q41.js.map