// Partial application
function sayHi(title, name) {
  console.log(`Hello, ${title} ${name}!`);
}

// With Function Wrapper
// const sayHiMr = (name) => sayHi("Mr", name);
// sayHiMr("Beast");

// With Bind
const sayHelloMr = sayHi.bind(null, "Mr.");
sayHelloMr("President");
