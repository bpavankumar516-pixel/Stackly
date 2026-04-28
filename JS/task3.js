// ===============================
//  Level 1 – Functions Basics
// ===============================

// Task 1: Student Form Function

function studentForm(name, age, course) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Course:", course);
}

studentForm("Pavan", 24, "React");

/*
OUTPUT:
Name: Pavan
Age: 24
Course: React
*/

// Task 2: Calculator Function
function calc(a, b) {
  console.log("Addition:", a + b);
  console.log("Subtraction:", a - b);
  console.log("Multiplication:", a * b);
}

calc(10, 5);

/*
OUTPUT:
Addition: 15
Subtraction: 5
Multiplication: 50
*/

// Task 3: Reusable Greeting

function greet(name) {
  console.log("Hello", name);
}

greet("Kamal");
greet("Praveen");
greet("Sai");

/*
OUTPUT:
Hello Kamal
Hello Praveen
Hello Sai
*/

// ===============================
//  Level 2 – Return & Scope
// ===============================

// Task 4: Return Value

function square(num) {
  return num * num;
}

let result = square(10);
console.log("Square:", result);

/*
OUTPUT:
Square: 100
*/

// Task 5: Scope Check

function scopeTest() {
  let secret = "javascript";
  console.log("Inside:", secret);
}
// console.log("secret);
scopeTest();

/*
OUTPUT:
Inside: javascript
*/

// console.log(secret); using outside function ,its coming  error, (secret is not defined )

/*
Explanation:
Variable declared with 'let' inside function
cannot be accessed outside (block scope)
*/

// ===============================
//  Level 3 – Spread / Rest
// ===============================

// Task 6: Merge Arrays

let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let merged = [...boys, ...girls];
console.log("Merged:", merged);

/*
OUTPUT:
Merged: ["car", "bike", "doll", "teddy"]
*/

// Task 7: Unlimited Numbers

function sumAll(...nums) {
  let total = 0;

  for (let num of nums) {
    total += num;
  }

  return total;
}

console.log("Sum:", sumAll(10, 20, 30, 40));

/*
OUTPUT:
Sum: 100
*/

// ===============================
//  Level 4 – Destructuring
// ===============================

// Task 8: Array Destructuring

let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;

console.log(c1, c2, c3);

/*
OUTPUT:
red green blue
*/

// Task 9: Object Destructuring
let emp = {
  name: "Pavan",
  role: "Developer",
  salary: "5LPA",
};

let { name, role } = emp;

console.log(name, role);

/*
OUTPUT:
pavan Developer
*/

// ===============================
//  Level 5 – Generator Function
// ===============================

// Task 10: Offer Generator

function* offerGenerator() {
  yield "10% cashback";
  yield "20% cashback";
  yield "50% cashback";
  yield "Try again";
}

let offer = offerGenerator();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value || "No more offers");

/*
OUTPUT:
10% cashback
20% cashback
50% cashback
Try again
No more offers
*/

// ===============================
//  Level 6 – Advanced
// ===============================

// Task 11: Curry Function

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Curry:", add(10)(20)(30));

/*
OUTPUT:
Curry: 60
*/

// Task 12: Student Marks Analyzer

function marks(...nums) {
  let total = 0;

  for (let num of nums) {
    total += num;
  }

  let avg = total / nums.length;

  console.log("Total =", total);
  console.log("Average =", avg);
}

marks(80, 90, 70, 60);

/*
OUTPUT:
Total = 300
Average = 75
*/

// ===============================
//  Challenge Task
// ===============================

// Employee Registration System
function register(name, role, ...skills) {
  console.log("Name:", name);
  console.log("Role:", role);
  console.log("Skills:", skills.join(" "));
}

register("Pavan", "Frontend", "HTML", "CSS", "JS", "React");
register("Anil", "Python developer", "Python", "SQL", "Numpy", "Pandas");

/*
OUTPUT:
Name: Pavan
Role: Frontend
Skills: HTML CSS JS React

OUTPUT:
Name: Anil
Role: Python developer
Skills: Python SQL Numpy Pandas
*/
