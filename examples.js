let container = document.querySelector("#main");
// get an element on the

let students = ["Capel", "John", "Jerome", "Daniel"];

students.push("Nutmeg");

// for (let student of students) {
//   let el = document.createElement("p");
//   el.innerText = student;
//   container.append(el);
// }

// Arrays
// for of loops
// push
// pop

let records = [
  "D'Angelo",
  "Anthrax",
  "Childish Gambino",
  "Red Hot Chili Peppers",
  "Dave Brubeck",
  "Japanese Flute Music",
  "Hans Zimmer",
  "Dubstep Essentials",
];

let dSection = [];

for (let record of records) {
  console.log(record);
  if (record[0] === "D") {
    dSection.push(record);
  }
}
console.log(`D records: ${dSection}`);

for (let record of dSection) {
  let el = document.createElement("p");
  el.innerText = record;
  container.append(el);
}
