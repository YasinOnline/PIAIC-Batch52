"use strict";
function convertDays(days) {
    let weeks = Math.floor(days / 7);
    let daysLeft = days % 7;
    console.log(`${weeks} weeks and ${daysLeft} days`);
}
convertDays(17);
convertDays(10);
convertDays(5);
