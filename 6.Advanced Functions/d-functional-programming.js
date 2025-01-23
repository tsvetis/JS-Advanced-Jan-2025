// First class function
function execute(operation, oprandA, operandB) {
  const result = operation(oprandA, operandB);

  console.log(result);
}

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

// execute(sum, 3, 2);
// execute(subtract, 3, 2);

// Higher order function
function greetingBuilder(salution, title) {
  return (name) => {
    console.log(`${salution} ${title} ${name}!`);
  };
}

const formalGreeting = greetingBuilder("Hello", "Mr.");
// formalGreeting("Pesho");
// formalGreeting("Gosho");

const informalGreeting = greetingBuilder("Maraba", "brato");
// informalGreeting("Pesho");
// informalGreeting("Gosho");

// Function Predicate
function isEven(number) {
  return number % 2 === 0;
}
// console.log(isEven(3));
// console.log(isEven(50));

// Pure Function
function sumTwoNums(a, b) {
  return a + b;
}

// console.log(sumTwoNums(3, 4));

// Non-Pure Function Ex: 1
function sumTwoRandomNumber(toWhichNum) {
  const a = Math.floor(Math.random(toWhichNum) * 100);
  const b = Math.floor(Math.random(toWhichNum) * 100);
  return a + b;
}
// console.log(sumTwoRandomNumber(100));

// Non-Pure Function Ex: 2
let personName = "Kircho";

function greeting() {
  console.log(`Hello, ${personName}!`);
}

setTimeout(() => {
  personName = "Ivan";
  greeting();
}, 3000);

// greeting();

// Referential Transperancy
const add = (a, b) => a + b;
const mult = (a, b) => a * b;

// const result = add(2, mult(3, 4));
// const result = add(2, 3 * 4);
// console.log(result);
