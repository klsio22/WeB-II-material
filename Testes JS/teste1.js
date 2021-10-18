class Person {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Name: ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, id) {
    //this.name = name;
    super(name);
    this.id = id;
  }

  toString() {
    return `${super.toString()}, Student ID: ${this.id}`;
  }
}

let student1 = new Student("Tiago", 24);
console.log(student1.toString());
