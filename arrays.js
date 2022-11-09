// Array methods
let colors = ["blue", "red", "green", "yellow"];
// push adds to the end of an array
colors.push("orange");
console.log(colors);

// pop removes the last element from an array and returns it
let removed = colors.pop();
console.log(removed);
console.log(colors);
removed = colors.pop();
console.log(removed);
console.log(colors);

// when you modify arrays, you want to make a copy and modify the copy
let copy = colors.slice();
// can use slice
let newColorArray = [...colors];
// or spread operator - newer syntax

// indexOf tells us where an item is in the array
let position = colors.indexOf("red");
console.log(position);

// Transforming an array
let temps = [24, 89, 36, 10, 50, 100];
// create a new array which shows whether each temp was above freezing
let unfrozen = [];
for (let temp of temps) {
  unfrozen.push(temp > 32);
}
console.log(unfrozen);

let names = ["John", "Capel", "Daniel", "Rebecca", "Jerome"];
let initials = [];
for (let name of names) {
  initials.push(name[0]);
}
console.log(initials);
console.log(names);

// Filtering an array returns a new array wth only the values that satisfy the given condition
let filteredTemps = [];
for (let temp of temps) {
  if (temp > 32) {
    filteredTemps.push(temp);
  }
}
console.log(filteredTemps);

// Reduce an array to one value (sum, max, min)
// let's find highest temp
let max = null;
for (let temp of temps) {
  console.log(`temp is: ${temp}`);
  if (temp > max) {
    max = temp;
    console.log(`max is now: ${max}`);
  }
}
