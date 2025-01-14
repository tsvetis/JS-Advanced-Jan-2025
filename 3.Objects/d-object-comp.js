// Nested Objects
const student = {
  firstName: "Pesho",
  lastName: "Ivanov",
  age: 22,
  location: { lat: 43.123, lng: 23.123 },
};

// Access Nested Objects property
// console.log(student.location.lat);

// Composing Objects with Behaviour
function print() {
  console.log(`${this.name} is printing page`);
}

function scan() {
  console.log(`${this.name} is scanning page`);
}

const printer = {
  name: "LG",
  print,
};

const scanner = {
  name: "HP Scanner",
  scan,
};

const copier = {
  name: "Copier Machine",
  print,
  scan,
};

// copier.print();
// copier.scan();

// Factory function
function dogFactory(name, breed) {
  const dog = { name, breed };

  dog.bark = function () {
    console.log(`${this.name} said: bark, bark, bark...`);
  };

  return dog;
}

const dogAkira = dogFactory("Akira", "Shiba-inu");
// dogAkira.bark();

const dogSpike = dogFactory("Spike", "Bulldog");
// dogSpike.bark();
