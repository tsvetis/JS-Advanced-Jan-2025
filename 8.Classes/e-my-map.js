class MyMap {
  size;
  data = [];

  constructor() {}

  get(key) {
    let result;

    this.data.forEach(([_key, value]) => {
      if (key === _key) {
        result = value;
      }
    });

    return result;
  }

  set(key, value) {
    this.data.push([key, value]);
    this.size = this.data.length;
  }
}

const myMap = new MyMap();
myMap.set("name", 10);
myMap.set(true, "Gosho");
myMap.set(123, "Pesho");

console.log(myMap);
console.log(myMap.get("name"));
console.log(myMap.get(true));
console.log(myMap.get(123));
