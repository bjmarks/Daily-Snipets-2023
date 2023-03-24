const container = document.getElementById("container");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const input = document.getElementById("text");
const pokedex = document.getElementById("pokedex");
const submit = document.getElementById("submit");
const baseURL = `https://pokeapi.co/api/v2/`;
const pokemonURL = `pokemon/`;
let max = 32;
let html = "";
let poke = {};
let dex = "";
let maxPokemon = 151;
let currentPokemon = 1;
let query = `limit=${max}`;
function getPokedex() {
    for (let i = 0; i < max; i++) {
        fetch(`${baseURL}${pokemonURL}${i + 1}`).then((res) => res.json()).then((data) => {
            poke = {
                id : data.id,
                img : data.sprites.front_default,
                name : data.name,
            };
            dex = `
            <div class="dex" data-poke-id="${poke.id}">
                <span>${poke.id}</span>
                <img src="${poke.img}" alt="${poke.name}"/>
                <span>${poke.name}</span>
            </div>
            `;
        pokedex.innerHTML += dex;
        })
    };
}
function getPokemon(currentPokemon){
    currentPokemon == 0 ? currentPokemon = 1 : currentPokemon = currentPokemon
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
                <span class="description">${pokemon.description}</span>
            </div>
            `;
            container.innerHTML = html;
            })
    })
}
async function getPokemonByName(currentPokemon){
    let asyncData;
    try {
        const response = await fetch(`${baseURL}${pokemonURL}${currentPokemon.toLowerCase()}`);
        asyncData = await response.json();
    }
    catch (error) {
        if (error instanceof SyntaxError) {
            container.innerHTML = `
            <div class="pokemon" data-id="0">
                <span class="poke-id">${0}</span>
                <img class="poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png" alt="unknown Pokemon"/>
                <span class="poke-name">${currentPokemon}</span>
                <span class="poke-type">null</span>
                <span class="description">There was a Error, You might Have misspelled the name</span>
            </div>
            `;
        }
        else {
            container.innerHTML = `
            <div class="pokemon" data-id="0">
                <span class="poke-id">${0}</span>
                <img class="poke-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png" alt="unknown Pokemon"/>
                <span class="poke-name">${currentPokemon}</span>
                <span class="poke-type">null</span>
                <span class="description">There was a Error, You might Have misspelled the name</span>
            </div>
            `;
            console.log('There was an error', error);
        }
    }
    if (asyncData) {
        let types = [];
        for(let t = 0; t < asyncData.types.length; t++) {
            types.push(` ${asyncData.types[t].type.name}`);
        }
        let pokemon = {
            id : asyncData.id,
            version: "red",
            img : asyncData.sprites.front_default,
            name : asyncData.name,
            type: types,
        };
        fetch(`${asyncData.species.url}`).then((re) => re.json()).then((dat) => {
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
                <span class="description">${pokemon.description}</span>
            </div>
            `;
            container.innerHTML = html;
        })
    }

}
function checkInput() {
    if(parseInt(input.value) > 0) {
        console.log("Search Pokemon By ID: " + input.value);
        currentPokemon = input.value;
        getPokemon(currentPokemon);
        input.value = "";
    }
    else if(input.value == "") {
        console.log("empty search");
    }
    else {
        console.log("Search Pokemon By Name: " + input.value)
        getPokemonByName(input.value);
        input.value = "";
    }
}
function textSubmit(e) {
    e.preventDefault;
    checkInput();
}
function row() {
    // console.log(this.getAttribute("data-id"));
    if(this.getAttribute("data-id") == "neg" && currentPokemon == 0){
        currentPokemon = maxPokemon;
    }
    else if(this.getAttribute("data-id") == "neg") {
        currentPokemon -= 1;
    }
    else if(this.getAttribute("data-id") == "pos" && currentPokemon >= maxPokemon) {
        currentPokemon = 1;
    }
    else {
        currentPokemon++;
    }
    getPokemon(currentPokemon);
}
submit.addEventListener("click", textSubmit);
leftArrow.addEventListener("click", row);
rightArrow.addEventListener("click", row);
getPokemon(1);
setTimeout(() => getPokedex(), 500);