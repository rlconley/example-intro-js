console.log("page loaded");

// math examples
console.log((3 * 8) / 2);
console.log(4 + 3 - 8);

// modulo gives us the remainder
console.log(47 % 2);

// ** is "to the power of"
console.log(3 ** 2);
console.log(16 ** 0.5);

// typeof tells us what data type a value is

console.log(typeof (3 + "4"));
console.log(typeof (3 - "4"));

// we declare variables with let (can be assigned a new value) and const (cannot assign a new value)
const temp = 72;
console.log("const temp:", typeof temp);

let price;
// declaration and assignment can happen separately or together with let
console.log("value of price: ", price);
price = 0.99;
console.log("value of price: ", price);

let student = "Daniel";
console.log("current student: ", student);
student = "John";
console.log("current student: ", student);

// can reassign with a calculated value
let score = 0;
score = score + 5;
console.log("current score: ", score);

score += 6;
console.log("current score: ", score);
// touchdown
score++;
console.log("current score: ", score);
// extra point
score *= 2;
console.log("current score: ", score);
// other team's score

// represent football game
let bamaScore = 0;
let lsuScore = 0;

// Exercise
// represent Bama scoring two touchdowns with no extra point and a safety

// represent LSU scoring 3 touchdowns, 2 with extra points and one with a 2pt conversion

// Conditionals
let weather;
// weather = "raining";
weather = "sunny";

if (weather === "raining") {
  console.log("Wear a raincoat.");
} else if (weather === "sunny") {
  console.log("Take a walk.");
} else console.log("It is neither raining nor sunny.");

let highTemp = 80;
highTemp += 15;

if (highTemp <= 85) {
  console.log("Walk with 🐕");
} else {
  console.log("Don't take 🐕");
}

if (weather !== "sunny") {
  // if no else statement and condition not met, nothing happens
  console.log("You are not in SoCal.");
}

// truthy, falsy, logical operators
console.log(Boolean(true && 0));
console.log(Boolean(9 - 18));
console.log(Boolean(9 - 9));
console.log(9 < 10 || "a" === "b");
// true or false is true
console.log(9 < 7 || "a" === "b");
// false or false is false
console.log(9 < 10 && "a" === "a");
// true and true is true
console.log(9 < 10 && Boolean(""));
// true and false is false

// volleyball

let uncScore = 0;
let dukeScore = 0;

// while loops continue a process until a condition is met

while (uncScore < 21 && dukeScore < 21) {
  // condition is evaluated, and all the code in the {} runs
  // play game
  uncScore++;
  if (uncScore === 21) {
    break;
  }
  dukeScore++;
}
// after all the code in the {} runs
console.log("Score: UNC - ", uncScore, "Duke - ", dukeScore);

// for loops
// do something a specific number of times
// Play 8 chords on the 🪗
for (let count = 0; count < 8; count++) {
  console.log(count, " new 🪗 chord");
}

// functions
function ordinal(num) {
  // during the execution of this block, num is assigned whatever value was passed as an argument inside the () when the function was called. The value re-sets when the function is done executing.
  if ((num > 3 && num <= 20) || (num < -3 && num >= -20)) {
    return num + "th";
  } else if (Math.abs(num % 10) === 1) {
    return num + "st";
  } else if (Math.abs(num % 10) === 2) {
    return num + "nd";
  } else if (Math.abs(num % 10) === 3) {
    return num + "rd";
  }
  return num + "th";
}

// have to call the function with argument(s) in order for the code block to execute
let ordinalized = ordinal(25);
// if you want to use what the function returns, you need to assign it to a variable
// otherwise the program returns the value to memory and it eventually gets picked up in garbage collection
console.log(ordinalized);

let names = ["Capel", "Daniel", "Jerome", "John"];
let capNames = [];

for (let name of names) {
  capNames.push(name.toUpperCase());
  // transform each element of the old array one at a time and push to new array
}

let shortNames = [];
for (let name of names) {
  if (name.length < 5) {
    // push element to new array if it meets the condition
    shortNames.push(name);
  }
}

console.log("Cap Names: ", capNames);
console.log("Short names: ", shortNames);

// if we want to keep track of the index while we are looping through an array, we can use a for loop

let counties = ["Granville", "Harnett", "Orange", "Duplin", "Durham", "Wake"];

for (let idx = 0; idx < counties.length; idx++) {
  console.log(`${counties[idx]} was number ${idx + 1} to report.`);
}
