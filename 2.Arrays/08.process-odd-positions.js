function solve(input) {
  // The Readble Way
  //   const oddPossitons = input.filter((el, index) => index % 2 !== 0);
  //   const doubledElements = oddPossitons.map((el) => el * 2);
  //   const reversedElements = doubledElements.reverse();
  //   return reversedElements;

  // The Fancy Way
  const result = input
    .filter((el, index) => index % 2 !== 0)
    .map((el) => el * 2)
    .reverse();

  return result.join(" ");
}

// Input
solve([10, 15, 20, 25]);

// Out: 50 30
