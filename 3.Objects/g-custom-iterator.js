const phoneBook = {
  "Ivan Kirov": "+3598888123",
  "Kiril Petkov": "+3598888144",
  "Maria Lazarova": "+3598888144",
  [Symbol.iterator]() {
    const namesFromThePhoneBook = Object.keys(this);
    let index = 0;

    return {
      next() {
        return {
          value: namesFromThePhoneBook[index++],
          done: index > namesFromThePhoneBook.length,
        };
      },
    };
  },
};

// Compare strings
const nameOne = "Pesho";
const nameTwo = "Pesho";
console.log(nameOne === nameTwo);

// Compare symbols
const symbolOne = Symbol("Pesho");
const symbolTwo = Symbol("Pesho");
console.log(symbolOne === symbolTwo);

// Iterate the object
for (const val of phoneBook) {
  console.log(val);
}
