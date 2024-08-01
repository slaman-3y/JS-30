// Activity 1: Template Literals
// Task 1
let name = "Salman";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// Task 2
let multiLineString = `This is a multi-line string.
It spans multiple lines.
Each line is separated by a newline character.`;
console.log(multiLineString);

// Activity 2: Destructuring
// Task 3
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(first, second); // Output: 1 2

// Task 4
let book = { title: "1984", author: "George Orwell", year: 1949 };
let { title, author } = book;
console.log(title, author); // Output: 1984 George Orwell

// Activity 3: Spread and Rest Operators
// Task 5
let existingArray = [1, 2, 3];
let newArray = [...existingArray, 4, 5, 6];
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

// Task 6
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10

// Activity 4: Default Parameters
// Task 7
const multiply = (a, b = 1) => a * b;
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5)); // Output: 5

// Activity 5: Enhanced Object Literals
// Task 8
name = "Salman";
age = 25;
let person = {
  name,
  age,
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};
console.log(person); // Output: { name: "Salman", age: 25, greet: [Function: greet] }
person.greet(); // Output: Hello, my name is Salman and I am 25 years old.

// Task 9
let propName = "dynamicProp";
let dynamicObject = {
  [propName]: "This is a dynamic property!"
};
console.log(dynamicObject); // Output: { dynamicProp: "This is a dynamic property!" }
