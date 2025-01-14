const cars = ["BMW", "VW", "Toyota", "Mercedes"];

// Pop
const lastElement = cars.pop();

// Push
cars.push("Ferrari", "a", "b", "c");

// Shift
const firstElement = cars.shift();

// Unshift
cars.unshift("Hyundai");

// Splice
const removedElements = cars.splice(1, 2);
// console.log(removedElements);
// console.log(cars);
cars.splice(1, 0, "Cat", "Mouse");
// console.log(cars);

// Fill
const nums = [1, 2, 3, 4, 5];
nums.fill(0, 2, 4);

// const empty = [];
// empty.length = 20;
// console.log(empty);
// empty.fill(0);
// console.log(empty);
// empty[13] = 21873687;
// console.log(empty);

// Reverse
const x = nums.reverse();
