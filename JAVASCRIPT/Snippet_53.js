const container = document.getElementById("container");
const pokemon = [];
const baseURL = `https://pokeapi.co/api/v2/`;
const pokemonURL = `pokemon/`;
const species = `pokemon-species/`;
const query1 = `limit=5`;
let html = "";
fetch(`${baseURL}${pokemonURL}?${query1}`).then((r) => r.json()).then((d) => {
    for(let i = 0; i < d.results.length; i++) {
        let val = d.results[i];
        fetch(`${val.url}`).then(res => res.json()).then(data => {
            // console.log(data);
            let types = [];
            for(let t = 0; t < data.types.length; t++) {
                types.push(data.types[t].type.name);
            }
            pokemon.push({
                id : data.id,
                img : data.sprites.front_default,
                name : data.name,
                type: types,
            });
            fetch(`${data.species.url}`).then((res1) => res1.json()).then((data1) => {
                let x = data1.flavor_text_entries;
                for(let w = 0; w < x.length; w++) {
                    if(x[w].version.name == "red") {
                        let description = x[w].flavor_text.replace("\n", " ").replace("\f", " ");
                        pokemon[i].description = description.toLowerCase();
                    }
                };
                html += `
                <div class="pokemon" data-id="${pokemon[i].id}}">
                    <span class="poke-id">${pokemon[i].id}</span>
                    <img class="poke-img" src="${pokemon[i].img}" alt="${pokemon[i].img}"/>
                    <span class="poke-name">${pokemon[i].name}</span>
                    <span class="poke-type">${pokemon[i].type}</span>
                    <p class="description">${pokemon[i].description}</p>
                </div>
            `;
            container.innerHTML = html;
            })
        })
    }
})