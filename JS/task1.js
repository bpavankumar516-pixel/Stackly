// Task 1: Variable Update

var num = 50;
num = 100;
console.log(num);
// Output: 100

// Task 2: Let Variable Math

let marks = 80;
marks = marks + 10;
console.log(marks);
// Output: 90

// Task 3: Const Value

const price = 500;
let finalPrice = price + 100;
console.log(finalPrice);
// Output: 600

//  Task 4: Printing Statements

console.log("Welcome Team");
console.log(2026);
console.log(true);
// Output: Welcome Team
// Output: 2026
// Output: true

//  Task 5: Datatype Check

console.log(typeof "JavaScript");
console.log(typeof 250);
console.log(typeof false);
// Output: string
// Output: number
// Output: boolean

//  Task 6: Array Task

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
// Output: ["Apple", "Mango", "Banana", "Orange", "Grapes"]
// Output: Apple
// Output: Grapes

//  Task 7: Object Task

let student = {
  name: "Pavan",
  age: 20,
  course: "MERN",
};

console.log("name:", student.name, "age :", student.age);
// name: Pavan age : 20

// 🔹 Task 8: Arithmetic Operators

console.log("addition :", 20 + 10);
console.log("sub :", 50 - 25);
console.log("multi : ", 5 * 5);
console.log("div : ", 100 / 4);
console.log("mod : ", 20 % 3);

// addition : 30
// sub : 25
// multi : 25
// div : 25
// mod : 2

// 🔹 Task 9: Increment / Decrement/

let x = 5;
x++;
console.log("post  increment : ", x);

let y = 10;
y--;
console.log("post decrement : ", y);
// post  increment : 6
// post decrement : 9

// 🔹 Task 10: Comparison Operators

console.log(10 > 5);
console.log(5 < 2);
console.log(20 == "20");
console.log(15 === "15");
console.log(10 != 8);
// true
// false
// true
// false
// true

// Task 11: Logical Operators

console.log(5 > 2 && 10 > 3);
console.log(7 < 5 || 8 > 2);
console.log(!(10 > 5));

// true
// true
// false

// 🔹 Task 12: Ternary Operator
let age = 18;
let result = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result);

// Eligible
