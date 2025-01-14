function solve(pieFlavours, firstPieFlavour, lastPieFlavour) {
  const firstIndex = pieFlavours.indexOf(firstPieFlavour);
  const lastIndex = pieFlavours.indexOf(lastPieFlavour);

  const result = pieFlavours.slice(firstIndex, lastIndex + 1);
  return result;
}

// Input
solve(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);

/** Output:
 * ['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie']
 */
