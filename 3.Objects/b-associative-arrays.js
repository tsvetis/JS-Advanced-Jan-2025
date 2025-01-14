const phoneBook = {
  "Ivan Kirov": "+3598888123",
  "Kiril Petkov": "+3598888144",
  "Maria Lazarova": "+3598888144",
};

// Accessing key with associative array
// console.log(phoneBook["Kiril Petkov"]);

// Iterate over all numbers in the phone book
for (const key in phoneBook) {
  //   console.log(`${key} - ${phoneBook[key]}`);
}

const person = {
  name: "Niki",
  age: 21,
  address: "Stara Zagora, Bulgaria",
};

// Iterate over Normal Object
for (const key in person) {
  //   console.log(`${key} - ${person[key]}`);
}

// Iterate with Object.keys
const keys = Object.keys(person);
for (const key of keys) {
  //   console.log(`${key} - ${person[key]}`);
}

// Iterate with Object.values
const personValues = Object.values(person);
// console.log(personValues);

// Object entries
const phoneBookEntries = Object.entries(phoneBook);
for (const [key, value] of phoneBookEntries) {
  //   const [key, value] = keyValue; // tuples
  console.log(key, " - ", value);
}
