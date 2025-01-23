// IIFE
// (function () {
//   console.log("Hello, world!");
// })();

// More Complex IIFE
const result = (function (name) {
  //   console.log("Hello, " + name + "!");
  return `Mr.${name}`;
})("Pesho");

// console.log(result);

// IIAF - Immediately Invoked Arrow Function
(() => console.log("JS is the best!"))();
