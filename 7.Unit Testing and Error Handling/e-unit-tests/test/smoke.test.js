import { assert, expect } from "chai";

describe("Smoke test", () => {
  it("Should always pass", () => {
    assert.equal(true, true);
  });

  it("Should pass", () => {
    expect(true).to.equal(true);
  });
});
