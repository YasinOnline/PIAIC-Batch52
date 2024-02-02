// Import the required module
import inquirer from "inquirer";
// Define the Question class
class Question {
    question;
    options;
    answer;
    constructor(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }
}
// Define the Quiz class
class Quiz {
    questions;
    score;
    constructor(questions) {
        this.questions = questions;
        this.score = 0;
    }
    // Method to start the quiz
    async start() {
        for (let i = 0; i < this.questions.length; i++) {
            const { answer } = await inquirer.prompt([
                {
                    type: "list",
                    name: "answer",
                    message: this.questions[i].question,
                    choices: this.questions[i].options,
                },
            ]);
            if (answer === this.questions[i].answer) {
                this.score++;
            }
        }
        console.log(`Your score is ${this.score} out of ${this.questions.length}.`);
    }
}
// Define the questions
const questions = [
    new Question("What is the capital of France?", ["Paris", "London", "Berlin", "Madrid"], "Paris"),
    new Question("What is the capital of England?", ["Paris", "London", "Berlin", "Madrid"], "London"),
    new Question("What is the capital of Germany?", ["Paris", "London", "Berlin", "Madrid"], "Berlin"),
];
// Create a new quiz and start it
const quiz = new Quiz(questions);
quiz.start();
