function extendPrototype(classToExtend) {
  classToExtend.prototype.species = "Human";
  classToExtend.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}

function Person(name) {
  this.name = name;
}

Person.prototype.toString = function () {
  return `I am ${this.name}!`;
};

extendPrototype(Person);

const p = new Person("Pesho");
console.log(p);
console.log(p.species);
console.log(p.toSpeciesString());

console.log(p.__proto__);
