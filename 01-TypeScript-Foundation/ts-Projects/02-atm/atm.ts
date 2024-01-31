// This code will allow the user to access ATM functionalities after entering a valid user id and pin. All user data is generated randomly.

import inquirer from "inquirer";

// Define a User class
class User {
  id: string;
  pin: string;
  balance: number;

  constructor(id: string, pin: string, balance: number) {
    this.id = id;
    this.pin = pin;
    this.balance = balance;
  }
}

// Create a single user
let user = new User("user123", "1234", 150000); // User with id "user123", pin "1234", and balance 150000

async function atm() {
  // Ask the user for their id and pin
  const { id, pin } = await inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Enter your user id:",
    },
    {
      type: "password",
      name: "pin",
      message: "Enter your pin:",
    },
  ]);

  // Check if the entered id and pin match the user's id and pin
  if (id === user.id && pin === user.pin) {
    let exit = false;
    while (!exit) {
      const { operation } = await inquirer.prompt([
        {
          type: "list",
          name: "operation",
          message: "Choose an operation:",
          choices: ["Check Balance", "Deposit Money", "Withdraw Money", "Exit"],
        },
      ]);

      switch (operation) {
        case "Check Balance":
          console.log(`Your current balance is ${user.balance}.`);
          break;
        case "Deposit Money":
          const { deposit } = await inquirer.prompt([
            {
              type: "input",
              name: "deposit",
              message: "Enter the amount to deposit:",
              validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || "Please enter a number";
              },
              filter: Number,
            },
          ]);
          user.balance += deposit;
          console.log(
            `Deposit successful. Your new balance is ${user.balance}.`
          );
          break;
        case "Withdraw Money":
          const { withdrawal } = await inquirer.prompt([
            {
              type: "input",
              name: "withdrawal",
              message: "Enter the amount to withdraw:",
              validate: function (value) {
                var valid = !isNaN(parseFloat(value));
                return valid || "Please enter a number";
              },
              filter: Number,
            },
          ]);
          if (withdrawal <= user.balance) {
            user.balance -= withdrawal;
            console.log(
              `Withdrawal successful. Your new balance is ${user.balance}.`
            );
          } else {
            console.log("Insufficient balance.");
          }
          break;
        case "Exit":
          exit = true;
          break;
      }
    }
  } else {
    console.log("Invalid id or pin.");
  }
}

atm();
