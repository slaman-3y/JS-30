// //Function Declaration
// function printHelloWorld(){
//   console.log("Hello World");
// }

// printHelloWorld();

// //Sum of two numbers
// function sum(a, b){
//   return a+b;
// }

// console.log(sum(1,5));

// //Fucntion Expression
// const max = function(a, b){
//   return a > b ? a : b;
// }
// console.log(max(5,10));

// //Arrow Functions
// const sumArrow = (a, b) => a + b;
// console.log(sumArrow(10,20));

// Activity 1: Function Declaration

// Task 1: Check if a number is even or odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
      console.log(`${number} is even`);
  } else {
      console.log(`${number} is odd`);
  }
}
checkEvenOdd(7); // Output: 7 is odd
checkEvenOdd(8); // Output: 8 is even

// Task 2: Calculate the square of a number
function square(number) {
  return number * number;
}
console.log(square(5)); // Output: 25
console.log(square(9)); // Output: 81

// Activity 2: Function Expression

// Task 3: Find the max of two numbers
const findMax = function(a, b) {
  return a > b ? a : b;
};
console.log(findMax(10, 20)); // Output: 20
console.log(findMax(15, 5));  // Output: 15

// Task 4: Concatenate two strings
const concatenateStrings = function(str1, str2) {
  return str1 + str2;
};
console.log(concatenateStrings("Hello, ", "World!")); // Output: Hello, World!

// Activity 3: Arrow Function

// Task 5: Calculate the sum of two numbers
const sum = (a, b) => a + b;
console.log(sum(5, 10)); // Output: 15

// Task 6: Check if a string contains a specific character
const containsCharacter = (str, char) => str.includes(char);
console.log(containsCharacter("JavaScript", "S")); // Output: true
console.log(containsCharacter("JavaScript", "Z")); // Output: false

// Activity 4: Function Parameters and Default Values

// Task 7: Return the product of two numbers with a default value
function product(a, b = 1) {
  return a * b;
}
console.log(product(5));    // Output: 5
console.log(product(5, 10)); // Output: 50

// Task 8: Return a greeting message with a default value for age
function greet(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Alice"));         // Output: Hello, Alice! You are 18 years old.
console.log(greet("Bob", 25)); // Output: Hello, Bob! You are 25 years old.

// Activity 5: Higher-Order Functions

// Task 9: Call a function a certain number of times
function repeatFunction(fn, times) {
  for (let i = 0; i < times; i++) {
      fn();
  }
}
repeatFunction(() => console.log("Hello"), 3);
// Output: 
// Hello
// Hello
// Hello

// Task 10: Apply two functions sequentially
function applyFunctions(fn1, fn2, value) {
  return fn2(fn1(value));
}
const multiplyByTwo = x => x * 2;
const addFive = x => x + 5;
console.log(applyFunctions(multiplyByTwo, addFive, 10)); // Output: 25
