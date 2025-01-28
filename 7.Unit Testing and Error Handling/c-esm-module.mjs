import calc from "./calculator.mjs"; // import default
import { mult, sum } from "./calculator.mjs"; // import concrete
import * as calculator from "./calculator.mjs"; // import all

console.log("sum", sum(20, 30));
console.log("mult", mult(6, 8));
console.log("sum", calc.sum(33, 22));
console.log("mult", calc.mult(3, 2));
console.log(calculator.mult(3, 3));
