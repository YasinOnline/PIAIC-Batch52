"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*

No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.

*/
// Array of usernames
let usernames = ["Admin", "Aamir", "Zara", "Ali", "Fatima", "Bilal"];
// Function to print greetings based on a specific username
function printGreeting(username) {
    if (usernames.length == 0) {
        console.log("We need to find some users!");
    }
    else if (username.toLowerCase() === "admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        for (const username of usernames) {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
// Calling the function with a specific username
const specificUsername = "Bilal";
printGreeting(specificUsername);
// Remove all of the usernames from your array
usernames = [];
console.log("\nThe array is empty now. We need to find some users!");
//# sourceMappingURL=Q31.js.map