/* 

Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

*/

function make_shirt(size: string, message: string): void {
  console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
}

// CMake a large shirt and a medium shirt with the default message
make_shirt("Large", "I love TypeScript!");
make_shirt("Medium", "I love TypeScript!");

// Make a shirt of any size with a different message
make_shirt("Small", "TypeScript is cool!");
