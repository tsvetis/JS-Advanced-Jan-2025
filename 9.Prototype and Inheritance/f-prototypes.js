const smartPerson = {
  writeDissertation() {
    console.log("Dissertation");
  },
};

const buddy = {
  pen: true,
  writeEssay() {
    console.log("Essay");
  },
};

const me = {
  paper: true,
};

Object.setPrototypeOf(me, buddy);
Object.setPrototypeOf(buddy, smartPerson);

// Circular dependency -> Not good!
// Object.setPrototypeOf(smartPerson, me);

// console.log(me.paper);

// me -> has a pen
// console.log(me.pen);

// buddy -> has writeDissertation
// buddy.writeDissertation();

// me -> has writeDissertation
// me.writeDissertation();

// prototyple chaining is uni-directional
// console.log(me.__proto__);
// console.log(buddy.__proto__);

// Doesn't have an acces to "me" properties
// console.log(smartPerson.paper);

// Iterate all members including prototype members
for (const key in me) {
  console.log(key);
}

// The legal way to get the prototype
// console.log(Object.getPrototypeOf(me));

const firstDog = {
  name: "Akira",
  //   bark() {
  //     console.log(`${this.name}: bark bark bark... wuf wuf wuf`);
  //   },
};

const secondDog = {
  name: "Scooby",
  //   bark() {
  //     console.log(`${this.name}: bark bark bark... wuf wuf wuf`);
  //   },
};

const baseDog = {
  bark() {
    console.log(`${this.name}: bark bark bark... wuf wuf wuf`);
  },
};

Object.setPrototypeOf(firstDog, baseDog);
Object.setPrototypeOf(secondDog, baseDog);

// firstDog.bark();
// secondDog.bark();

// Object  assign new objects copy own members
const copyDog = Object.assign({}, firstDog);
// const copyDog = { ...firstDog };
// copyDog.bark(); // throws error because bark is prototype method
// console.log(copyDog);

// Object create assigns prototype
const copyDog2 = Object.create(firstDog);
copyDog2.bark();
