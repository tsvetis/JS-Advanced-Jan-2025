const circle = {
  radius: 5,
};

Object.defineProperty(circle, "diameter", {
  get() {
    return this.radius * 2;
  },
});

// console.log(circle.diameter);
// circle.radius = 15;
// console.log(circle.diameter);
// circle.diameter = 10;
// console.log(circle.diameter); // cannot modify getter

Object.defineProperty(circle, "area", {
  get() {
    return Math.PI * this.radius ** 2;
  },

  set(value) {
    this.radius = Math.sqrt(value / Math.PI);
  },
});

// console.log(circle.area);
// circle.area = 1000;
// console.log(circle.radius);

// Get and set in literal
const obj = {
  _privateNameValue: "Pesho",
  get name() {
    return this._privateNameValue;
  },
  set name(value) {
    this._privateNameValue = value;
  },
};

console.log(obj.name);
obj.name = "Gosho";
console.log(obj.name);
