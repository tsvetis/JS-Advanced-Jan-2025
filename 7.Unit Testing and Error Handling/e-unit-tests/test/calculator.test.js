import { expect } from "chai";
import { sum } from "../calculator.js";

describe("Calculator Sum", () => {
  it("Should return the sum of positive numbers", () => {
    // Arrange
    const firstNumber = 2;
    const secondNumber = 5;
    const expectedResult = 7;

    // Act
    const actualResut = sum(firstNumber, secondNumber);

    // Assert
    expect(actualResut).to.equal(expectedResult);
  });
});
