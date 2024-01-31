// Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.

import * as readlineSync from "readline-sync";

function checkVotingEligibility(age: number): string {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}

// Get user input
const userAge: number = parseInt(readlineSync.question("Enter your age: "), 10);

// Determine and display the result
const eligibilityResult: string = checkVotingEligibility(userAge);
console.log(`You are ${eligibilityResult}.`);
