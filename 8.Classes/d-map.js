// Reasons to use Map
// - frequent property deletion or clear
// - strict insertion order
// - different key types expect string

// Declare map
const map = new Map();

// Add elements to map
// map.a = 5; // do not add elements in map like that
map.set("name", "Pesho");
map.set(10, true);
map.set(true, "gosho");
// console.log(map);

// Iterate over map
for (const [key, value] of map) {
  //   console.log(typeof key);
  //   console.log(`${key} -> ${value}`);
}

// Get specific value
// console.log(map.get("name"));

// Get map size
// console.log(map.size);

// Get if key exists
// console.log(map.has("name"));

// Iterate over keys
for (const key of map.keys()) {
  //   console.log(key);
}

// Iterate over values
for (const key of map.values()) {
  //   console.log(key);
}

// Delete key
// console.log(map.delete("name"));
// console.log(map);

// Clear
map.clear();
// console.log(map);

// Sort
const phoneBook = new Map();
phoneBook.set("Pesho", "123123");
phoneBook.set("Maria", "42112");
phoneBook.set("Ivan", "56435");
phoneBook.set("Dragan", "92933");

const phoneBookTuples = Array.from(phoneBook);

phoneBookTuples.sort((a, b) => a[0].localeCompare(b[0]));

const sortedMap = new Map(phoneBookTuples);
// console.log(sortedMap);
