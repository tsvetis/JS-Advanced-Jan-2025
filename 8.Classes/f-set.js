// Declare set
const uniqueNumbers = new Set();

// Add values to set
uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(4);

// console.log(uniqueNumbers);

// Add existing value
uniqueNumbers.add(1);
// console.log(uniqueNumbers);

// Check if value exists
// console.log(uniqueNumbers.has(1));

// Declare with values
// const nums = [1, 1, 1, 2, 3, 3, 54, 3, 5, 2];
// const uniNums = new Set(nums);
// console.log(uniNums);

// Iterate over set
for (const value of uniqueNumbers) {
  //   console.log(value);
}

// Create array with unique values
const unqieArrOfNums = Array.from(new Set([1, 1, 1, 2, 3, 3, 54, 3, 5, 2]));
console.log(unqieArrOfNums);
