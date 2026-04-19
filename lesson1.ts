// lesson1.ts
// This is a beginner-friendly TypeScript file.
// TypeScript is like JavaScript, but with extra help for types.

// A string is text.
let userName: string = "Kevin";

// A number is a numeric value.
let age: number = 25;

// A boolean is true or false.
let isLearning: boolean = true;

// This function says hello.
// The name inside the parentheses must be a string.
function sayHello(name: string): string {
  return `Hello, ${name}!`;
}

// We can store the function result in a variable.
let message: string = sayHello(userName);

console.log(message);
console.log("Age:", age);
console.log("Learning TypeScript:", isLearning);

