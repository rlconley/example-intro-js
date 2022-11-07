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
