// Task 1: Variable Update

var num = 50;
num = 100;
console.log(num);

// Task 2: Let Variable Math

let marks = 80;
marks = marks + 10;
console.log(marks);

// Task 3: Const Value

const price = 500;
let finalPrice = price + 100;
console.log(finalPrice);

//  Task 4: Printing Statements

console.log("Welcome Team");
console.log(2026);
console.log(true);

//  Task 5: Datatype Check

console.log(typeof "JavaScript");
console.log(typeof 250);
console.log(typeof false);

//  Task 6: Array Task

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//  Task 7: Object Task

let student = {
  name: "Pavan",
  age: 20,
  course: "MERN",
};

console.log("name:", student.name, "age :", student.age);

// 🔹 Task 8: Arithmetic Operators

console.log("addition :", 20 + 10);
console.log("sub :", 50 - 25);
console.log("multi : ", 5 * 5);
console.log("div : ", 100 / 4);
console.log("mod : ", 20 % 3);

// 🔹 Task 9: Increment / Decrement/

let x = 5;
x++;
console.log("post  increment : ", x);

let y = 10;
y--;
console.log("post decrement : ", y);

// 🔹 Task 10: Comparison Operators

console.log(10 > 5);
console.log(5 < 2);
console.log(20 == "20");
console.log(15 === "15");
console.log(10 != 8);

// Task 11: Logical Operators

console.log(5 > 2 && 10 > 3);
console.log(7 < 5 || 8 > 2);
console.log(!(10 > 5));

// 🔹 Task 12: Ternary Operator
let age = 18;
let result = age >= 18 ? "Eligible" : "Not Eligible";
console.log(result);
