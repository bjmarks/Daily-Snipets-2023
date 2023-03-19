const container = document.getElementById("container");
const baseURL = `https://pokeapi.co/api/v2/`;
const pokemonURL = `pokemon/`;
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
let html = "";
let currentPokemon = 1;
leftArrow.addEventListener("click", row);
rightArrow.addEventListener("click", row);
function getPokemon(currentPokemon){
    fetch(`${baseURL}${pokemonURL}${currentPokemon}`).then((res) => res.json()).then((data) => {
        let types = [];
        for(let t = 0; t < data.types.length; t++) {
            types.push(` ${data.types[t].type.name}`);
        }
        let pokemon = {
            id : data.id,
            version: "red",
            img : data.sprites.front_default,
            name : data.name,
            type: types,
        };
        fetch(`${data.species.url}`).then((re) => re.json()).then((dat) => {
            let x = dat.flavor_text_entries;
            for(let w = 0; w < x.length; w++) {
                if(x[w].version.name == "red") {
                    let description = x[w].flavor_text.replaceAll("\n", " ").replaceAll("\f", " ");
                    pokemon.description = description.toLowerCase();
                }
            };
            html = `
                <div class="pokemon" data-id="${pokemon.id}}">
                    <span class="poke-id">${pokemon.id}</span>
                    <img class="poke-img" src="${pokemon.img}" alt="${pokemon.img}"/>
                    <span class="poke-name">${pokemon.name}</span>
                    <span class="poke-type">${pokemon.type}</span>
                    <p class="description">${pokemon.description}</p>
                </div>
            `;
            container.innerHTML = html;
            })
    })
}
getPokemon(1);
function row() {
        if(this.getAttribute("data-id") == "neg" && currentPokemon >= 0){
            currentPokemon = 150;
        }
        else if(this.getAttribute("data-id") == "neg") {
            currentPokemon--;
        }
        else if(this.getAttribute("data-id") == "pos" && currentPokemon >= 150) {
            currentPokemon = 1;
        }
        else {
            currentPokemon++;
        }
        getPokemon(currentPokemon);
    }