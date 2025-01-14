const numbers = [12, -11, 0, 1, 65, 23, 2, 4, 2, 7, 11];

// Default sorting -> Sorting by ASCII chars
numbers.sort();

// Sort numer by ascending order
// numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// Shorter syntax - ASC order
numbers.sort((a, b) => a - b);

// Shorter syntax - DESC order
numbers.sort((a, b) => b - a);

const cars = ["BMW", "VW", "Toyota", "Mercedes"];

// Sorting Strings - ASC order
cars.sort((a, b) => a.localeCompare(b));

// Sorting Strings - DESC order
cars.sort((a, b) => b.localeCompare(a));
