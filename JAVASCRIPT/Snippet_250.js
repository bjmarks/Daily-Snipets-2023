const myCar = {type:"Fiat", model:"500", color:"white"};
delete myCar.color;
let carColor = myCar.color;
console.log(carColor);// undefined