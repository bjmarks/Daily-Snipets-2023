let pentagon = document.getElementById("pent");
document.addEventListener("mouseover", (e) => {
    console.log(`x: ${e.clientX - 660} y: ${e.clientY -10}`);
    
})
pentagon.addEventListener("click", (e) => {
    let poly = document.getElementById("stat");
    poly.setAttribute("points", `300 100, ${e.clientX - 660} ${e.clientY - 10}, 360 381, 215 425, 160 250`)
})