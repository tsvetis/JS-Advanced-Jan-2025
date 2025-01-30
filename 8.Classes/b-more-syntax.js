class Car {
  // Set default value of a property
  speed = 0;

  // Set private property
  #isMoving = false;

  // Set static property
  static tireCount = 4;

  // Set static private property
  static #secret = "secret";

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  accelerate(speed) {
    this.speed += speed;
    this.#isMoving = true;

    if (this.speed > 200) {
      this.#factoryReset();
    }
  }

  // private method
  #factoryReset() {
    this.speed = 0;
    this.#isMoving = false;
  }

  static staticMethod() {
    // within static methods, we can access static members (properties, methods)
    console.log(this.tireCount);
    // with static methods, we can access static private memebrs
    console.log(this.#secret);
  }

  // Static private method
  static #privateMethod() {
    console.log("Tralala!");
  }
}

const tesla = new Car("Tesla", "Y");
// console.log(tesla);
// tesla.accelerate(100);
// console.log(tesla);
// tesla.accelerate(150);
// console.log(tesla);
// console.log(Car.tireCount);
// Car.staticMethod();
