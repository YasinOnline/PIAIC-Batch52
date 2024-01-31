"use strict";
/*

Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array of usernames
const usernames = [
    "Admin",
    "Aamir",
    "Zara",
    "Ali",
    "Fatima",
    "Bilal",
];
// Function to print greetings based on a specific username
function printGreeting(username) {
    if (username.toLowerCase() === "admin") {
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
//# sourceMappingURL=Q30.js.map