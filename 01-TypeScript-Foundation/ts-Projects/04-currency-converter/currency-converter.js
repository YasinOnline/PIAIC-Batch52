// Import the required modules
import inquirer from "inquirer";
import axios from "axios";
// The main function of the program
async function main() {
    // Prompt the user to enter the amount and the currencies
    const { amount, from, to } = await inquirer.prompt([
        {
            type: "input",
            name: "amount",
            message: "Enter the amount you want to convert:",
        },
        {
            type: "input",
            name: "from",
            message: "Enter the currency code you want to convert from:",
        },
        {
            type: "input",
            name: "to",
            message: "Enter the currency code you want to convert to:",
        },
    ]);
    // Make a request to the exchange rate API to get the conversion rate
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const rate = response.data.rates[to];
    // Calculate and print the converted amount
    console.log(`${amount} ${from} = ${amount * rate} ${to}`);
}
// Call the main function to start the program
main();
