// Encapsulation: bundling of data and methods that act on that data into a single unit
class Vehicle {
  // Private properties are accessible only within the class
  private speed: number;

  // Protected properties are accessible within the class and its subclasses
  protected numberOfWheels: number;

  constructor(numberOfWheels: number, speed: number) {
    this.numberOfWheels = numberOfWheels;
    this.speed = speed;
  }

  // Public methods can be called from outside the class
  public accelerate(amount: number) {
    this.speed += amount;
  }

  public decelerate(amount: number) {
    this.speed -= amount;
  }

  public getSpeed(): number {
    return this.speed;
  }
}

// Inheritance: a mechanism of creating a new class using classes which have already been defined
class Car extends Vehicle {
  // Additional property
  private brand: string;

  constructor(brand: string) {
    // Call the constructor of the superclass
    super(4, 0);
    this.brand = brand;
  }

  // Polymorphism: ability to present the same interface for different data types
  // Overriding the accelerate method
  public accelerate(amount: number) {
    // Call the superclass's method
    super.accelerate(amount);
    console.log(`The ${this.brand} car accelerates by ${amount} km/h.`);
  }

  // Abstraction: showing only necessary details to the client
  public startEngine() {
    console.log(`The engine of the ${this.brand} car starts.`);
  }
}

// Create a new Car object
let myCar = new Car("Toyota");

// Call methods on the object
myCar.startEngine();
myCar.accelerate(20);
console.log(`The car's speed is ${myCar.getSpeed()} km/h.`);
