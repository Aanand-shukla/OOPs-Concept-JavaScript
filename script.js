let o1 = {};
let o2 = new Object();

o1.name = "Whiskey";
o2["name"] = "Rum";
console.log(o1);
console.log(o2);

const key = "species";

const pet = {
  species: "Dog",
  name: "Sheru",
  age: 13,
};

console.log(pet[key]);

pet[true] = "Bone";

console.log(pet["true"], pet);

// Mixing Data and Object with function
c;
