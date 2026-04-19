// lesson2.ts
// This lesson teaches arrays and objects.

// An array is a list of values.
// This array only allows strings.
let favoriteFoods: string[] = ["pizza", "tacos", "apples"];

console.log("Favorite foods:", favoriteFoods);
console.log("First food:", favoriteFoods[0]);

// We can add a new item to the array.
favoriteFoods.push("pasta");

console.log("Updated foods:", favoriteFoods);

// An object groups related values together.
let student: {
  name: string;
  age: number;
  isLearning: boolean;
} = {
  name: "Kevin",
  age: 25,
  isLearning: true
};

console.log("Student name:", student.name);
console.log("Student age:", student.age);
console.log("Is learning:", student.isLearning);

// This function takes an object and returns a sentence.
function describeStudent(person: {
  name: string;
  age: number;
  isLearning: boolean;
}): string {
  return `${person.name} is ${person.age} years old. Learning TypeScript: ${person.isLearning}`;
}

console.log(describeStudent(student));
