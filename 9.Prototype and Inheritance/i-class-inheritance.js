class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);

    this.subject = subject;
  }
}

const teacher = new Teacher("Ivan", "ivan@abv.bg", "JS");
console.log(teacher);
console.log(teacher instanceof Teacher);
console.log(teacher instanceof Person);
