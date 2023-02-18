const pokeball = document.getElementById("poke");
fetch("https://pokeapi.co/api/v2/pokemon/?limit=5").then(res=>res.json()).then(data => {
    for(let i = 0; i < data.results.length; i++) {
        // console.log(data.results[i]);
        let val = data.results[i];
        let name = document.createElement("span");
        name.innerHTML = `${(val.name).toUpperCase()} <br>`;
        pokeball.appendChild(name);
    }
})