/* 

Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

*/
interface Car {
  manufacturer: string;
  modelName: string;
  [key: string]: string;
}

function createCar(
  manufacturer: string,
  modelName: string,
  ...args: string[]
): Car {
  let car: Car = { manufacturer, modelName };

  for (let i = 0; i < args.length; i += 2) {
    car[args[i]] = args[i + 1];
  }

  return car;
}

let car = createCar("Tesla", "Model S", "color", "red", "feature", "autopilot");
console.log(car);

/* 

In this code:

createCar() is a function that accepts a manufacturer and a model name, followed by an arbitrary number of additional arguments representing other car attributes.
The ...args syntax in the function parameter is called the rest parameter syntax, which allows us to represent an indefinite number of arguments as an array.
We create a Car object with the manufacturer and model name, and then add the additional attributes to the car object in a loop.
We call createCar() with the required information and two additional name-value pairs (‘color’ and ‘feature’), and store the returned car object in car.
Finally, we print the car object to verify that all the information was stored correctly. The output will be a Car object with the specified attributes.

*/
