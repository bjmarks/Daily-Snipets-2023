const people = ["sally", "kyle", "john"];
const newPeople = people.toSpliced(0, 2, "New");
console.log("spliced: ", newPeople);
// now array from people is unaltered
console.log("original: ", people);