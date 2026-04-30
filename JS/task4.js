/* ================= LEVEL 1 ================= */

// Task 1: Array Basics
let arr1 = [10, 20, 30, 40, 50]; // create array

console.log("\nTask 1:");
console.log("First:", arr1[0]); // access first element (index 0)
console.log("Last:", arr1[arr1.length - 1]); // last element using length - 1
console.log("Length:", arr1.length); // total number of elements

/*
Output:
First: 10
Last: 50
Length: 5
*/

// Task 2: Push & Pop
let arr2 = [1, 2, 3]; // initial array

arr2.push(4, 5); // add elements at end -> [1,2,3,4,5]
arr2.pop(); // remove last element -> [1,2,3,4]

console.log("\nTask 2:", arr2);

/*
Output:
[1,2,3,4]
*/

// Task 3: Includes
let arr3 = ["html", "css", "javascript", "react"]; // string array

console.log("\nTask 3:", arr3.includes("javascript")); // check existence

/*
Output:
true
*/

/* ================= LEVEL 2 ================= */

// employee array (objects)
let emp = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 },
];

// Task 4: Filter (salary > 20000)
let highSalary = emp.filter((e) => e.salary > 20000); // filter condition

console.log("\nTask 4:", highSalary);

/*
Output:
[
 {name:"B", salary:50000},
 {name:"C", salary:30000}
]
*/

// Task 5: Map (get only names)
let names = emp.map((e) => e.name); // extract name field

console.log("\nTask 5:", names);

/*
Output:
["A","B","C"]
*/

// Task 6: Reduce (total salary)
let totalSalary = emp.reduce((sum, e) => sum + e.salary, 0); // sum all salaries

console.log("\nTask 6:", totalSalary);

/*
Output:
90000
*/

/* ================= LEVEL 3 ================= */

// Task 7: Remove Duplicates
let arr4 = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(arr4)]; // Set removes duplicates

console.log("\nTask 7:", unique);

/*
Output:
[1,2,3,4,5]
*/

// Task 8: Largest Number
let arr5 = [10, 200, 5, 90];

let max = Math.max(...arr5); // spread + max

console.log("\nTask 8:", max);

/*
Output:
200
*/

// Task 9: Reverse String
let str = "hello";
let reversed = ""; // empty string

for (let i = str.length - 1; i >= 0; i--) {
  // loop backwards
  reversed += str[i]; // append characters
}

console.log("\nTask 9:", reversed);

/*
Output:
olleh
*/

/* ================= LEVEL 4 ================= */

// Task 10: Group by Salary
let emp2 = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 10000 },
];

let grouped = emp2.reduce((acc, e) => {
  if (!acc[e.salary]) acc[e.salary] = []; // create key if not exists
  acc[e.salary].push(e.name); // push name into salary group
  return acc;
}, {});

console.log("\nTask 10:", grouped);

/*
Output:
{
  10000: ["A","C"],
  50000: ["B"]
}
*/

// Task 11: Flatten Array (recursive)
let arr6 = [1, [2, [3, [4]]]];

function flatten(arr) {
  let res = [];

  for (let i of arr) {
    if (Array.isArray(i)) {
      // check if nested array
      res = res.concat(flatten(i)); // recursion
    } else {
      res.push(i); // push value
    }
  }

  return res;
}

console.log("\nTask 11:", flatten(arr6));

/*
Output:
[1,2,3,4]
*/

// Task 12: Sort Descending
let arr7 = [5, 2, 9, 1];

arr7.sort((a, b) => b - a); // descending order

console.log("\nTask 12:", arr7);

/*
Output:
[9,5,2,1]
*/

/* ================= BONUS ================= */

// Task 13: Second Largest
let arr8 = [10, 50, 20, 40];

let sorted = [...new Set(arr8)].sort((a, b) => b - a); // remove duplicates + sort

console.log("\nTask 13:", sorted[1]); // second largest

/*
Output:
40
*/

// Task 14: Count Characters
let str2 = "aabbccdde";
let count = {}; // empty object

for (let ch of str2) {
  count[ch] = (count[ch] || 0) + 1; // increment count
}

console.log("\nTask 14:", count);

/*
Output:
{
  a:2,
  b:2,
  c:2,
  d:2,
  e:1
}
*/
