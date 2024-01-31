/* 

Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.

*/

let guests: string[] = [
  "Ebbad Asghar",
  "Malik Mazher Qayyum",
  "Pervaiz Iqbal",
  "Umair Shabbir",
];

// Message for the guest, who can't join the invitation.
console.log(`${guests[3]} can't join us.`);

// Adding new guest in the guest list
guests[3] = "Syed Husnain Ali";

// Printing second set of the invitation messages.
for (let guest of guests) {
  console.log(`Dear ${guest}, I would like to invite you to dinner.`);
}
