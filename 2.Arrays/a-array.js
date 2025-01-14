// Array
const names = ["Ani", "Pesho", "Martin", "Yoanna"];

// Mixed Array
const mixed = [0.123, true, { name: "Pesho" }, [1, 2, 3]];

// Sparse array
const sparseArray = [];
sparseArray.length = 100;
// console.log(sparseArray);
sparseArray[0] = "Pesho";
sparseArray[80] = "Ani";
// console.log(sparseArray);

// Dense array
const denseArray = [undefined, undefined, 1, undefined, 23];
// console.log(denseArray);

// Get the first and the last element
const firstElement = names[0];
const lastElement = names[names.length - 1];

// Accessing non-existing index
// console.log(names[true]);
// console.log(names["Dog"]);
// console.log(names[-123]);

// For-of
for (const name of names) {
  //   console.log(name);
}

// Iterator - Non-mandatory
const iterator = names[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
  //   console.log(result.value);
  result = iterator.next();
}

// Array destructuring
const [firstName, secondName] = names;
// console.log(firstName);
// console.log(secondName);

// Array destructuring with rest operator
const [fName, sName, ...others] = names;
console.log(fName);
console.log(sName);
console.log(others);
