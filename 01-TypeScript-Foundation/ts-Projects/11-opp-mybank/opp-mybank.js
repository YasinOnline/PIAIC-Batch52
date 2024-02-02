// Define a "Customer" class to store customer information:
// - First name
// - Last name
// - Gender
// - Age
// - Mobile number
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    // Initialize customer details in the constructor
    constructor(firstName, lastName, gender, age, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }
}
// Implement the "BankAccount" interface in the "BankAccount" class:
// - Account number
// - Account balance
// - Customer object
class BankAccount {
    accountNumber;
    balance;
    customer;
    // Initialize account details in the constructor, including optional initial balance
    constructor(accountNumber, customer, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.customer = customer;
    }
    // Debit money from the account, checking for sufficient funds
    debit(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`${this.customer.firstName} ${this.customer.lastName} debited $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log("Insufficient balance. Transaction cancelled.");
        }
    }
    // Deposit money into the account, applying a $1 fee for deposits over $100
    credit(amount) {
        if (amount > 100) {
            amount -= 1; // Deduct $1 fee for credit over $100
        }
        this.balance += amount;
        console.log(`${this.customer.firstName} ${this.customer.lastName} credited $${amount}. New balance: $${this.balance}`);
    }
    // Get the current account balance
    getBalance() {
        return this.balance;
    }
}
// Create sample customer data:
let customers = [
    new Customer("John", "Doe", "male", 30, "1234567890"),
    new Customer("Jane", "Smith", "female", 25, "0987654321"),
];
// Create sample bank account data with initial balances:
let accounts = [
    new BankAccount("1234567890", customers[0], 500),
    new BankAccount("0987654321", customers[1], 200),
];
// Function to display account information for a specific account:
// - Customer name
// - Account number
// - Account balance
function showAccountInfo(account) {
    console.log(`Account Holder: ${account.customer.firstName} ${account.customer.lastName}`);
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
export {};
