function solve(input) {
  const result = [];

  for (const number of input) {
    if (number < 0) {
      result.unshift(number);
    } else {
      result.push(number);
    }
  }

  for (const number of result) {
    console.log(number);
  }
}

// Input
solve([7, -2, 8, 9]);

// Output: -2 7 8 9
