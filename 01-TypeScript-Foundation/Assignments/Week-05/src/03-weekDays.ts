// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

function convertDays(days: number) {
  // Divide the days by 7 and round down to get the number of weeks
  let weeks = Math.floor(days / 7);

  // Get the remainder of the division to get the number of days
  let daysLeft = days % 7;

  // Print weeks and days in console
  console.log(`${weeks} weeks and ${daysLeft} days`);
}

convertDays(17);
convertDays(10);
convertDays(5);
