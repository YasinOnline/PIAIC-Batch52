"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
function getDayOfWeek(dayNumber) {
    if (dayNumber >= 1 && dayNumber <= 7) {
        if (dayNumber === 1) {
            return "Sunday";
        }
        else if (dayNumber === 2) {
            return "Monday";
        }
        else if (dayNumber === 3) {
            return "Tuesday";
        }
        else if (dayNumber === 4) {
            return "Wednesday";
        }
        else if (dayNumber === 5) {
            return "Thursday";
        }
        else if (dayNumber === 6) {
            return "Friday";
        }
        else {
            return "Saturday";
        }
    }
    else {
        return "Invalid input. Please enter a number between 1 and 7.";
    }
}
const userDayNumber = parseInt(readlineSync.question("Enter a number (1-7) to represent the day of the week: "), 10);
const dayOfWeek = getDayOfWeek(userDayNumber);
console.log(`The corresponding day of the week is: ${dayOfWeek}`);
