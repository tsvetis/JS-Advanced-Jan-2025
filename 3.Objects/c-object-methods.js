// How to add a method to an object
const dog = {
  name: "Akira",
  age: 1.2,
  bark: function () {
    console.log("bark, bark, bark...");
  },
};

// Invoke the method
// dog.bark();

// Add method with arrow function
const bird = {
  type: "Eagle",
  color: "Brown",
  fly: () => console.log("I fly, fly, fly..."),
};

// bird.fly();

// Add method with method notation
const car = {
  model: "VW",
  year: 2017,
  drive() {
    console.log("VrooOoom...");
  },
};

// car.drive();

// Sorting helpers
const compareNumber = {
  ascending: (a, b) => a - b,
  descending: (a, b) => b - a,
};

const numbers = [-1, 12, 1, 1, 0, 123, 1023, -23, 7];
numbers.sort(compareNumber.descending);
// console.log(numbers);

// Replace Switch Statement
const cmd = "reset";
let count = 5;

// switch (cmd) {
//   case "increment":
//     count++;
//     break;
//   case "decrement":
//     count--;
//     break;
//   case "reset":
//     count = 0;
//     break;
// }

const commands = {
  increment() {
    count++;
  },
  decrement() {
    count--;
  },
  reset() {
    count = 0;
  },
};

commands[cmd]();
// console.log("count: ", count);

// Method context
const person = {
  name: "Pesho",
  introduce() {
    console.log(`Hello there! I am ${this.name}!`);
  },
};

person.introduce();

const introduceFn = person.introduce;
// Execute function without context
introduceFn();

const anotherPerson = {
  name: "Mike",
};

anotherPerson.greet = introduceFn;
anotherPerson.greet();
