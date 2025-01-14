function solve(input) {
  let result = "";

  for (let i = 0; i < input.length; i++) {
    const el = input[i];
    if (i % 2 === 0) {
      result += `${el} `;
    }
  }

  console.log(result.trim());
}

// Input
solve(["20", "30", "40", "50", "60"]);

// Output: 20 40 60
