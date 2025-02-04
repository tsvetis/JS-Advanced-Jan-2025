const car = {
  name: "VW",
};

// define internal property
Object.defineProperty(car, "model", {
  value: "Golf",
  enumerable: true,
});

// Check if property is enumerable
const internalProperty = Object.getOwnPropertyDescriptor(car, "model");
console.log(internalProperty);

// Set property with enumerable false
Object.defineProperty(car, "hidden", {
  value: "secret",
  enumerable: false, // hides from iterator
});

// Hiddem property doesn't itarate
for (const propName in car) {
  console.log(propName);
}

// Get keys (without the hidden property!)
const keys = Object.keys(car);
console.log(keys);

// conver to JSON (without the hidden property)
console.log(JSON.stringify(car, null, 4));

// Shows all properties
console.log(car);
