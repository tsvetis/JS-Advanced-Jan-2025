function Animal(species) {
  this.species = species;
}

Animal.prototype.eat = function () {
  console.log(`${this.species} - Omnnonononomnomnom`);
};

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;

  Animal.call(this, "dog");
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
  console.log(`${this.name} - Bark, bark, bark!`);
};

const firstDog = new Dog("Akira", "Shiba-inu");
console.log(firstDog); // species is own property
firstDog.bark(); // this comes from dog prototype
firstDog.eat(); // this comes from animal prototype

console.log(firstDog instanceof Dog);
console.log(firstDog instanceof Animal);
