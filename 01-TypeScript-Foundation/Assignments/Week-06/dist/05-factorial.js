"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
let inputNumber = prompt("Enter a positive integer:");
let num = Number(inputNumber);
if (isNaN(num) || num < 0) {
    console.log("Invalid input. Please enter a positive integer.");
}
else {
    let output = factorial(num);
    console.log("The factorial of " + num + " is " + output + ".");
}
