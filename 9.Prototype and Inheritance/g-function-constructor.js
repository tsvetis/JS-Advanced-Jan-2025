// function constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.sing = function (params) {
    console.log("Tralalalala...");
  };
}

// Function has protype
// console.log(Person.prototype);

// Add method to prototype
Person.prototype.efficientSing = function () {
  console.log(`${this.firstName} - Sings for me`);
};

const person1 = new Person("Pesho", "Ivanonv");
const person2 = new Person("Ivan", "Grigorov");

// console.log(person1);
// person1.sing();
// console.log(person2);
// person2.sing();

// Different functions
// console.log(person1.sing === person2.sing);

person1.efficientSing();
person2.efficientSing();

// Same function
console.log(person1.efficientSing === person2.efficientSing);

// new keyord
function newOperator(constructor, ...args) {
  // Create new object
  const newObj = {};

  // Assign prototype
  Object.setPrototypeOf(newObj, constructor.prototype);

  // execute constructor with newObj as context
  constructor.apply(newObj, args);

  return newObj;
}

// newOperator is the same with the "new" keyword
const person3 = newOperator(Person, "Mira", "Petrova");
console.log(person3);
person3.efficientSing();
