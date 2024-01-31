/* 

Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

*/

let guests: string[] = [
  "Ebbad Asghar",
  "Malik Mazher Qayyum",
  "Pervaiz Iqbal",
  "Umair Shabbir"
];

// For loop to display invitation for each guest.
for (let guest of guests) {
  console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}
