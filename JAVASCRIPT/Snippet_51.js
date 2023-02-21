const container = document.getElementById("container");
const pokemon = [];
const baseURL = `https://pokeapi.co/api/v2/`;
const pokemonURL = `pokemon/`;
const species = `pokemon-species/`;
const query1 = `limit=30`;
let html = "";
fetch(`${baseURL}${pokemonURL}?${query1}`).then((r) => r.json()).then((d) => {
    for(let i = 0; i < d.results.length; i++) {
        let val = d.results[i];
        fetch(`${val.url}`).then(res => res.json()).then(data => {
            pokemon.push({
                id : data.id,
                img : data.sprites.front_default,
                name : data.name,
            });
            fetch(`${data.species.url}`).then((res1) => res1.json()).then((data1) => {
                pokemon[i].description = data1.flavor_text_entries[0].flavor_text;
                html += `
                <div class="pokemon" data-id="${pokemon[i].id}}">
                    <span>${pokemon[i].id}</span>
                    <img src="${pokemon[i].img}" alt="${pokemon[i].img}"/>
                    <span>${pokemon[i].name}</span>
                    <p class="description">${pokemon[i].description}</p>
                </div>
            `;
            container.innerHTML = html;
            })
        })
    }
})