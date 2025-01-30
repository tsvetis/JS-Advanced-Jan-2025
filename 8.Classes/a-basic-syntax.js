// Define Simple Class
class Dog {
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Define method
  sleep() {
    console.log(`${this.name}: ZzzzZzzz...`);
  }

  eat() {
    console.log(`${this.name}: nomnonmnonmnonm...`);
  }

  // Defin static method
  static staticMethod() {
    console.log(
      `Static methods can be invoked only from the class ${this.name}`
    );
  }

  static secondStaticMethod() {
    // this.sleep(); // Can not call instance method from static method
    this.staticMethod();
  }
}

const myDog = new Dog("Akira", 2);
const yourDog = new Dog("Scooby", 7);
// console.log(myDog);
// console.log(yourDog);

// Call instance methods
// myDog.sleep();
// yourDog.sleep();
// myDog.eat();
// yourDog.eat();

// Call Static Method
// Dog.staticMethod();
// Dog.secondStaticMethod();

class Person {}

// Instanceof
console.log(yourDog instanceof Dog);
console.log(myDog instanceof Person);

const dog = {
  name: "CopyDog",
  sleep() {
    console.log(`${this.name}: ZzzzZzzz...`);
  },
  eat() {
    console.log(`${this.name}: nomnonmnonmnonm...`);
  },
};

console.log(dog instanceof Dog);
console.log(dog instanceof Object);
