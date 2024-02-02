// Import the required modules
import inquirer from "inquirer";

// Initialize an empty array to store the todo tasks
let todoList: string[] = [];

// The todo function of the program
function todo() {
  // Prompt the user to choose an action
  inquirer
    .prompt([
      {
        type: "list",
        name: "todoOptions",
        message: "What would you like to do?",
        choices: ["Add task", "View tasks", "Complete task", "Exit"],
      },
    ])
    .then((answers) => {
      // Perform the chosen action
      switch (answers.todoOptions) {
        case "Add task":
          addTask();
          break;
        case "View tasks":
          viewTasks();
          break;
        case "Complete task":
          completeTask();
          break;
        default:
          process.exit();
      }
    });
}

// Function to add a task
function addTask() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "task",
        message: "Enter a task:",
      },
    ])
    .then((answers) => {
      // Add the task to the todo list
      todoList.push(answers.task);
      // Go back to the todo menu
      todo();
    });
}

// Function to view all tasks
function viewTasks() {
  // Print each task with its index
  todoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
  // Go back to the todo menu
  todo();
}

// Function to mark a task as completed
function completeTask() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "taskNumber",
        message: "Enter the number of the task you have completed:",
      },
    ])
    .then((answers) => {
      // Remove the task from the todo list
      const taskIndex = Number(answers.taskNumber) - 1;
      if (taskIndex < todoList.length && taskIndex >= 0) {
        todoList.splice(taskIndex, 1);
      }
      // Go back to the todo menu
      todo();
    });
}

// Call the todo function to start the program
todo();
