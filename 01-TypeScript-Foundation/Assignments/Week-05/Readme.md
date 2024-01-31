Class Assignments Submission Link: https://forms.gle/YyvdX1vTriyxYdJ3A

# Week # 5

Hello! Today's class covered three main topics:

1. Arrays methods
2. Loops
3. step_00_helloworld

You can find the class code at https://github.com/JahanzaibTayyab/Batch-52

For your reading assignment (marked), please refer to  https://github.com/panaverse/learn-typescript 

<b>Certainly! Follow these steps to create a Node.js project with TypeScript and manage dependencies:</b>

Step 1: Initialize npm

		npm init -y

		This command initializes a new Node.js project and creates a package.json file in your project folder. The -y flag automatically accepts the default configuration.

Step 2: Initialize TypeScript

		tsc --init

		This command initializes a TypeScript configuration file (tsconfig.json). TypeScript is a superset of JavaScript that adds static typing.

Step 3: Create .gitignore

		Create a .gitignore file in the root of your project and add node_modules to it. This ensures that the node_modules folder (where dependencies are stored) is not included in your version control system.

		node_modules/

Step 4: Install Packages
	
		To add packages to your Node.js project, use the following command. Replace packagename with the actual name of the package you want to install.

		npm install packagename


		If you want to add a package as a devDependency (used during development but not in production), use the -D flag.

		npm install packagename -D

Explanation:
	
	- npm init -y: Initializes a new Node.js project and creates a package.json file that contains metadata about the project.

	- tsc --init: Initializes a TypeScript configuration file (tsconfig.json) for TypeScript settings.

	- .gitignore: A file that specifies files and directories that should be ignored by version control. In this case, it excludes the node_modules folder.

	- npm install packagename: Installs the specified package as a regular dependency.

	- npm install packagename -D: Installs the specified package as a devDependency.

Difference between dependency and devDependency:
	
	- Dependencies (dependencies object in package.json): These are the packages required for the application to run in production. They include libraries and modules needed during runtime.
	
	- DevDependencies (devDependencies object in package.json): These are packages that are only needed during development and testing. Examples include testing frameworks, build tools, and linters. DevDependencies are not included when the application is deployed in production.

### Week 5 Assignments:

- Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
- Write a program that calculates the percentage.
- Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
- Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
- Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
- Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
- Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
- Write a program that checks if the given year is leap year or not.
- Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
- Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax. Where the tax amount will be calculated by the amount of bill.

For user input save o value in variable and use it or create a function for every program and pass desired value when u call that function best approach