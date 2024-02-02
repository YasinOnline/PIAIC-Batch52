/* // Import the required module
import inquirer from "inquirer";

// Function to start the countdown
async function startCountdown() {
  // Prompt the user to enter the number of seconds
  const { seconds } = await inquirer.prompt([
    {
      type: "input",
      name: "seconds",
      message: "Enter the number of seconds for the countdown:",
    },
  ]);

  // Print the starting time
  console.log(`Starting countdown from ${seconds} seconds.`);

  // Start the interval
  const interval = setInterval(() => {
    // Decrement the seconds
    seconds--;

    // Check if the countdown is finished
    if (seconds < 0) {
      // Clear the interval
      clearInterval(interval);

      // Print the final message
      console.log("Countdown finished!");
    } else {
      // Print the remaining time
      console.log(`${seconds} seconds remaining.`);
    }
  }, 1000);
}

// Call the function to start the countdown
startCountdown();
 */
// Import the required module
import inquirer from "inquirer";
// Function to start the countdown
async function startCountdown() {
    // Prompt the user to enter the number of seconds
    let { seconds } = await inquirer.prompt([
        {
            type: "input",
            name: "seconds",
            message: "Enter the number of seconds for the countdown:",
        },
    ]);
    // Print the starting time
    console.log(`Starting countdown from ${seconds} seconds.`);
    // Start the interval
    const interval = setInterval(() => {
        // Decrement the seconds
        seconds--;
        // Check if the countdown is finished
        if (seconds < 0) {
            // Clear the interval
            clearInterval(interval);
            // Print the final message
            console.log("Countdown finished!");
        }
        else {
            // Print the remaining time
            console.log(`${seconds} seconds remaining.`);
        }
    }, 1000);
}
// Call the function to start the countdown
startCountdown();
