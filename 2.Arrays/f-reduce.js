const numbers = [1, 2, 3, 4, 5];

// Sum with reduce
const sum = numbers.reduce((acc, cur, index, arr) => {
  //   console.log(index, arr);
  return acc + cur;
}, 0);

const shortSum = numbers.reduce((acc, cur) => acc + cur, 0);
