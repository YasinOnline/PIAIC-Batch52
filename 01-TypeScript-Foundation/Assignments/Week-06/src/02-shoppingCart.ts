// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

let shoppingCart: CartItem[] = [];

function printCartContents(): void {
  console.log("Cart Contents:");
  shoppingCart.forEach((item) => {
    console.log(
      `${item.name} - Quantity: ${item.quantity} - Price: $${
        item.price * item.quantity
      }`
    );
  });
  console.log("Total Price:", calculateTotalPrice());
  console.log("------------------------");
}

function calculateTotalPrice(): number {
  return shoppingCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

function addItemToCart(name: string, price: number, quantity: number): void {
  const newItem: CartItem = { name, price, quantity };
  shoppingCart.push(newItem);
  printCartContents();
}

function removeItemFromCart(name: string): void {
  const itemIndex = shoppingCart.findIndex((item) => item.name === name);

  if (itemIndex !== -1) {
    shoppingCart.splice(itemIndex, 1);
    printCartContents();
  } else {
    console.log(`Item "${name}" not found in the cart.`);
  }
}

function updateItemQuantity(name: string, newQuantity: number): void {
  const itemIndex = shoppingCart.findIndex((item) => item.name === name);

  if (itemIndex !== -1) {
    shoppingCart[itemIndex].quantity = newQuantity;
    printCartContents();
  } else {
    console.log(`Item "${name}" not found in the cart.`);
  }
}

// Example usage
addItemToCart("Product A", 20, 2);
addItemToCart("Product B", 15, 1);
updateItemQuantity("Product A", 3);
removeItemFromCart("Product B");
