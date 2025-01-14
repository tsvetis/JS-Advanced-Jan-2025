function solve(input) {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < input.length; i++) {
    leftDiagonalSum += input[i][i];
    rightDiagonalSum += input[input.length - 1 - i][i];
  }

  console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}

solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
// Output: 99 25
