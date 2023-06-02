const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 250},
    {name: "Album", price: 15},
    {name: "Book", price: 10},
    {name: "Phone", price: 1000},
    {name: "Mouse", price: 45},
    {name: "Computer", price: 1200},
    {name: "Keyboard", price: 125}
]
const cheapItems = items.some((item) => {
    return item.price <= 500
})
console.log(cheapItems);
const allCheap = items.every((item) => {
    return item.price <= 500
})
console.log(allCheap);