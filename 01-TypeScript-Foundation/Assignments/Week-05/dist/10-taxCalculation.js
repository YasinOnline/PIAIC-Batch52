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
function calculateTax(unitsConsumed) {
    let taxRate;
    if (unitsConsumed > 500) {
        taxRate = 0.25;
    }
    else if (unitsConsumed > 200) {
        taxRate = 0.15;
    }
    else if (unitsConsumed > 100) {
        taxRate = 0.1;
    }
    else {
        taxRate = 0;
    }
    return unitsConsumed * taxRate;
}
const unitsConsumed = parseFloat(readlineSync.question("Enter the number of units consumed: "));
const taxAmount = calculateTax(unitsConsumed);
console.log(`The tax amount for ${unitsConsumed} units consumed is: $${taxAmount.toFixed(2)}`);
