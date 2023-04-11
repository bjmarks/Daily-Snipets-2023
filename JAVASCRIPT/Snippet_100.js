let app = document.getElementById("app");
let html;
(async () => {
    const fetchData = async (endpoint) => {
    const response = await fetch(`https://pokeapi.co/api/v2/${endpoint}`)
    return response.json()
}
const parallel = async (i) => {
    const pokeData = fetchData(`pokemon/${i}`)
    const pokeDesc = fetchData(`pokemon-species/${i}`)
    const [pokemon, description] = await Promise.all([pokeData, pokeDesc])
    const currentPokemon = {
            "id": pokemon.id,
            "name" : pokemon.name,
            "img" : pokemon.sprites.other.home.front_default,
            "stats" : pokemon.stats,
            "types" : pokemon.types,
            "ability" : pokemon.abilities,
            "description" : description.flavor_text_entries,
            "evolve_from" : description.evolves_from_species?.name,
        }
    return currentPokemon
} 
for(let i = 1; i < 15; i++){
    const pk = await parallel(i);
    html = `
    <h1>${pk.name}</h1>
    <img src="${pk.img}">
    <p>${pk.id}</p>
    <p>${pk.description[0].flavor_text}</p>
    `;
    console.log(pk);
    app.innerHTML += html;
}
})();