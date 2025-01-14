const cars = ["BMW", "Mercedes", "Audi", "Toyota", "Audi", "Alfa"];

// Join
const list = cars.join(" ");
// console.log(list);

// Concat
const moreCars = ["Porsche", "Lambo", "Ferrari"];
const allCars = cars.concat(moreCars);
// console.log(allCars);

// Slice
const firstCars = cars.slice(0, 3);
const lastCars = cars.slice(3);
const carsCopy = cars.slice(); // copy with different reference
const refToCars = cars; // the same reference
// refToCars === cars // true
// carsCopy === cars // false

// Includes
const hasCar = cars.includes("Audi");

// IndexOf
const indexOfCar = cars.indexOf("Audi");

if (indexOfCar < 0) {
  console.log("Cannot find this car! :(");
} else {
  console.log(`Car is found at index: ${indexOfCar}`);
}
