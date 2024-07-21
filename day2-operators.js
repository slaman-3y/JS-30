let num1 = 5;
let num2 = 3;
let sum = num1+num2;
console.log("Sum of two numbers: ", sum);

let difference = num1 - num2;
console.log("Difference:", difference); // Output: Difference: 2

let product = num1 * num2;
console.log("Product:", product); // Output: Product: 15


let quotient = num1 / num2;
console.log("Quotient:", quotient); // Output: Quotient: 1.6666666666666667

let remainder = num1 % num2;
console.log("Remainder:", remainder); // Output: Remainder: 2


let addAssign = 10;
addAssign += 5;
console.log("Add and Assign:", addAssign); // Output: Add and Assign: 15


let subtractAssign = 10;
subtractAssign -= 5;
console.log("Subtract and Assign:", subtractAssign); // Output: Subtract and Assign: 5


let isEqual = (num1 == num2);
console.log("Is Equal:", isEqual); // Output: Is Equal: false

let isStrictEqual = (num1 === num2);
console.log("Is Strictly Equal:", isStrictEqual); // Output: Is Strictly Equal: false


let isNotEqual = (num1 != num2);
console.log("Is Not Equal:", isNotEqual); // Output: Is Not Equal: true


let isStrictNotEqual = (num1 !== num2);
console.log("Is Strictly Not Equal:", isStrictNotEqual); // Output: Is Strictly Not Equal: true


let isGreaterThan = (num1 > num2);
console.log("Is Greater Than:", isGreaterThan); // Output: Is Greater Than: true


let isLessThan = (num1 < num2);
console.log("Is Less Than:", isLessThan); // Output: Is Less Than: false

let andCondition = (num1 > 0 && num2 > 0);
console.log("And Condition:", andCondition); // Output: And Condition: true

let orCondition = (num1 > 0 || num2 > 0);
console.log("Or Condition:", orCondition); // Output: Or Condition: true


let notCondition = !(num1 < 0);
console.log("Not Condition:", notCondition); // Output: Not Condition: true


let number = -5;
let result = (number >= 0) ? "Positive" : "Negative";
console.log("Number is:", result); // Output: Number is: Negative


let a = 12;
let b = 4;

console.log("Addition:", a + b);         // Output: Addition: 16
console.log("Subtraction:", a - b);      // Output: Subtraction: 8
console.log("Multiplication:", a * b);   // Output: Multiplication: 48
console.log("Division:", a / b);         // Output: Division: 3
console.log("Remainder:", a % b);        // Output: Remainder: 0


let x = 7;
let y = 10;

console.log("x == y:", x == y);               // Output: x == y: false
console.log("x === y:", x === y);             // Output: x === y: false
console.log("x != y:", x != y);               // Output: x != y: true
console.log("x !== y:", x !== y);             // Output: x !== y: true
console.log("x > y:", x > y);                 // Output: x > y: false
console.log("x < y:", x < y);                 // Output: x < y: true
console.log("x >= y:", x >= y);               // Output: x >= y: false
console.log("x <= y:", x <= y);               // Output: x <= y: true

let condition1 = (x > 0 && y > 0);
let condition2 = (x > 0 || y < 0);
let condition3 = !(x < 0);

console.log("x > 0 && y > 0:", condition1);   // Output: x > 0 && y > 0: true
console.log("x > 0 || y < 0:", condition2);   // Output: x > 0 || y < 0: true
console.log("!(x < 0):", condition3);         // Output: !(x < 0): true


let num = -15;
let check = (num >= 0) ? "Positive" : "Negative";
console.log("The number is:", check); // Output: The number is: Negative



