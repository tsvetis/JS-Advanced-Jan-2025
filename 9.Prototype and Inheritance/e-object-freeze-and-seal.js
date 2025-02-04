// "use strict"; // will throw an error

// Object Freeze
const car = {
  model: "VW",
  year: 1999,
};

// console.log(Object.getOwnPropertyDescriptors(car));
Object.freeze(car);

car.year = 2007;
// console.log(car);
// console.log(Object.getOwnPropertyDescriptors(car));

// Cannot add new properties
car.newProp = "new Value";
// console.log(car);

// Cannot delete existing properties
delete car.year;
// console.log(car);

// Object Seal
const person = {
  name: "Pesho",
  age: 21,
};

Object.seal(person);
// console.log(Object.getOwnPropertyDescriptors(person));

// Can re-write property value
person.name = "Gosho";
console.log(person);

// Cannot delete properties
delete person.age;
console.log(person);

// Cannot add properties
person.newProp = "new Value";
console.log(person);
