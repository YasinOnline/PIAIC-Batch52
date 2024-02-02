// Define a "Customer" class to store customer information:
class Customer {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  mobileNumber: string;

  // Initialize customer details in the constructor
  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    mobileNumber: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.mobileNumber = mobileNumber;
  }
}

// Define an interface "BankAccount" that specifies methods for bank accounts:
interface BankAccount {
  accountNumber: string;
  balance: number;
  customer: Customer;
  debit(amount: number): void;
  credit(amount: number): void;
  getBalance(): number;
}

// Implement the "BankAccount" interface in the "BankAccount" class:
class BankAccount implements BankAccount {
  accountNumber: string;
  balance: number;
  customer: Customer;

  // Initialize account details in the constructor, including optional initial balance
  constructor(accountNumber: string, customer: Customer, initialBalance = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.customer = customer;
  }

  // Debit money from the account, checking for sufficient funds
  debit(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `${this.customer.firstName} ${this.customer.lastName} debited $${amount}. New balance: $${this.balance}`
      );
    } else {
      console.log("Insufficient balance. Transaction cancelled.");
    }
  }

  // Deposit money into the account, applying a $1 fee for deposits over $100
  credit(amount: number): void {
    if (amount > 100) {
      amount -= 1; // Deduct $1 fee for credit over $100
    }
    this.balance += amount;
    console.log(
      `${this.customer.firstName} ${this.customer.lastName} credited $${amount}. New balance: $${this.balance}`
    );
  }

  // Get the current account balance
  getBalance(): number {
    return this.balance;
  }
}

// Create sample customer data:
let customers: Customer[] = [
  new Customer("Zia", "Khan", "male", 30, "1234567890"),
  new Customer("Hira", "Khan", "female", 25, "0987654321"),
];

// Create sample bank account data with initial balances:
let accounts: BankAccount[] = [
  new BankAccount("1234567890", customers[0], 500),
  new BankAccount("0987654321", customers[1], 200),
];

// Function to display account information for a specific account:
function showAccountInfo(account: BankAccount) {
  console.log(
    `Account Holder: ${account.customer.firstName} ${account.customer.lastName}`
  );
  console.log(`Account Number: ${account.accountNumber}`);
  console.log(`Balance: $${account.getBalance()}`);
}

// myBankApp function to simulate transactions:
function myBankApp() {
  // Display initial account information for all accounts
  for (const account of accounts) {
    showAccountInfo(account);
  }

  // Simulate a $200 debit on John Doe's account
  accounts[0].debit(200);

  // Simulate a $150 credit on Jane Smith's account, applying the $1 fee
  accounts[1].credit(150);

  // Display updated account information for all accounts
  console.log("\nAfter transactions:");
  for (const account of accounts) {
    showAccountInfo(account);
  }
}

// Run the myBankApp function
myBankApp();
