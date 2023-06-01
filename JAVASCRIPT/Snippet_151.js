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
items.forEach((item) => {
    console.log("a " + item.name + " costs $" + item.price);
})