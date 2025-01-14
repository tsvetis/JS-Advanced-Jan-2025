// Basic Syntax
const dog = {
  name: "Akira",
  gender: "female",
  age: 1.2,
  furColor: "cream-white",
};

// How to modify property value
dog.age = 2;

// Set new property
dog.eyeColor = "brown";

// Shorthand syntax
// let firstName = "Pesho";
// let age = 21;
// const person = { firstName, age };

// Access property with dot notation
// console.log(person.firstName);
// Access property with bracket notation
// console.log(person["age"]);

// Access to access property dynamically in bracket notaion
let dynamicPropertyKey = "firstName";
// console.log(person[dynamicPropertyKey]);

// Set property name by different rules
const employee = {
  "first-name": "Nikolay",
};

// How to access the property of employee?
// console.log(employee["first-name"]);

// Access non-existing property
// console.log(employee.lastName); // undefined

// Object Destructuring Assignment
// const { gender, name } = dog;
// console.log(name, gender);

// Rest operator
const { furColor, name, age, ...others } = dog;
// console.log(furColor, name, age);
// console.log(others);

// Delete property
let myObject = { first: 1, second: 2, third: 3 };
delete myObject.first;

// Reference Value
let myOtherObject = myObject;
const myObject2 = { second: 2, third: 3 };

myOtherObject.age = 123;
// console.log("myObject: ", myObject);
// console.log("myOtherObject: ", myOtherObject);
// console.log(myObject === myOtherObject);
// console.log("myObject2: ", myObject2);
// console.log(myObject === myObject2);

// Use dynamic property name in obejct literal
const propName = "isEco";
const house = {
  color: "white",
  sqMeters: 300,
  [propName]: true,
};

// Rename destructured variables
const { color: colorFromHouse } = house;
// console.log(colorFromHouse);
