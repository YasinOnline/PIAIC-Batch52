// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

import * as readlineSync from "readline-sync";

function calculateDiscount(price: number): number {
  const discountRateAbove100: number = 0.1; // 10%
  const discountRateBelow100: number = 0.05; // 5%

  if (price > 100) {
    return price * discountRateAbove100;
  } else {
    return price * discountRateBelow100;
  }
}

// Get user input
const productPrice: number = parseFloat(
  readlineSync.question("Enter the product price: ")
);

const discountAmount: number = calculateDiscount(productPrice);
const discountedPrice: number = productPrice - discountAmount;

console.log(`Discounted Price: PKR${discountedPrice.toFixed(2)}`);
console.log(`Discount Amount: PKR${discountAmount.toFixed(2)}`);
