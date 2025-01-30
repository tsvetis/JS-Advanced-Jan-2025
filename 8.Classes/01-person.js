class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    const result = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    return result;
  }
}

// Input:
let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");

console.log(person.toString());
console.log(person);

// Expected Output: Anna Simpson (age: 22, email: anna@yahoo.com)
