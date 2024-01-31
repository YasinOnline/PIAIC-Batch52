// Import the necessary libraries
import inquirer from "inquirer"; // Inquirer is used for interactive command line user interfaces

// Define the main function
async function numberGuessing() {
  let score = 0; // Initialize the score to 0
  const rounds = 5; // Set the number of rounds

  // Start a loop that will run for the number of rounds
  for (let i = 0; i < rounds; i++) {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Ask the user to guess the number
    const { guess } = await inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: "Guess a number between 1 and 100:",
        validate: function (value) {
          var valid = !isNaN(parseFloat(value));
          return valid || "Please enter a number";
        },
        filter: Number,
      },
    ]);

    // Check if the user's guess is correct
    if (guess === randomNumber) {
      console.log(`Correct! The number was ${randomNumber}.`);
      score++; // Increment the score
    } else {
      console.log(
        `Sorry, the number was ${randomNumber}. Better luck next time!`
      );
    }
  }

  // Display the final score
  console.log(`Game over! Your score was ${score} out of ${rounds}.`);
}

// Call the main function to start the game
numberGuessing();
