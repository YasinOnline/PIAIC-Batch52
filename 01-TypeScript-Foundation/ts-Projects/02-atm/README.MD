# ATM

This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.

This code will prompt the user to enter a user id and pin. If the entered id and pin match a user in the system, the user is welcomed and their balance is displayed. If the entered id and pin do not match any user, an error message is displayed. Please make sure to install the necessary dependencies (inquirer) using npm before running this code. Also, ensure that your environment is set up correctly for TypeScript and Node.js.

npm init -y
tsc --init
npm install inquirer --save @types/inquirer

tsc atm.ts
node atm.js

User with id "user123", pin "1234", and balance 150000

Remember, this is a basic implementation. Depending on your needs, you might want to expand this to include more complex features or additional error checking. Happy coding!
