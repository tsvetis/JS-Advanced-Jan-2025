const car = {
  name: "VW",
};

Object.defineProperty(car, "year", {
  value: 1995,
  writable: false,
  enumerable: true,
});

// console.log(car);
// console.log(car.year);
car.year = 2005;
// console.log(car.year);

// Set another object as non-writable property value
const store = {
  name: "VW Bulgaria",
};

Object.defineProperty(car, "store", {
  value: store,
  writable: false,
  enumerable: true,
});

// Cannot overwrite non-writable property
console.log(car.store);
car.store = {};
console.log(car.store);
car.store.name = "Mercedes Bulgaria";
console.log(car.store);

console.log(JSON.stringify(car, null, 4));
