// ================================
// Student Data
// ================================

let students = [
  { id: 1, name: "Naveen", mark: 85, course: "MERN" },
  { id: 2, name: "John", mark: 45, course: "Python" },
  { id: 3, name: "Priya", mark: 72, course: "Java" },
  { id: 4, name: "Arun", mark: 95, course: "React" },
];

// ================================
// Task 1: Print All Students
// ================================

console.log("Task 1: Print All Students");

for (let i = 0; i < students.length; i++) {
  console.log(
    students[i].id,
    students[i].name,
    students[i].mark,
    students[i].course,
  );
}
/*result*/
// 1 Naveen 85 MERN
// 2 John 45 Python
// 3 Priya 72 Java
// 4 Arun 95 React

// ================================
// Task 2: Pass / Fail
// ================================

console.log("Task 2: Pass / Fail");

for (let i = 0; i < students.length; i++) {
  if (students[i].mark >= 50) {
    console.log(students[i].name + " - Pass");
  } else {
    console.log(students[i].name + " - Fail");
  }
}

/*
result:
Naveen - Pass
John - Fail
Priya - Pass
Arun - Pass
*/

// ================================
// Task 3: Grade System
// ================================

console.log("Task 3: Grade System");

for (let i = 0; i < students.length; i++) {
  if (students[i].mark >= 90) {
    console.log(students[i].name + " - A Grade");
  } else if (students[i].mark >= 75) {
    console.log(students[i].name + " - B Grade");
  } else if (students[i].mark >= 50) {
    console.log(students[i].name + " - C Grade");
  } else {
    console.log(students[i].name + " - Fail");
  }
}

/*
result:
Naveen - B Grade
John - Fail
Priya - C Grade
Arun - A Grade
*/

// ================================
// Task 4: Topper Student
// ================================

console.log("Task 4: Topper Student");

let topper = students[0];

for (let i = 0; i < students.length; i++) {
  if (students[i].mark > topper.mark) {
    topper = students[i];
  }
}

console.log("Topper is", topper.name, "-", topper.mark);

/*
result:
Topper is Arun - 95
*/

// ================================
// Task 5: Course Search
// ================================

console.log("Task 5: Course Search");

for (let i = 0; i < students.length; i++) {
  if (students[i].course == "React") {
    console.log(students[i]);
  }
}

/*
result:
{id: 4, name: "Arun", mark: 95, course: "React"}
*/

// ================================
// Task 6: Add New Student
// ================================

console.log("Task 6: Add New Student");

students[students.length] = {
  id: 5,
  name: "Rahul",
  mark: 88,
  course: "Node JS",
};

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

/*
result:
{id:1, name:"Naveen", mark:85, course:"MERN"}
{id:2, name:"John", mark:45, course:"Python"}
{id:3, name:"Priya", mark:72, course:"Java"}
{id:4, name:"Arun", mark:95, course:"React"}
{id:5, name:"Rahul", mark:88, course:"Node JS"}
*/

// ================================
// Task 7: Attendance System
// ================================

console.log("Task 7: Attendance System");

let status = "present";

switch (status) {
  case "present":
    console.log("Welcome");
    break;

  case "absent":
    console.log("Mark Absent");
    break;

  case "leave":
    console.log("Approved Leave");
    break;
}

/*
result:
Welcome
*/

// ================================
// Task 8: Login System
// ================================

console.log("Task 8: Login System");

let username = "admin";
let password = "1234";

if (username == "admin" && password == "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid User");
}

/*
result:
Login Success
*/
