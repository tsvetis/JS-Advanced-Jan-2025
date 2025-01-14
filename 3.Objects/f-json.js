const person = {
  name: "Pesho",
  age: 20,
  isMale: true,
  grades: [2, 4, 5, 6, 6, 4, 6],
  location: { lat: 32.232, lng: -15.333 },
};

// turn js object into stringified JSON -> one line json
console.log(JSON.stringify(person));

// multi line json
const stringifiedPerson = JSON.stringify(person, null, 2);

// Convert json to data
const personData = JSON.parse(stringifiedPerson);
