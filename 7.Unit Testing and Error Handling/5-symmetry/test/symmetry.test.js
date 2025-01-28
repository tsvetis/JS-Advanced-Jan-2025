import { expect } from "chai";
import { isSymmetric } from "../symmetry.js";

describe("isSymmetric", () => {
  it("Should return true if the array is symmetric", () => {
    const input = [1, 2, 1];
    const result = isSymmetric(input);
    expect(result).to.be.true;
  });

  it("Should return false if the array is asymmetric", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });

  it("Should return true if the array is empty", () => {
    expect(isSymmetric([])).to.be.true;
  });

  it("Should return true if the array has one element", () => {
    expect(isSymmetric([1])).to.be.true;
  });

  it("Should return false if the array has different types", () => {
    expect(isSymmetric([1, 2, "1"])).to.be.false;
  });

  it("Should return true if the input is string array", () => {
    expect(isSymmetric(["pesho", "gosho", "pesho"])).to.be.true;
  });

  it("Should return true if the input is boolean array", () => {
    expect(isSymmetric([false, true, false])).to.be.true;
  });

  it("Should return true if the input is with negative and positive numbers array", () => {
    expect(isSymmetric([-2, 1, -2])).to.be.true;
  });

  it("Should return false if the input is not an array", () => {
    expect(isSymmetric(null)).to.be.false;
    expect(isSymmetric(undefined)).to.be.false;
    expect(isSymmetric("")).to.be.false;
    expect(isSymmetric({})).to.be.false;
    expect(isSymmetric("1,2,3")).to.be.false;
    expect(isSymmetric(-1)).to.be.false;
    expect(isSymmetric(3.14)).to.be.false;
    expect(isSymmetric(false)).to.be.false;
    expect(isSymmetric(NaN)).to.be.false;
  });
});
