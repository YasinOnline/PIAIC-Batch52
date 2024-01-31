"use strict";
/*

Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Version 1: Runs the if block
let alien_color_v1 = "green"; // Choose a color for an alien
if (alien_color_v1 == "green") {
    // If the alien's color is green
    console.log("You just earned 5 points for shooting the alien."); // Print a statement that the player just earned 5 points
}
else {
    // If the alien's color isn't green
    console.log("You just earned 10 points for shooting the alien."); // Print a statement that the player just earned 10 points
}
// Version 2: Runs the else block
let alien_color_v2 = "red"; // Choose a different color for an alien
if (alien_color_v2 == "green") {
    // If the alien's color is green
    console.log("You just earned 5 points for shooting the alien."); // Print a statement that the player just earned 5 points
}
else {
    // If the alien's color isn't green
    console.log("You just earned 10 points for shooting the alien."); // Print a statement that the player just earned 10 points
}
//# sourceMappingURL=Q26.js.map