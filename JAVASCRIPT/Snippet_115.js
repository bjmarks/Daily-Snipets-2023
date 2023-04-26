// const function in javascript
// let count = 0;
// const counter = () => {
//     return count++;
// }
// console.log(counter()); //0
// console.log(counter()); //1
// console.log(counter()); //2




// closures in javaScript
const makeCounter = () => {
    let count = 0;
    return () => {
        return count++
    }
}
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1); //0
console.log(counter2); //0
console.log(counter2); //1
console.log(counter2); //2
console.log(counter1); //1


