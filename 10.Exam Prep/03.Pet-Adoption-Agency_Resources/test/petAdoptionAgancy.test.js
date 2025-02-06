import { assert } from "chai";
import petAdoptionAgency from "../petAdoptionAgency.js";

describe("Test for petAdoptionAgency", function () {
  describe("getRecommendedPets", function () {
    const petList = [
      { name: "Fluffy", traits: "Playful" },
      { name: "Maca", traits: "Cuddly" },
      { name: "Mars", traits: "Playful" },
    ];

    it("should return list of recommended pets with the desired traits", function () {
      const result = petAdoptionAgency.getRecommendedPets(petList, "Playful");
      const resultMsg =
        "Recommended pets with the desired traits (Playful): Fluffy, Mars";
      assert.equal(result, resultMsg);
    });

    it("should return sorry msg when there are no pets for the trait", function () {
      const result = petAdoptionAgency.getRecommendedPets(petList, "Sleepy");
      const resultMsg =
        "Sorry, we currently have no recommended pets with the desired traits: Sleepy.";
      assert.equal(result, resultMsg);
    });

    it("should throw an error 'Invalid input' for invalid first parameter", function () {
      assert.throws(
        () => petAdoptionAgency.getRecommendedPets("petList", "Sleepy"),
        "Invalid input"
      );
    });

    it("should throw an error 'Invalid input' for invalid second parameter", function () {
      assert.throws(
        () => petAdoptionAgency.getRecommendedPets(petList, 100),
        "Invalid input"
      );
    });
  });

  describe("adoptPet", function () {
    it("should return success msg when adopt a pet", function () {
      const result = petAdoptionAgency.adoptPet("Kitty", "Alex");
      const resultMsg = `Congratulations, Alex! You have adopted Kitty from the agency. Enjoy your time with your new furry friend!`;

      assert.equal(result, resultMsg);
    });

    it("should return an error when the first parameter is not a string", function () {
      assert.throws(
        () => petAdoptionAgency.adoptPet(100, "Alex"),
        "Invalid input"
      );
    });

    it("should return an error when the second parameter is not a string", function () {
      assert.throws(
        () => petAdoptionAgency.adoptPet("Kitty", 100),
        "Invalid input"
      );
    });
  });

  describe("isPetAvailable", function () {
    it("should return an error when the first parameter is not a string", function () {
      assert.throws(
        () => petAdoptionAgency.isPetAvailable(100, 10, true),
        "Invalid input"
      );
    });

    it("should return an error when the second parameter is not a number", function () {
      assert.throws(
        () => petAdoptionAgency.isPetAvailable("Alex", "Kitty", true),
        "Invalid input"
      );
    });

    it("should return an error when the third parameter is not a boolean", function () {
      assert.throws(
        () => petAdoptionAgency.isPetAvailable("Alex", 100, "true"),
        "Invalid input"
      );
    });

    it("should return sorry msg when available count is less than 1", function () {
      const result = petAdoptionAgency.isPetAvailable("Kitty", 0, true);
      const resultMsg = `Sorry, there are no Kitty(s) available for adoption at the agency.`;

      assert.equal(result, resultMsg);
    });

    it("should return great msg when available count is more than 0 and is vaccinated", function () {
      const result = petAdoptionAgency.isPetAvailable("Kitty", 10, true);
      const resultMsg = `Great! We have 10 vaccinated Kitty(s) available for adoption at the agency.`;

      assert.equal(result, resultMsg);
    });

    it("should return great msg when available count is more than 0 and is NOT vaccinated", function () {
      const result = petAdoptionAgency.isPetAvailable("Kitty", 10, false);
      const resultMsg = `Great! We have 10 Kitty(s) available for adoption, but they need vaccination.`;

      assert.equal(result, resultMsg);
    });
  });
});
