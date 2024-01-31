"use strict";
/*

Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich(...items) {
    console.log(`Making a sandwich with the following items: ${items.join(", ")}`);
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("peanut butter", "jelly", "banana", "honey");
/*

In this code:

make_sandwich() is a function that accepts any number of arguments (representing sandwich items) and prints a summary of the sandwich order.
The ...items syntax in the function parameter is called the rest parameter syntax, which allows us to represent an indefinite number of arguments as an array.
We call make_sandwich() three times with different numbers of arguments, representing different sandwich orders. The output will be a summary of each sandwich order.

*/
//# sourceMappingURL=Q44.js.map