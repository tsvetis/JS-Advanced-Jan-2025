const petAdoptionAgency = {
  isPetAvailable(pet, availableCount, vaccinated) {
    if (
      typeof pet !== "string" ||
      typeof availableCount !== "number" ||
      typeof vaccinated !== "boolean"
    ) {
      throw new Error("Invalid input");
    }

    if (availableCount <= 0) {
      return `Sorry, there are no ${pet}(s) available for adoption at the agency.`;
    } else {
      if (vaccinated) {
        return `Great! We have ${availableCount} vaccinated ${pet}(s) available for adoption at the agency.`;
      } else {
        return `Great! We have ${availableCount} ${pet}(s) available for adoption, but they need vaccination.`;
      }
    }
  },
  getRecommendedPets(petList, desiredTraits) {
    let recommendedPets = [];

    if (!Array.isArray(petList) || typeof desiredTraits !== "string") {
      throw new Error("Invalid input");
    }

    petList.forEach((pet) => {
      if (pet.traits === desiredTraits) {
        recommendedPets.push(pet.name);
      }
    });

    if (recommendedPets.length === 0) {
      return `Sorry, we currently have no recommended pets with the desired traits: ${desiredTraits}.`;
    } else {
      return `Recommended pets with the desired traits (${desiredTraits}): ${recommendedPets.join(
        ", "
      )}`;
    }
  },
  adoptPet(pet, adopterName) {
    if (typeof pet !== "string" || typeof adopterName !== "string") {
      throw new Error("Invalid input");
    }

    return `Congratulations, ${adopterName}! You have adopted ${pet} from the agency. Enjoy your time with your new furry friend!`;
  },
};

export default petAdoptionAgency;
