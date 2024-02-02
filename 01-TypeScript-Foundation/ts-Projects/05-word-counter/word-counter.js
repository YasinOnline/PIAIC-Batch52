// Import the required module
import inquirer from "inquirer";
// The wordCount function of the program
async function wordCount() {
    // Prompt the user to enter a paragraph
    const { paragraph } = await inquirer.prompt([
        {
            type: "input",
            name: "paragraph",
            message: "Please enter a paragraph:",
        },
    ]);
    // Count the number of words by splitting the paragraph at each space and counting the resulting array elements
    const words = paragraph.split(" ").length;
    // Count the number of characters by removing all whitespaces from the paragraph and counting the rewordCounting characters
    const characters = paragraph.replace(/\s/g, "").length;
    // Print the number of words and characters
    console.log(`The paragraph contains ${words} words and ${characters} characters (excluding whitespaces).`);
}
// Call the wordCount function to start the program
wordCount();
