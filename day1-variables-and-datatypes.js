// Activity 1: Variable Declaration
var numberVar = 10;
console.log(numberVar); // Output: 10

let stringLet = "Hello, World!";
console.log(stringLet); // Output: Hello, World!

// Activity 2: Constant Declaration
const booleanConst = true;
console.log(booleanConst); // Output: true

// Activity 3: Data Types
let numberType = 42;
let stringType = "JavaScript";
let booleanType = false;
let objectType = { name: "John", age: 30 };
let arrayType = [1, 2, 3, 4, 5];

console.log(typeof numberType); // Output: number
console.log(typeof stringType); // Output: string
console.log(typeof booleanType); // Output: boolean
console.log(typeof objectType); // Output: object
console.log(typeof arrayType); // Output: object

// Activity 4: Reassigning Variables
let reassignLet = "Initial Value";
console.log(reassignLet); // Output: Initial Value

reassignLet = "New Value";
console.log(reassignLet); // Output: New Value

// Activity 5: Understanding const
const reassignConst = "Cannot Change";
console.log(reassignConst); // Output: Cannot Change

// reassignConstDemo = "Reassigned Const Value"; // This will cause a TypeError: Assignment to constant variable.

//Feature Request:Variable Types Console Log
let num = 100;
let str = "30 days javscript challenge";
let bool = true;
let obj = {name: "salman", profession:"Tester"};
let arr = ["Javascript", "Cypress", "Typescript", "Playwright"];

console.log("Value:", num, "Type:", typeof num); // Output: Value: 100 Type: number
console.log("Value:", str, "Type:", typeof str); // Output: Value: JavaScript is fun! Type: string
console.log("Value:", bool, "Type:", typeof bool); // Output: Value: true Type: boolean
console.log("Value:", obj, "Type:", typeof obj); // Output: Value: { name: "Alice", hobby: "coding" } Type: object
console.log("Value:", arr, "Type:", typeof arr); // Output: Value: ["HTML", "CSS", "JavaScript"] Type: object

// Feature Request: Reassignment Demo
let reassignLetDemo = "Initial Let Value";
console.log("Initial:", reassignLetDemo); // Output: Initial: Initial Let Value

reassignLetDemo = "Reassigned Let Value";
console.log("Reassigned:", reassignLetDemo); // Output: Reassigned: Reassigned Let Value

const reassignConstDemo = "Initial Const Value";
console.log("Initial:", reassignConstDemo);
// reassignConstDemo = "Reassigned Const Value"; // This will cause a TypeError: Assignment to constant variable.