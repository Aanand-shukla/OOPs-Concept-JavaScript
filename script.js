const user = {
  age: 25,
  firstName: "Radhey",
  lastName: "Shyam",
  getYear() {
    let date = new Date().getFullYear();
    return date - user.age;
  },
};

console.log(user.getYear());

//  factory function

function createUser(firstName, lastName, age) {
  const user = {
    age,
    firstName,
    lastName,
  };

  return user;
}

console.log(createUser("raj", "Rastogi", 34));
console.log(createUser("Mohan", "parikar", 27));
console.log(createUser("Aman", "Singhal", 45));
console.log(createUser("Rajpal", "Diler", 62));

//  Constructor function

function AgeCalculate(name, age, year) {
  this.name = name;
  this.age = age;
  this.year = year;
}

AgeCalculate.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};
const user1 = new AgeCalculate("Raghav", 23, 1997);
console.log(user1);
const user2 = new AgeCalculate("Raghav", 28, 1999);

// object oriented principle ----------------------------------------------------------------

let key = "spicies";

const Breeds = {
  spicies: "dog",
  eat: "bone",
  name: "tomy",
};

console.log(Breeds[key], Breeds.eat, Breeds["name"]);

//  All the keys are stringified.

class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
  sayHi() {
    return "Hello from a triangle";
  }
}

