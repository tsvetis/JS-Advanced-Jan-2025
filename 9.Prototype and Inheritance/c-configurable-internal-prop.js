const car = {
  name: "VW",
};

// Define property with configurable true
Object.defineProperty(car, "year", {
  value: 2000,
  configurable: true,
  writable: false,
});

// console.log(car);
// car.year = 1998;
// console.log(car);

Object.defineProperty(car, "year", {
  enumerable: true,
});

car.year = 1994;
// console.log(car);
// console.log(Object.getOwnPropertyDescriptor(car, "year"));

let obj = {};
Object.defineProperty(obj, "conf", {
  configurable: false,
  value: "hidden",
});

// console.log(Object.getOwnPropertyDescriptor(obj, "conf"));

// Get multiple internal properties
console.log(Object.getOwnPropertyDescriptors(car));

// Get multiple internal properties
Object.defineProperties(car, {
  color: {
    value: "red",
    writable: true,
  },
  transmission: {
    value: "automatic",
    writable: false,
  },
});
