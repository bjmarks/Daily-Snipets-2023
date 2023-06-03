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
const total = items.reduce((currentTotal, item ) => {
    return item.price + currentTotal
}, 0)
console.log(total);
