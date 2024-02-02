// Import the required module
import inquirer from "inquirer";

// Define the Student class
class Student {
  // Static variable to generate unique ID for each student
  private static idSeed = 10000;

  // Properties of the Student class
  private id: number;
  private name: string;
  private courses: string[] = [];
  private balance: number = 0;

  // Constructor of the Student class
  constructor(name: string) {
    this.name = name;
    this.id = Student.idSeed++;
  }

  // Method to enroll a student in a course
  public enroll(course: string) {
    this.courses.push(course);
    this.balance += 600; // Assume each course costs 600
  }

  // Method to view the balance of a student
  public viewBalance() {
    console.log(`Your balance is $${this.balance}`);
  }

  // Method to pay the tuition fees
  public payTuition(amount: number) {
    this.balance -= amount;
  }

  // Method to show the status of a student
  public showStatus() {
    console.log(`Name: ${this.name}`);
    console.log(`ID: ${this.id}`);
    console.log(`Courses Enrolled: ${this.courses.join(", ")}`);
    console.log(`Balance: $${this.balance}`);
  }
}

// Array to store all the students
let students: Student[] = [];

// The studentManagementSystem function of the program
async function studentManagementSystem() {
  // Prompt the user to choose an operation
  const { operation } = await inquirer.prompt([
    {
      type: "list",
      name: "operation",
      message: "What would you like to do?",
      choices: [
        "Add Student",
        "Enroll Student in Course",
        "View Balance",
        "Pay Tuition",
        "Show Status",
        "Exit",
      ],
    },
  ]);

  // Perform the chosen operation
  switch (operation) {
    case "Add Student":
      const { name } = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "Enter the name of the student:",
        },
      ]);
      students.push(new Student(name));
      break;
    case "Enroll Student in Course":
      const { studentIndex, course } = await inquirer.prompt([
        {
          type: "list",
          name: "studentIndex",
          message: "Select a student:",
          choices: students.map((student, index) => ({
            name: student["name"],
            value: index,
          })),
        },
        {
          type: "input",
          name: "course",
          message: "Enter the course name:",
        },
      ]);
      students[studentIndex].enroll(course);
      break;
    case "View Balance":
      const { studentIndexForBalance } = await inquirer.prompt([
        {
          type: "list",
          name: "studentIndexForBalance",
          message: "Select a student:",
          choices: students.map((student, index) => ({
            name: student["name"],
            value: index,
          })),
        },
      ]);
      students[studentIndexForBalance].viewBalance();
      break;
    case "Pay Tuition":
      const { studentIndexForPayment, amount } = await inquirer.prompt([
        {
          type: "list",
          name: "studentIndexForPayment",
          message: "Select a student:",
          choices: students.map((student, index) => ({
            name: student["name"],
            value: index,
          })),
        },
        {
          type: "input",
          name: "amount",
          message: "Enter the amount to pay:",
        },
      ]);
      students[studentIndexForPayment].payTuition(parseInt(amount));
      break;
    case "Show Status":
      const { studentIndexForStatus } = await inquirer.prompt([
        {
          type: "list",
          name: "studentIndexForStatus",
          message: "Select a student:",
          choices: students.map((student, index) => ({
            name: student["name"],
            value: index,
          })),
        },
      ]);
      students[studentIndexForStatus].showStatus();
      break;
    default:
      process.exit();
  }

  // Call the studentManagementSystem function again to continue the loop
  studentManagementSystem();
}

// Call the studentManagementSystem function to start the program
studentManagementSystem();
