function solve(input) {
  let sum = 0;
  let invertedSum = 0;
  let concatedSum = "";

  for (let i = 0; i < input.length; i++) {
    sum += input[i];
    invertedSum += 1 / input[i];
    concatedSum += input[i];
  }

  console.log(sum);
  console.log(invertedSum);
  console.log(concatedSum);
}

solve([1, 2, 3]);
