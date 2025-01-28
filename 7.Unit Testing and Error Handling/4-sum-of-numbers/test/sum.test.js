import { expect } from "chai";
import { sum } from "../sum.js";

describe("Sum", () => {
  it("Should return the sum of numbers", () => {
    const input = [1, 2, 3];
    const expectedResult = 6;

    const actualResut = sum(input);

    expect(actualResut).to.equal(expectedResult);
  });
});
