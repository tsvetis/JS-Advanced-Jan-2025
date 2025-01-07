// // Primitives (value types)
// let message = "Hello, Softuni!";
// let num = 123.23; // double precision -> 64 bit
// message = "Hello, softuni!"; // immutable -> re-writes every single time
// let hasApples = false;

// let x = null;
// // STRUCTURAL TYPE = REFERENCE TYPE

// let person = "Pesho";

// function solve() {
//   // Some Logic
// }

// let user = {
//   name: "Pesho",
// };

// let tsvetiName = "Tsveti";
// console.log(tsvetiName);

// Global Scope

// // Function Declaration
// function someFunction() {
//   // Function Scope
//   let x = 213;

//   if (true) {
//     // Block Scope
//     const arr = [1, 2, 3, 4, 5];
//     arr.push(505);
//     console.log(arr);
//   }
// }

// // Function Expression
// const someOtherFunct = function () {
//   console.log(123);
// };

// DONT DO IT! BAD PRACTICE
// let test = 5;
// test = "Hello";
// test = { name: "Pesho", age: 21 };
// test = null;
// test = [true, 123, [1, 2, 3], { name: "Pesho", age: 21 }];

// Function Declaration
// function sum(a, b) {
//   return a + b;
// }

// Function Expression
// const sum = function (a, b) {
//   return a + b;
// };

// Arrow Function
// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// console.log(sum(12, 11));

// function printStars(count = 5) {
//   console.log("* ".repeat(count));
// }

// printStars();

// function sum(a, b, c) {
//   //   console.log(a);
//   //   console.log(b);
//   //   console.log(c);
//   return a + b + c;
// }
// console.log(sum(1, 2, 3, 4, 5, 6));
