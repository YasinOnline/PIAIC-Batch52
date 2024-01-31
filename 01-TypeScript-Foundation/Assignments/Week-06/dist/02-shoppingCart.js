"use strict";
let shoppingCart = [];
function printCartContents() {
    console.log("Cart Contents:");
    shoppingCart.forEach((item) => {
        console.log(`${item.name} - Quantity: ${item.quantity} - Price: $${item.price * item.quantity}`);
    });
    console.log("Total Price:", calculateTotalPrice());
    console.log("------------------------");
}
function calculateTotalPrice() {
    return shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);
}
function addItemToCart(name, price, quantity) {
    const newItem = { name, price, quantity };
    shoppingCart.push(newItem);
    printCartContents();
}
function removeItemFromCart(name) {
    const itemIndex = shoppingCart.findIndex((item) => item.name === name);
    if (itemIndex !== -1) {
        shoppingCart.splice(itemIndex, 1);
        printCartContents();
    }
    else {
        console.log(`Item "${name}" not found in the cart.`);
    }
}
function updateItemQuantity(name, newQuantity) {
    const itemIndex = shoppingCart.findIndex((item) => item.name === name);
    if (itemIndex !== -1) {
        shoppingCart[itemIndex].quantity = newQuantity;
        printCartContents();
    }
    else {
        console.log(`Item "${name}" not found in the cart.`);
    }
}
addItemToCart("Product A", 20, 2);
addItemToCart("Product B", 15, 1);
updateItemQuantity("Product A", 3);
removeItemFromCart("Product B");
