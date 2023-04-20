// rest parameters
const sum = (a,b, ...rest) => {
    return a + b + rest.reduce(
        (acc, val) => acc + val, 0
    )
}
sum(1,2,10,20,30) //63

const nums = [1,2,3]
const pizza = {
    crust: "thick",
    sauce: "red",
}


//spread parameters
const newNumsArrary = [...nums, 4]
const newPizza = {
    ...pizza,
    crust: "thin"
}
sum(...newNumsArrary)