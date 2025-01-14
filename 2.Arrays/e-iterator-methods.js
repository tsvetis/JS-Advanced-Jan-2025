const cars = ["BMW", "Mercedes", "Audi", "Toyota", "Audi", "Alfa"];

// ForEach
cars.forEach((car, index) => {
  //   console.log(`${index + 1} - ${car}`);
});

// Map -> Tranformer
const allCarsToLower = cars.map((car) => car.toLowerCase());
// console.log(allCarsToLower);

// Some
const hasCarWithMe = cars.some((car) => car.startsWith("Me"));

// Find
const carStartsWithA = cars.find((car) => car.startsWith("A"));

// Filter
const carsStartsWithA = cars.filter((car) => car.startsWith("A"));
