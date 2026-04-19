// lesson2.ts
// // This lesson teaches arrays and objects.
// This is just a comment (ignored by the computer).
// It tells us the goal: learn arrays and objects.

// An array is a list of values.
// This array only allows strings.
// What’s happening here?
// let → creates a variable
// favoriteFoods → variable name
// : string[] → type annotation
// This means: “this must be an array of strings”
// ["pizza", "tacos", "apples"] → actual data
let favoriteFoods: string[] = ["pizza", "tacos", "apples"];

// console.log() → prints to the terminal
// favoriteFoods → prints the whole array
// favoriteFoods[0] → gets the first item in the array (index starts at 0)
// Important:

// Arrays use zero-based indexing
console.log("Favorite foods:", favoriteFoods);
console.log("First food:", favoriteFoods[0]);

// We can add a new item to the array.
favoriteFoods.push("pasta"); // push() adds to the end of the array

console.log("Updated foods:", favoriteFoods);

// An object groups related values together.
// This object has three properties: name, age, and isLearning.
type Student = {
  name: string;
  age: number;
  isLearning: boolean;
};

let students: Student[] = [
  { name: "Alice", age: 20, isLearning: true },
  { name: "Bob", age: 22, isLearning: false },
  { name: "Charlie", age: 19, isLearning: true },
];

// This function takes an object and returns a sentence.
// The parameter person has a specific structure (name, age, isLearning).
// The function uses template literals (backticks) to create a string that includes the person's information.
function describeStudent(person: Student): string {
  return `${person.name} is ${person.age} years old. Learning TypeScript: ${person.isLearning}`;
}

for (let student of students) {
  console.log(describeStudent(student));
}

