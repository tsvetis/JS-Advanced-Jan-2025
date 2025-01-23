function sayHi() {
  //   console.log("sayHi", this);
  console.log(`Hello my name is ${this.name}`);
}

// Invoked as Global Function
// sayHi();

// Invoke as Inner Function
function outer() {
  sayHi();
}

// outer();

// Invoked as Method
const person = {
  name: "Pesho",
  sayHi,
};

// person.sayHi();

// Invoke as Inner function of method
const anotherPerson = {
  name: "Sasho",
  saySomething() {
    // no matter where is invoked, matter how it is invoked!
    // console.log("anotherPerson ", this);
    sayHi();
  },
};

// anotherPerson.saySomething();

// Invoke as Inner arrow function of method
const otherPerson = {
  name: "Gosho",
  saySomething() {
    // Dark Magic
    // const that = this;
    // function sayHi() {
    //   console.log(`Hello my name is ${that.name}`);
    // }
    // sayHi();

    // Contex will be passed on arrow function creation
    const sayHiArrow = () => console.log(`Hello my name is ${this.name}`);
    sayHiArrow();
  },
};

otherPerson.saySomething();
