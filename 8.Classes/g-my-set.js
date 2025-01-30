class MySet {
  data = {};
  size = 0;

  constructor() {}

  getUnqueArray() {
    return Object.keys(this.data);
  }

  add(value) {
    this.data[value] = typeof value;
    this.size = Object.keys(this.data).length;
  }
}

const mySet = new MySet();
console.log(mySet);

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(1);
console.log(mySet.getUnqueArray());
