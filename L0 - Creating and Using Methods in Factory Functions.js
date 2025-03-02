// Define the factory function
function createCar(make, model, year) {
    // Return an object with the properties make, model, year and the method describeCar
    return {
      make: make,
      model: model,
      year: year,
      describeCar: function() {
        console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
      }
    };
  }
  
  // Example usage:
  const car = createCar("Toyota", "Camry", 2022);
  car.describeCar(); // Output: This car is a 2022 Toyota Camry.
  