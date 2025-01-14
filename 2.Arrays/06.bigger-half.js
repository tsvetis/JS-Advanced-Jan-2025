function solve(input) {
  input.sort((a, b) => a - b);
  const halfLength = Math.floor(input.length / 2);

  return input.splice(halfLength);
}

// Input
solve([3, 19, 14, 7, 2, 19, 6]);

// Ouput: [7, 14, 19, 19]
