"use strict";
/*

Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

*/
Object.defineProperty(exports, "__esModule", { value: true });
let guests = [
    "Ebbad Asghar",
    "Malik Mazher Qayyum",
    "Asim Ali Pasha",
    "Hussain Ahmad Faraz",
    "Muhammad Anwar",
    "Pervaiz Iqbal",
    "Aizaz Ahmad Khan",
    "Syed Husnain Ali",
    "Umair Shabbir"
];
console.log("I just found out that my new dinner table won't arrive in time, and I have space only for two guests.\n");
// The while loop is another type of loop that checks for a specified condition before beginning to execute the block of statements.
// The loop runs until the condition value is met.
while (guests.length > 2) {
    let removeGuest = guests.pop();
    console.log(`Dear ${removeGuest}, I'm sorry, I can't invite you to dinner.`);
}
console.log("\nNew list of Guest:");
guests.forEach((guest) => console.log(`Dear ${guest}, you are still invited.`));
guests.length = 0;
console.log("\nThe dinner party has been ended, no any guest left now. This is recent guests' list: ", guests);
//# sourceMappingURL=Q17.js.map