class Mammal {
  // Mammal properties
  breathAir = true;
  hasLungs = true;

  constructor(hasFur) {
    this.hasFur = hasFur;
  }
}

class Delphine extends Mammal {
  constructor(name) {
    super(false);
    this.name = name;
  }
}

class Dog extends Mammal {
  constructor(name) {
    super(true);
    this.name = name;
  }
}

const delph = new Delphine("joro");
console.log(delph);

const d = new Dog("Akira");
console.log(d);
