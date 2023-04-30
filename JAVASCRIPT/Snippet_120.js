// number 5 duplicated in numbers array
const numbers = [1,2,3,4,5,5,6,7,8,9];
// only keeps unique values in this set
const uniqueNumbers = new Set(numbers);
// uniqueNumbers.delete(1) // deletes the number 1 value
console.log(uniqueNumbers);