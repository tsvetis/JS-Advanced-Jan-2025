// Simple nesting
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

const nestedArr = [a, b, c];

// acces the first element
// console.log(nestedArr[0]);

// how to acces 5?
// console.log(nestedArr[1][1]);

// Traverse nested array
for (let i = 0; i < nestedArr.length; i++) {
  //   for (let j = 0; j < nestedArr[i].length; j++) {
  //     console.log(nestedArr[i][j]);
  //   }

  const currentArray = nestedArr[i];
  for (let j = 0; j < currentArray.length; j++) {
    console.log(currentArray[j]);
  }
}
console.log("---------");

// Traverse with ForEach
nestedArr.forEach((arr) => {
  arr.forEach((el) => {
    console.log(el);
  });
});
