function solve(input) {
  //   const firstElement = Number(input[0]);
  //   const lastElement = Number(input[input.length - 1]);

  const firstElement = Number(input.shift());
  const lastElement = Number(input.pop());

  console.log(firstElement + lastElement);
}

// Input
solve(["20", "30", "40"]);
// Output: 60
