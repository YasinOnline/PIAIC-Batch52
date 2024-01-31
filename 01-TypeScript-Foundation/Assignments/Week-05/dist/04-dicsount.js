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
function calculateDiscount(price) {
    const discountRateAbove100 = 0.1;
    const discountRateBelow100 = 0.05;
    if (price > 100) {
        return price * discountRateAbove100;
    }
    else {
        return price * discountRateBelow100;
    }
}
const productPrice = parseFloat(readlineSync.question("Enter the product price: "));
const discountAmount = calculateDiscount(productPrice);
const discountedPrice = productPrice - discountAmount;
console.log(`Discounted Price: PKR${discountedPrice.toFixed(2)}`);
console.log(`Discount Amount: PKR${discountAmount.toFixed(2)}`);
