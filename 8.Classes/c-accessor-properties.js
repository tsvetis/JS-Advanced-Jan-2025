class Circle {
  radius = 0;

  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  get diameter() {
    // Business logic
    return this.radius * 2;
  }

  set diameter(value) {
    // Validation
    this.radius = value / 2;
  }
}

const circle = new Circle(5);

console.log(circle.diameter); // getter invoked
console.log(circle.radius); // property invoked

circle.diameter = 10; // setter invoked
console.log(circle.diameter); // getter invoked
console.log(circle.radius); // property invoked

circle.diameter = 100;
console.log(circle.diameter); // getter invoked
console.log(circle.radius); // property invoked
