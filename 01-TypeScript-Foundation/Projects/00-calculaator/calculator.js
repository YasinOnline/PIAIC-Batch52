// Import the necessary libraries
import inquirer from "inquirer";
import chalk from "chalk";
// Ask the user for the numbers they want to operate on
const { num1, num2 } = await inquirer.prompt([
    {
        type: "input",
        name: "num1",
        message: "Enter the first number:",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || "Please enter a number";
        },
        filter: Number,
    },
    {
        type: "input",
        name: "num2",
        message: "Enter the second number:",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || "Please enter a number";
        },
        filter: Number,
    },
]);
// Define the calculator function
async function calculator() {
    // Ask the user for the operation they want to perform
    const { operation } = await inquirer.prompt([
        {
            type: "list",
            name: "operation",
            message: "Which operation would you like to perform?",
            choices: ["Add", "Subtract", "Multiply", "Divide"],
        },
    ]);
    // Perform the operation on the numbers
    let result;
    switch (operation) {
        case "Add":
            result = num1 + num2; // Perform addition
            break;
        case "Subtract":
            result = num1 - num2; // Perform subtraction
            break;
        case "Multiply":
            result = num1 * num2; // Perform multiplication
            break;
        case "Divide":
            if (num2 !== 0) {
                result = num1 / num2; // Perform division if the second number is not zero
            }
            else {
                console.log(chalk.red("Error: Division by zero is not allowed.")); // Print an error message if the second number is zero
                return;
            }
            break;
    }
    // Display the result of the operation
    console.log(`The result of ${operation} ${num1} and ${num2} is: `, chalk.green(result));
}
// Call the main function to start the program
calculator();
