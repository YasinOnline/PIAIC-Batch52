"use strict";
/*

Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


*/
Object.defineProperty(exports, "__esModule", { value: true });
let names = [
    "Asim Ali Pasha",
    "Ebbad Asghar",
    "Hussain Ahmad Faraz",
    "Malik Mazher Qayyum",
    "Muhammad Anwar",
    "Pervaiz Iqbal",
    "Aizaz Ahmed Khan",
    "Syed Husnain Ali",
    "Umair Shabbir",
];
// Printing personalized greeting message for every person in the [names] array.
for (let name of names) {
    console.log(`Assalam-o-Alaikum ${name}, nice to meet you!`);
}
//# sourceMappingURL=Q12.js.map