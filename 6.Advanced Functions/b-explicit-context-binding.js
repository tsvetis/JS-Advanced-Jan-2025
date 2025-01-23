function sayHi(name, age) {
  console.log(
    `Hello, my name is ${name} and I am ${age} y/o. \nHi name is ${this.name}!`
  );
}

// Use call
const newContext = {
  name: "Mariya",
};

const argsList = ["Ivan", 43];
sayHi.call(newContext, ...argsList);

console.log("---------------");

// Use Apply
sayHi.apply(newContext, argsList);

console.log("---------------");

// Bind
const modifiedSayHi = sayHi.bind(newContext);
modifiedSayHi("Gosho", 32);

// Partial application
console.log("---------------");
const partialApplicationSayHi = sayHi.bind(newContext, "Mitko");
partialApplicationSayHi(24);
